<!doctype html>
<html lang="en">
<html>

<head>
    <meta charset=utf-8>
    <meta name=viewport content="width=device-width, initial-scale=1">
    <link rel=stylesheet href="/src/css/master/mobile/mobile.css">
    <link rel="stylesheet" href="/src/home/dark-mode.css">
    <title>mobile page.</title>
    <script src="/src/js/jq.js"></script>
    <script src="/src/js/settings.js"></script>
    <script src="/src/flyer/flyer.js"></script>
     <style>h2, h3{ margin:0; padding:0; text-transform:uppercase; font-family:'Oswald', sans-serif; font-weight:normal; color:#2483A6} .post{ clear:both; padding-bottom:10px} .post .title{ padding-top:10px; letter-spacing:-1px} .post .title a{ color:#262626; border:none;} .wrapper3{ border:1px solid #000; display:inline-block; position:relative;} .img3{ height:auto; border-radius:0px 0px 50px 50px;} .img4{ display:block; max-height:375px; width:auto;} .input4, .button4{ background-color:transparent; border:0;} .button4{ position:absolute; right:0; top:0; padding-top:2px;} .input4{ padding-right:30px;} .title{ border-radius:25px 25px 0px 0px; background:white; padding:20px; font-size:20px;} .desc{ border-radius:0px 0px 25px 25px; background:white; padding:15px; font-size:15px;} </style>
</head>

<body>
    <?php $path = $_SERVER['DOCUMENT_ROOT'];
    $path .= "/src/menu-m.php";
    include_once($path); ?>
    <main class="main">
        <p style="font-size: 2px;">&nbsp;</p>
        <div id="content">
                    <div id="flyer-m" class="post">
                      </div>
    </main>
    <script src="/src/js/main.min.js"></script>
  <?php $path=$_SERVER['DOCUMENT_ROOT']; $path .="/src/cookie-m.php"; include_once($path); ?>
</body>

</html>