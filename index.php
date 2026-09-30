<?php
session_start();
if (!empty($_SESSION["love_login"])) { header("Location: home.php"); exit; }
$error="";
if ($_SERVER["REQUEST_METHOD"]==="POST") {
  $u=trim($_POST["username"]??"");
  $p=$_POST["password"]??"";
  if ($u==="Sara" && $p==="Love") {
    $_SESSION["love_login"]=true;
    header("Location: home.php"); exit;
  }
  $error="بيانات الدخول غير صحيحة ❤️";
}
?>
<!doctype html><html lang="ar" dir="rtl"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Eyad ♥ Sara</title><link rel="stylesheet" href="style.css"></head>
<body class="login">
<div class="bg"></div><div class="petals" id="petals"></div>
<div class="login-card">
  <div class="logo-heart">♥</div>
  <div class="eyad-sara">Eyad <span>♥</span> Sara</div>
  <div class="label">A PRIVATE LOVE STORY</div>
  <h1>ادخل إلى حكايتنا</h1>
  <p>كل حاجة هنا معمولالها مكان مخصوص.</p>
  <?php if($error): ?><div class="error"><?=htmlspecialchars($error)?></div><?php endif; ?>
  <form method="post">
    <input name="username" placeholder="Username" required>
    <input name="password" type="password" placeholder="Password" required>
    <button>Enter our story <b>→</b></button>
  </form>
  <small>Eyad ♥ Sara · 2026</small>
</div>
<script src="script.js"></script></body></html>