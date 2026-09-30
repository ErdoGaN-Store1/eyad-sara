<?php
session_start();
if (empty($_SESSION["love_login"])) { header("Location: index.php"); exit; }
?>
<!doctype html><html lang="ar" dir="rtl"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Eyad ♥ Sara — Our Story</title><link rel="stylesheet" href="style.css"></head>
<body>
<div class="bg"></div><div class="petals" id="petals"></div>
<header class="nav">
  <div class="brand">Eyad <span>♥</span> Sara</div>
  <nav><a href="#start">البداية</a><a href="#memories">الذكريات</a><a href="#letter">الرسالة</a><a href="logout.php">خروج</a></nav>
</header>
<div class="bar"><span id="bar"></span></div>

<section id="start" class="hero">
  <div class="copy reveal">
    <div class="label">EYAD ♥ SARA · OUR STORY</div>
    <div class="names">Eyad <span>♥</span> Sara</div>
    <h1>ومن هنا بدأت<br><em>الحكاية.</em></h1>
    <p>اتعرفنا من جروب تليجرام، ومن كلام بسيط بدأت تفاصيل حكاية بقت ليها مكان خاص عندنا.</p>
    <a class="btn" href="#memories">ابدأ الحكاية ↓</a>
  </div>
  <div class="hero-art reveal"><div class="ring"></div><div class="heart">♥</div>
    <div class="date">06 / 2026<small>أول يوم عرفنا بعض</small></div>
  </div>
</section>

<section class="counter-section">
  <div class="label">OUR TIME</div><h2>والعداد لسه بيكتب حكايتنا</h2>
  <p>من أول يوم عرفنا بعض · 06 / 2026</p>
  <div class="counter"><div><b id="days">0</b><small>يوم</small></div><i>:</i><div><b id="hours">0</b><small>ساعة</small></div><i>:</i><div><b id="minutes">0</b><small>دقيقة</small></div><i>:</i><div><b id="seconds">0</b><small>ثانية</small></div></div>
</section>

<section id="memories" class="memories">
  <div class="label">MEMORIES</div><h2>أيام مستحيل تتنسي</h2>
  <div class="cards">
    <article class="card reveal"><div class="photo"><img src="memory1.jpg" onerror="this.style.opacity=0"><span>06 / 2026</span></div><div><label>FIRST CHAPTER</label><h3>أول يوم عرفنا بعض</h3><p>من جروب تليجرام بدأت أول كلمة، ومن أول كلمة بدأت الحكاية.</p></div></article>
    <article class="card reveal"><div class="photo"><img src="memory2.jpg" onerror="this.style.opacity=0"><span>03 / 09 / 2026</span></div><div><label>THE DAY</label><h3>أول يوم اتقابلنا فيه</h3><p>03 / 09 / 2026 — يوم بقى له مكان خاص في الذاكرة.</p></div></article>
    <article class="card reveal"><div class="photo"><img src="memory3.jpg" onerror="this.style.opacity=0"><span>06 / 09 / 2026</span></div><div><label>MY FAVORITE DAY</label><h3>أجمل يوم في حياتي</h3><p>06 / 09 / 2026 — تاريخ كل ما نفتكره، نبتسم.</p></div></article>
  </div>
</section>

<section class="quote"><div>“</div><h2>أجمل حاجة في حكايتنا<br><em>إنها لسه بتتكتب.</em></h2><p>اتعرفنا من جروب تليجرام… لكن اللي حصل بعد كده كان أكبر من مجرد تعارف.</p></section>

<section id="letter" class="letter-page">
  <div class="label">THE LAST PAGE</div><h2>رسالة ليكي ❤️</h2><p>اضغطي على الظرف وافتحي آخر صفحة.</p>
  <div class="envelope" id="envelope">
    <div class="paper"><div class="paper-in">
      <small>TO MY FAVORITE PERSON</small><h3>Dear Sara,</h3>
      <p>يمكن حكايتنا بدأت من جروب عادي على تليجرام، لكن مع الوقت بقيتي من أجمل التفاصيل اللي دخلت حياتي.</p>
      <p>أول يوم عرفنا بعض، أول يوم اتقابلنا، وأجمل يوم في حياتي… كل تاريخ فيهم بقى له معنى.</p>
      <p>ودي مش نهاية الحكاية، دي صفحة من صفحات كتير لسه هنكتبها.</p>
      <strong>Eyad <span>♥</span> Sara</strong>
    </div></div>
    <div class="flap"></div><div class="front"></div><div class="seal">♥</div>
  </div>
  <button class="btn open" id="open">افتحي الرسالة ♥</button>
</section>

<div class="music" id="music">♪ OUR STORY</div><audio id="player" preload="auto"></audio>
<script src="config.js"></script><script src="script.js"></script>
</body></html>