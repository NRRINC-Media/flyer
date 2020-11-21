<!doctype html>
<html lang="en">
<html>

<head>
    <meta charset=utf-8>
    <meta name=viewport content="width=device-width, initial-scale=1">
    <link rel=stylesheet href="/src/css/master/mobile/mobile.css">
    <link rel="stylesheet" href="/src/home/dark-mode.css">
    <script src="/src/js/jq.js"></script>
    <script src="/src/js/settings.js"></script>
    <script src="/src/flyer/flyer-min.js"></script>
    <style>
        h2,
        h3 {
            margin: 0;
            padding: 0;
            text-transform: uppercase;
            font-family: 'Oswald', sans-serif;
            font-weight: normal;
            color: #2483A6
        }

        .post {
            clear: both;
            padding-bottom: 10px
        }

        .post .title {
            padding-top: 10px;
            letter-spacing: -1px
        }

        .post .title a {
            color: #262626;
            border: none;
        }

        .wrapper3 {
            border: 1px solid #000;
            display: inline-block;
            position: relative;
        }

        .img3 {
            height: auto;
            border-radius: 0px 0px 50px 50px;
            
        }

        .img4 {
            display: block;
            max-height: 375px;
            width: auto;
        }

        .input4,
        .button4 {
            background-color: transparent;
            border: 0;
        }

        .button4 {
            position: absolute;
            right: 0;
            top: 0;
            padding-top: 2px;
        }

        .input4 {
            padding-right: 30px;
        }

        .title {
            border-radius: 25px 25px 0px 0px;
            background: white;
            padding: 20px;
            font-size: 20px;
        }

        .desc {
            border-radius: 0px 0px 25px 25px;
            background: white;
            padding: 15px;
            font-size: 15px;
        }
    </style>
</head>

<body>
    <?php $path = $_SERVER['DOCUMENT_ROOT'];
    $path .= "/src/menu-m.php";
    include_once($path); ?>
    <main class="main">
        <div id="banner"><img class="img3" src="/src/css/master/shared/img5.png" width="auto" height="auto" alt="" /></div>
        <p style="font-size: 2px;">&nbsp;</p>
        <div id="content">
            <div class="post">
                <h2 class="title"><a href="#" class="a3">Professional color grading</a></h2>
                <div class="entry">
                    <desc><img class="img4" src="/src/home/shared/images/Premeire.PNG" title="Adobe Media Encoder Rendering A 1 minute Video." alt="" />
                        <p class="desc">Color Grading and Color Correction.</p>
                    </desc>
                </div>
                <br>
                <div class="post">
                    <h2 class="title"><a href="#" class="a3">High Efficiency Rendering</a></h2>
                    <div class="entry">
                        <desc><img class="img4" src="/src/home/shared/images/HER.PNG" title="Adobe Media Encoder Rendering A 1 minute Video." alt="" />
                            <p class="desc">12 Core Editing Server For Fast Editing and Rendering</p>
                        </desc>
                    </div>
                    <br>
                </div>
                <div class="post">
                    <h2 class="title"><a href="#" class="a3">Fast Uploads</a></h2>
                    <div class="entry">
                        <desc><img class="img4" src="/src/home/shared/images/internet.jpg" title="Adobe Media Encoder Rendering A 1 minute Video." alt="" />
                            <p class="desc">We have Fast Upload Speeds (Up to 150mbps Up Stream)</p>
                        </desc>
                    </div>
                    <div id="flyer" class="post">
                      </div>
                    <?php $path=$_SERVER['DOCUMENT_ROOT']; $path .="/src/share-buttons.php"; include_once($path); ?>
                    <?php $path = $_SERVER['DOCUMENT_ROOT'];
                    $path .= "/src/footer-m.php";
                    include_once($path); ?>
    </main>
    <script src="/src/js/main.min.js"></script>
  <?php $path=$_SERVER['DOCUMENT_ROOT']; $path .="/src/cookie-m.php"; include_once($path); ?>
</body>

</html>