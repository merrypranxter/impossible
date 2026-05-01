const ROOMS = ROOMS;
const START_ROOM = 0;

const canvas = document.getElementById("gl");
const gl = canvas.getContext("webgl2", { antialias: false, preserveDrawingBuffer: true });
if (!gl) {
  document.body.innerHTML = "<main class='panic'>WebGL2 not available. This shader goblin needs Chrome/Firefox/Safari with WebGL2 enabled.</main>";
  throw new Error("WebGL2 unavailable");
}

const frag = document.getElementById("frag").textContent.trim();
const vert = `#version 300 es
precision highp float;
const vec2 verts[3] = vec2[3](
  vec2(-1.0, -1.0),
  vec2( 3.0, -1.0),
  vec2(-1.0,  3.0)
);
void main(){ gl_Position = vec4(verts[gl_VertexID], 0.0, 1.0); }`;

function compile(type, source) {
  const s = gl.createShader(type);
  gl.shaderSource(s, source);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(s);
    console.error(source);
    throw new Error(log);
  }
  return s;
}
const program = gl.createProgram();
gl.attachShader(program, compile(gl.VERTEX_SHADER, vert));
gl.attachShader(program, compile(gl.FRAGMENT_SHADER, frag));
gl.linkProgram(program);
if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
gl.useProgram(program);

const loc = {
  resolution: gl.getUniformLocation(program, "u_resolution"),
  time: gl.getUniformLocation(program, "u_time"),
  mouse: gl.getUniformLocation(program, "u_mouse"),
  room: gl.getUniformLocation(program, "u_room"),
  camPos: gl.getUniformLocation(program, "u_camPos"),
  yaw: gl.getUniformLocation(program, "u_yaw"),
  pitch: gl.getUniformLocation(program, "u_pitch"),
};

let state = {
  room: START_ROOM,
  cam: [0, 0.05, -5.2],
  yaw: 0,
  pitch: 0,
  mouse: [0, 0],
  dragging: false,
  last: [0, 0],
  autopilot: false,
  paused: false,
  startedAt: performance.now(),
};
const keys = new Set();

const roomSelect = document.getElementById("roomSelect");
const title = document.getElementById("roomTitle");
const trick = document.getElementById("roomTrick");
const wrong = document.getElementById("roomWrong");
const mood = document.getElementById("roomMood");
const tags = document.getElementById("roomTags");

ROOMS.forEach((r, i) => {
  const opt = document.createElement("option");
  opt.value = i;
  opt.textContent = `${String(i + 1).padStart(2, "0")} — ${r.title}`;
  roomSelect.appendChild(opt);
});
roomSelect.value = START_ROOM;

function setRoom(i) {
  state.room = Number(i);
  const r = ROOMS[state.room];
  title.textContent = r.title;
  trick.textContent = r.math_trick;
  wrong.textContent = r.wrong_physics;
  mood.textContent = r.mood;
  tags.textContent = r.tags.map(t => `#${t}`).join(" ");
  document.body.dataset.room = r.id;
}
setRoom(START_ROOM);

roomSelect.addEventListener("change", e => setRoom(e.target.value));
document.getElementById("resetBtn").onclick = () => {
  state.cam = [0, 0.05, -5.2];
  state.yaw = 0;
  state.pitch = 0;
};
document.getElementById("autoBtn").onclick = () => {
  state.autopilot = !state.autopilot;
  document.getElementById("autoBtn").textContent = state.autopilot ? "autopilot: ON" : "autopilot";
};
document.getElementById("pauseBtn").onclick = () => {
  state.paused = !state.paused;
  document.getElementById("pauseBtn").textContent = state.paused ? "resume" : "pause";
};
document.getElementById("shotBtn").onclick = () => {
  const a = document.createElement("a");
  const name = ROOMS[state.room].id + "_" + Date.now() + ".png";
  a.download = name;
  a.href = canvas.toDataURL("image/png");
  a.click();
};

window.addEventListener("keydown", (e) => {
  keys.add(e.key.toLowerCase());
  if (e.key >= "1" && e.key <= "9") { setRoom(Number(e.key) - 1); roomSelect.value = String(state.room); }
  if (e.key === "0") { setRoom(9); roomSelect.value = "9"; }
  if (e.key.toLowerCase() === "p") document.getElementById("pauseBtn").click();
});
window.addEventListener("keyup", (e) => keys.delete(e.key.toLowerCase()));
canvas.addEventListener("pointerdown", e => { state.dragging = true; state.last = [e.clientX,e.clientY]; canvas.setPointerCapture(e.pointerId); });
canvas.addEventListener("pointerup", e => { state.dragging = false; });
canvas.addEventListener("pointermove", e => {
  state.mouse = [e.clientX, innerHeight - e.clientY];
  if (state.dragging) {
    const dx = e.clientX - state.last[0], dy = e.clientY - state.last[1];
    state.yaw -= dx * 0.004;
    state.pitch = Math.max(-1.25, Math.min(1.25, state.pitch - dy * 0.004));
    state.last = [e.clientX, e.clientY];
  }
});

function resize() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  canvas.width = Math.floor(innerWidth * dpr);
  canvas.height = Math.floor(innerHeight * dpr);
  canvas.style.width = innerWidth + "px";
  canvas.style.height = innerHeight + "px";
  gl.viewport(0,0,canvas.width,canvas.height);
}
addEventListener("resize", resize);
resize();

function updateCamera(dt, t) {
  const speed = (keys.has("shift") ? 5.5 : 2.4) * dt;
  const sy = Math.sin(state.yaw), cy = Math.cos(state.yaw);
  const forward = [sy, 0, cy];
  const right = [cy, 0, -sy];
  if (keys.has("w")) { state.cam[0] += forward[0]*speed; state.cam[2] += forward[2]*speed; }
  if (keys.has("s")) { state.cam[0] -= forward[0]*speed; state.cam[2] -= forward[2]*speed; }
  if (keys.has("a")) { state.cam[0] -= right[0]*speed; state.cam[2] -= right[2]*speed; }
  if (keys.has("d")) { state.cam[0] += right[0]*speed; state.cam[2] += right[2]*speed; }
  if (keys.has(" ") || keys.has("e")) state.cam[1] += speed;
  if (keys.has("control") || keys.has("q")) state.cam[1] -= speed;

  if (keys.has("arrowleft")) state.yaw += 1.4*dt;
  if (keys.has("arrowright")) state.yaw -= 1.4*dt;
  if (keys.has("arrowup")) state.pitch = Math.min(1.25, state.pitch + 1.0*dt);
  if (keys.has("arrowdown")) state.pitch = Math.max(-1.25, state.pitch - 1.0*dt);

  if (state.autopilot) {
    state.cam[0] = Math.sin(t*0.21 + state.room) * 0.8;
    state.cam[1] = 0.04 + Math.sin(t*0.17) * 0.22;
    state.cam[2] = -5.5 + Math.cos(t*0.13 + state.room) * 1.2;
    state.yaw = Math.sin(t*0.11 + state.room)*0.45;
    state.pitch = Math.sin(t*0.09)*0.18;
  }
}
let lastTime = performance.now();
function frame(now) {
  const rawT = (now - state.startedAt) / 1000;
  const t = state.paused ? state.pauseT ?? rawT : rawT;
  if (state.paused && state.pauseT === undefined) state.pauseT = rawT;
  if (!state.paused) state.pauseT = undefined;

  const dt = Math.min(0.05, (now-lastTime)/1000);
  lastTime = now;
  if (!state.paused) updateCamera(dt, t);

  gl.useProgram(program);
  gl.uniform2f(loc.resolution, canvas.width, canvas.height);
  gl.uniform1f(loc.time, t);
  gl.uniform2f(loc.mouse, state.mouse[0], state.mouse[1]);
  gl.uniform1i(loc.room, state.room);
  gl.uniform3f(loc.camPos, state.cam[0], state.cam[1], state.cam[2]);
  gl.uniform1f(loc.yaw, state.yaw);
  gl.uniform1f(loc.pitch, state.pitch);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
