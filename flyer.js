$('head').append('<link rel="stylesheet" href="/src/flyer/flyer.css" type="text/css" />');// AD CSS
$('head').append('<link rel="stylesheet" href="/src/flyer/video/rtop.videoPlayer.1.0.2.min.css" />');
$('head').append('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">');
$('head').append('<script type="text/javascript" src="/src/flyer/video/rtop.videoPlayer.1.0.2.js"></script>');
$(document).ready(function () {
    var vid = $('#flyer_video').RTOP_VideoPlayer({
        showFullScreen: true,
        showTimer: true,
        showSoundControl: true,
        playInModal: false,
    });
});
// put anything above === HERE === that needs to be loaded before hand. Such as CSS or scripts.
console.log('flyer init loaded');
// auto set ad
$(document).ready(function() {
    //flyer css main
    // flyer
    $("#flyer").append('<br><h2 class="flyer-title"><a href="#" id="flyer-linka"><i id="fyler-Sponsor-name"></i></a></h2><div class="entry"><desc><img class="flyer-image" id="flyer-image" src="/src/home/shared/images/HER.PNG" alt="" title="this is not the right image.." style="display:none;" /><iframe id="flyer-frame" class="flyer-iframe9"></iframe><div class="myVideo" id="flyer_video" data-video="/src/flyer/video/sample.mp4" data-poster="/src/flyer/video/sample.jpg" data-type="video/mp4"></div><p class="flyer-desc" id="flyer-desc"></p></desc></div>');
    console.log('flyer markup Loaded');
    //Sponer name
    $("#fyler-Sponsor-name").append('A Word From Our Sponsor:'); // top name
    $("#flyer-linka").attr('a', '#'); // href ro sponsor
    $("#flyer-linka").attr('target', '#'); // target _blank for best.
    $("#flyer-linka").attr('alt', 'Link to Sponsor') // alt to href
    // Sponsor Iframe
    $("#flyer-frame").attr('src', 'flyer.htm'); // link to html, htm or img.
    $("#flyer-frame").attr('sandbox', ''); // edit if needed, to disable iframe scripts.
    $("#flyer-frame").attr('allowpaymentrequest', 'false'); // do not allow payments
    $("#flyer-frame").attr('name', 'Flyer'); // name of iframe ALT
    $("#flyer-frame").attr('allowfullscreen', 'false');  // do not change.
    $("#flyer-frame").attr('referrerpolicy', 'unsafe-url'); // what kind of URL is it? Be unsafe if you dont know.
    // Sponsor Dsec
    $("#flyer-desc").append('Your ad here'); // Bottom text
    $("#flyer-desc").attr('alt', 'ad desc.'); // bottom alt text
    // Sponsor image
    $("#flyer-image").attr('src',  ''); // img SRC Gif, webm, PNG or jpeg.
    $("#flyer-image").attr('title', ''); // title of img, alt
    $("#flyer-image").attr('alt', 'none'); // alt of an alt
    $("#flyer-image").hide(); //hide
    // Sponsor video
    $("#flyer_video").attr('data-video','#'); //mp4 only
    $("#flyer_video").attr('data-poster', '#'); // poster "tumbnail/cover"
    $("#flyer_video").attr('data-type', 'video/mp4'); // data type
    $("#flyer-image").hide(); //hide
    //conf
    console.log('flyer conf loaded');
});
// ad setting ON/OFF
$(document).ready(function($) {
    var mode = localStorage.getItem('ad');
    if (mode)
        $('#flyer').addClass(mode);

    $("#nofly").click(function() {
        $("#flyer").addClass("hide");
        localStorage.setItem('ad', 'hide');
    });

    $("#yesfly").click(function() {
        $("#flyer").removeClass("hide");
        localStorage.setItem('ad', null);
    });
});
console.log('flyer enable/disable conf loaded')
// <div id="flyer"></div>
// video stuff RTOP_VideoPlayer in LICENSE /src/flyer/video/LICENSE
console.log('flyer fully loaded');