/* Eyad ♥ Sara — كل الملفات الصوتية والصور والخطوط بجوار ملفات الكود مباشرة. */
"use strict";

const $ = (s) => document.querySelector(s);

/* بيانات الدخول للواجهة فقط. كلمة المرور لا يمكن إخفاؤها بأمان داخل موقع ثابت. */
const USERNAME = "Sara";
const PASSWORD = "Love";

/* حط ملف أغنية شاشة الدخول بجوار index.html وسمّه login.mp3.
   بعد تسجيل الدخول، ضع ثلاث أغنيات بجوار الملفات وغيّر أسماءها هنا. */
const LOGIN_SONG = "login.mp3";
const PLAYLIST = ["song1.mp3", "song2.mp3", "song3.mp3"];

const loginScreen = $("#login-screen");
const site = $("#site");
const loginAudio = $("#login-audio");
const playlistAudio = $("#playlist-audio");
const soundToggle = $("#sound-toggle");
const soundLabel = $("#sound-label");
let currentPage = 1;
let trackIndex = 0;
let playlistStarted = false;
let loginAudioStarted = false;

function startLoginMusic() {
  if (loginAudioStarted) return;
  loginAudioStarted = true;
  loginAudio.src = LOGIN_SONG;
  loginAudio.volume = 0.35;
  loginAudio.play().catch(() => {
    // المتصفح قد ينتظر أول تفاعل من المستخدم؛ سيُعاد المحاولة عند الضغط على زر الدخول.
  });
}
document.addEventListener("pointerdown", startLoginMusic, { once: true });

$("#show-password").addEventListener("click", () => {
  const input = $("#password");
  input.type = input.type === "password" ? "text" : "password";
});

$("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = $("#username").value.trim();
  const password = $("#password").value;
  const error = $("#login-error");

  if (username !== USERNAME || password !== PASSWORD) {
    error.textContent = "اسم المستخدم أو كلمة المرور مش مظبوطة، جرّبي تاني.";
    return;
  }
  error.textContent = "";
  loginAudio.pause();
  loginScreen.classList.add("hidden");
  site.classList.remove("hidden");
  document.body.classList.add("logged-in");
  window.scrollTo({ top: 0, behavior: "smooth" });
  startPlaylist();
  createFloaters();
});

function showPage(number) {
  currentPage = Math.max(1, Math.min(3, number));
  document.querySelectorAll(".page").forEach((page, index) => {
    page.classList.toggle("active", index + 1 === currentPage);
  });
  $("#chapter-indicator").textContent = `الفصل ${currentPage} من ٣`;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.querySelectorAll(".next-button").forEach(button => {
  button.addEventListener("click", () => showPage(Number(button.dataset.next)));
});
$("#restart").addEventListener("click", () => showPage(1));

function playTrack(index) {
  if (!PLAYLIST.length) return;
  trackIndex = (index + PLAYLIST.length) % PLAYLIST.length;
  playlistAudio.src = PLAYLIST[trackIndex];
  playlistAudio.load();
  playlistAudio.volume = 0.42;
  playlistAudio.play().then(updateSoundButton).catch(() => {
    updateSoundButton();
    soundLabel.textContent = "اضغطي ♫ للتشغيل";
  });
}
function startPlaylist() {
  if (playlistStarted || !PLAYLIST.length) return;
  playlistStarted = true;
  playTrack(0);
}
playlistAudio.addEventListener("ended", () => {
  trackIndex = (trackIndex + 1) % PLAYLIST.length;
  playTrack(trackIndex); // بعد الأغنية الثالثة يرجع تلقائيًا للأولى
});
function updateSoundButton() {
  const playing = !playlistAudio.paused;
  soundToggle.classList.toggle("playing", playing);
  soundLabel.textContent = playing ? "إيقاف الصوت" : "تشغيل الصوت";
  soundToggle.setAttribute("aria-pressed", String(playing));
}
soundToggle.addEventListener("click", () => {
  if (playlistAudio.paused) {
    if (!playlistAudio.src) playTrack(trackIndex);
    else playlistAudio.play().then(updateSoundButton).catch(updateSoundButton);
  } else {
    playlistAudio.pause();
    updateSoundButton();
  }
});
playlistAudio.addEventListener("play", updateSoundButton);
playlistAudio.addEventListener("pause", updateSoundButton);

/* ظرف الرسالة */
const envelope = $("#envelope");
const letterButton = $("#open-letter");
letterButton.addEventListener("click", () => {
  const opened = envelope.classList.toggle("open");
  letterButton.setAttribute("aria-pressed", String(opened));
  $("#envelope-hint").textContent = opened ? "كل كلمة هنا طالعة من قلبي ليكي ♥" : "افتحي الظرف وشوفي اللي جوايا ♡";
});

/* قلوب ولمعات خفيفة متحركة */
const floaters = $("#floaters");
const symbols = ["♥", "♡", "✧", "✿"];
function addFloater() {
  if (document.hidden || floaters.childElementCount > 18) return;
  const item = document.createElement("span");
  item.className = "floaty";
  item.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  item.style.left = `${Math.random() * 100}%`;
  item.style.fontSize = `${10 + Math.random() * 18}px`;
  item.style.animationDuration = `${10 + Math.random() * 10}s`;
  floaters.appendChild(item);
  item.addEventListener("animationend", () => item.remove(), { once: true });
}
function createFloaters() {
  for (let i = 0; i < 7; i++) window.setTimeout(addFloater, i * 300);
  window.setInterval(addFloater, 1100);
}
