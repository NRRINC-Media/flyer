// the Flyer Project, NRRINC Media (C) 2020, Apache V2  
$(document).ready(function () {
    if ($("#flyer").length) {
        $("#flyer").append('\
        <h2 id="flyer-t">\
        <a href="#" id="flyer-title" target="#" alt="Link to Sponsor"></a>\
        </h2>\
        <div id="flyer-content">\
        <img class="flyer-image" id="flyer-image" src="" alt="none" title="" style="display:none;">\
        <iframe id="flyer-frame" class="flyer-iframe" src="" allowpaymentrequest="false" name="Flyer" allowfullscreen="false" referrerpolicy="unsafe-url"></iframe>\
        <div class="myVideo" id="flyer_video-m" data-video="#" data-poster="#" data-type="video/mp4"></div>\
        <p class="flyer-desc" id="flyer-desc" alt="ad desc."></p>\
        </div>');
        $(document).ready(function () {
            // device locked items
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
                //other
                $("#flyer-title").append(localStorage.getItem("flyer-title")); // top name
                $("#flyer-desc").append('Your ad here'); // Bottom text
                $("#flyer-desc").attr('alt', 'ad desc.'); // bottom alt text
                if ("show-img" in localStorage) { $("#flyer-img-m").show(); console.log('Flyer: img'); } else { $("#flyer-img-m").hide();};
                if ("show-frame" in localStorage) { $("#flyer-frame-m").show(); console.log('Flyer: frame'); } else { $("#flyer-frame-m").hide();};
                console.log("Flyer: Im Locked and Loaded. Bring. it. on.");
        });
    } else {
        console.error('Flyer: div Not found. Flyer Stopped. to fix, add <div id="flyer"></div> do your page.');
    };
});
// ad setting ON/OFF
$(document).ready(function ($) {
    if ($("#flyer").length) {
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
    console.log('Flyer buttons loaded');
    } else {
        console.error('Flyer: Buttons disabled due to div not found.');
        $("#nofly").remove();
        $("#yesfly").remove();
};
});
// <div id="flyer"></div>