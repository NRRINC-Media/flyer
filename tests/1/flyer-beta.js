// the Flyer Project, NRRINC Media (C) 2020, Apache V2
$('head').append('<link rel="stylesheet" href="https://cdn.flyer.nrrinc.net/flyer.css" type="text/css" />');// AD CSS
$('head').append('<link rel="stylesheet" href="https://cdn.flyer.nrrinc.net/rtop.videoPlayer.1.0.2.min.css" />');
$('head').append('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">');
console.log('css loaded');
$('head').append('<script type="text/javascript" src="https://cdn.flyer.nrrinc.net/rtop.videoPlayer.1.0.2.js"></script>');
// put anything above === HERE === that needs to be loaded before hand. Such as CSS or scripts.
console.log('flyer init loaded');
// auto set ad
//flyer mobile
$(document).ready(function () {
    // Flyer items not locked due to Device
    $("#flyer-Sponsor-name-m").append('A Word From Our Sponsor:'); // top name
    $("#flyer-link-a").attr('a', '#'); // href ro sponsor
    $("#flyer-link-a").attr('target', '#'); // target _blank for best.
    $("#flyer-link-a").attr('alt', 'Link to Sponsor') // alt to href
    $("#flyer-desc").append('Your ad here'); // Bottom text
    $("#flyer-desc").attr('alt', 'ad desc.'); // bottom alt text
    if ("show-video" in localStorage) { 
        $("#flyer-video-m").show();
        $("#flyer-video-d").show();
        var vid=$("#flyer_video-m").RTOP_VideoPlayer({showFullScreen:!1,showTimer:!0,showSoundControl:!0,playInModal:!1});
        var vid=$("#flyer_video-d").RTOP_VideoPlayer({showFullScreen:!1,showTimer:!0,showSoundControl:!0,playInModal:!1});
        console.log('video shown');
       }
    else { 
        $("#flyer-video-m").hide();
        $("#flyer-video-d").hide();
         console.log('video hidden');
     };
    if ("show-img" in localStorage) { $("#flyer-img-m").show(); console.log('img shown'); } else { $("#flyer-img-m").hide(); console.log('img hidden'); };
    if ("show-frame" in localStorage) { $("#flyer-frame-m").show(); console.log('frame shown'); } else { $("#flyer-frame-m").hide(); console.log('frame hidden'); };
});
$(document).ready(function () {
    //flyer css main
    // flyer
    $("#flyer-d").append('<br><h2 class="flyer-title-d"><a href="#" id="flyer-link-a"><i id="flyer-Sponsor-name-d"></i></a></h2><div class="entry"><desc><img class="flyer-image-d" id="flyer-image-d" src="/src/home/shared/images/HER.PNG" alt="" title="this is not the right image.." style="display:none;" /><iframe id="flyer-frame-d" class="flyer-iframe9-d"></iframe><div class="myVideo" id="flyer_video-d" data-video="/src/flyer/video/sample.mp4" data-poster="/src/flyer/video/sample.jpg" data-type="video/mp4"></div><p class="flyer-desc" id="flyer-desc"></p></desc></div>');
    $("#flyer-m").append('<br><h2 class="flyer-title-m"><a href="#" id="flyer-link-a"><i id="flyer-Sponsor-name-m"></i></a></h2><div class="entry"><desc><img class="flyer-image-m" id="flyer-image-m" src="/src/home/shared/images/HER.PNG" alt="" title="this is not the right image.." style="display:none;" /><iframe id="flyer-frame-m" class="flyer-iframe9-m"></iframe><div class="myVideo" id="flyer_video-m" data-video="/src/flyer/video/sample.mp4" data-poster="/src/flyer/video/sample.jpg" data-type="video/mp4"></div><p class="flyer-desc" id="flyer-desc"></p></desc></div>');
    console.log('flyer markup Loaded');
    //Sponer name
    // Sponsor Iframe
    $("#flyer-frame-m").attr('src', 'https://cdn.flyer.nrrinc.net/flyer.htm'); // link to html, htm or img.
    $("#flyer-frame-m").attr('sandbox', ''); // edit if needed, to disable iframe scripts.
    $("#flyer-frame-m").attr('allowpaymentrequest', 'false'); // do not allow payments
    $("#flyer-frame-m").attr('name', 'Flyer'); // name of iframe ALT
    $("#flyer-frame-m").attr('allowfullscreen', 'false');  // do not change.
    $("#flyer-frame-m").attr('referrerpolicy', 'unsafe-url'); // what kind of URL is it? Be unsafe if you dont know.
    // Sponsor Dsec
    // Sponsor image
    $("#flyer-image-m").attr('src', ''); // img SRC Gif, webm, PNG or jpeg.
    $("#flyer-image-m").attr('title', ''); // title of img, alt
    $("#flyer-image-m").attr('alt', 'none'); // alt of an alt
    // Sponsor video
    $("#flyer_video-m").attr('data-video', '#'); //mp4 only
    $("#flyer_video-m").attr('data-poster', '#'); // poster "tumbnail/cover"
    $("#flyer_video-m").attr('data-type', 'video/mp4'); // data type
    $("#flyer-frame-d").attr('src', ''); // link to html, htm or img.
    $("#flyer-frame-d").attr('sandbox', ''); // edit if needed, to disable iframe scripts.
    $("#flyer-frame-d").attr('allowpaymentrequest', 'false'); // do not allow payments
    $("#flyer-frame-d").attr('name', 'Flyer'); // name of iframe ALT
    $("#flyer-frame-d").attr('allowfullscreen', 'false');  // do not change.
    $("#flyer-frame-d").attr('referrerpolicy', 'unsafe-url'); // what kind of URL is it? Be unsafe if you dont know.
    // Sponsor image
    $("#flyer-image-d").attr('src', ''); // img SRC Gif, webm, PNG or jpeg.
    $("#flyer-image-d").attr('title', ''); // title of img, alt
    $("#flyer-image-d").attr('alt', 'none'); // alt of an alt
    // Sponsor video
    $("#flyer_video-d").attr('data-video', '#'); //mp4 only
    $("#flyer_video-d").attr('data-poster', '#'); // poster "tumbnail/cover"
    $("#flyer_video-d").attr('data-type', 'video/mp4'); // data type
    console.log('flyer conf loaded');
});
// ad setting ON/OFF
$(document).ready(function ($) {
    var mode = localStorage.getItem('ad');
    if (mode)
        $('#flyer-m').addClass(mode);
    $('#flyer-d').addClass(mode);

    $("#nofly").click(function () {
        $("#flyer-m").addClass("hide");
        $("#flyer-d").addClass("hide");
        localStorage.setItem('ad', 'hide');
    });

    $("#yesfly").click(function () {
        $("#flyer-m").removeClass("hide");
        $("#flyer-d").removeClass("hide");
        localStorage.setItem('ad', null);
    });
});
console.log('flyer enable/disable conf loaded')
// <div id="flyer"></div>
// video stuff RTOP_VideoPlayer in LICENSE /src/flyer/video/LICENSE