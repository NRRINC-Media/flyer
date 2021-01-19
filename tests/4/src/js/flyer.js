// the Flyer Project, NRRINC Media (C) 2020, Apache V2  
localStorage.setItem('Flyer', JSON.stringify(flyerconf));
// note to self *************** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// put anything above === HERE === that needs to be loaded before hand. Such as CSS or scripts.
console.log('flyer init loaded');
// auto set ad
$(document).ready(function () {
    if ($("#flyer").length) {
        $("#flyer").append('\
        <h2 class="flyer-title">\
        <a href="#" class="flyer-href" target="#" alt="Link to Sponsor">A Word From Our Sponsor:</a>\
        </h2>\
        <div id="flyer-content">\
        <img class="flyer-image" id="flyer-image" src="" alt="none" title="" style="display:none;">\
        <iframe id="flyer-frame" class="flyer-iframe" src="" allowpaymentrequest="false" name="Flyer" allowfullscreen="false" referrerpolicy="unsafe-url"></iframe>\
        <div class="myVideo" id="flyer_video-m" data-video="#" data-poster="#" data-type="video/mp4"></div>\
        <p class="flyer-desc" id="flyer-desc" alt="ad desc."></p>\
        </div>');
        console.log("Flyer Markup Loaded Correctly!");
    } else {
        console.log("flyer div Not found. Flyer Stopped.");
    };
});
$(document).ready(function () {
    // Flyer items not locked due to Device
    $("#flyer-sponsor").append('A Word From Our Sponsor:'); // top name
    $("#flyer-link-a").attr('a', '#'); // href ro sponsor
    $("#flyer-link-a").attr('alt', 'Link to Sponsor') // alt to href
    $("#flyer-desc").append('Your ad here'); // Bottom text
    $("#flyer-desc").attr('alt', 'ad desc.'); // bottom alt text
    if ("show-img" in localStorage) { $("#flyer-img-m").show(); console.log('img shown'); } else { $("#flyer-img-m").hide(); console.log('img hidden'); };
    if ("show-frame" in localStorage) { $("#flyer-frame-m").show(); console.log('frame shown'); } else { $("#flyer-frame-m").hide(); console.log('frame hidden'); };
    // items locked to device
});
$(document).ready(function () {
    // device locked items
    try {
        $("#flyer-frame").attr('src', localStorage.getItem("flyer-frame-src")); // link to html, htm or img.
        $("#flyer-frame").attr('sandbox', ''); // edit if needed, to disable iframe scripts.
        $("#flyer-frame").attr('name', 'Flyer'); // name of iframe ALT
        $("#flyer-frame").attr('allowfullscreen', 'false');  // do not change.
        $("#flyer-frame").attr('allowpaymentrequest', 'false'); // do not allow payments
        $("#flyer-frame").attr('referrerpolicy', localStorage.getItem("flyer-frame-rp")); // what kind of URL is it? Be unsafe if you dont know.
        // Sponsor image
        $("#flyer-image").attr('src', localStorage.getItem("flyer-img-src")); // img SRC Gif, webm, PNG or jpeg.
        $("#flyer-image").attr('title', localStorage.getItem("flyer-img-title")); // title of img, alt
        $("#flyer-image").attr('alt', localStorage.getItem("flyer-img-alt")); // alt of an alt
        // Sponsor video
        $("#flyer_video").attr('data-video', localStorage.getItem("flyer-video-data")); //mp4 only
        $("#flyer_video").attr('data-poster', localStorage.getItem("flyer-video-poster")); // poster "tumbnail/cover"
        $("#flyer_video").attr('data-type', 'video/mp4'); // data type
    } catch (error) {

    }
    console.log('flyer conf loaded');
});
// ad setting ON/OFF
$(document).ready(function ($) {
    var mode = localStorage.getItem('ad');
    if (mode)
        $('#flyer').addClass(mode);

    $("#nofly").click(function () {
        $("#flyer").addClass("hide");
        localStorage.setItem('ad', 'hide');
    });

    $("#yesfly").click(function () {
        $("#flyer").removeClass("hide");
        localStorage.setItem('ad', null);
    });
});
console.log('flyer enable/disable conf loaded')
// <div id="flyer"></div>