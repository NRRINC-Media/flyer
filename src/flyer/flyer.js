// the Flyer Project, NRRINC Media (C) 2021, Apache V2 
(function() {
    var conf = document.createElement('script'); conf.type = 'text/javascript';
    conf.src = '/src/flyer/flyer-conf.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(conf);
  })();
(function() {
    var css = document.createElement('link'); css.rel = 'stylesheet';
    css.href = '/src/flyer/flyer.css';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(css);
  })();
$(document).ready(function () {
    if ($("#flyer").length) {
        $("#flyer").append('\
        <h2 id="flyer-t">\
           <a href="#" id="flyer-title" target="_top" alt="Link to Sponsor" onClick="flyerclick()"></a><button style="position: absolute; right: 35px; top: 25px;background-color: Transparent;cursor:pointer;" onclick="rmvflyer()" id="flyer-xbtn">X</button>\
        </h2>\
        <div id="flyer-content">\
        <img class="flyer-image" id="flyer-image" src="" alt="none" title="" style="display:none;">\
        <iframe id="flyer-frame" class="flyer-iframe" src="" allowpaymentrequest="false" name="Flyer" allowfullscreen="false" referrerpolicy="unsafe-url" stlye="display: none;"></iframe>\
        <video oncontextmenu="return false;" id="flyer-video" width="100%" height="100%" muted style="display:block;" onended="videoEnded()" autoplay="autoplay">\
        <source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4#t=25" type="video/mp4">\
        </video>\
        <p class="flyer-desc" id="flyer-desc" alt="ad desc."></p>\
        </div>');
        $(document).ready(function () {
                $("#flyer-frame").attr('src', localStorage.getItem("flyer-frame-src")); // link to html, htm or img.
                $("#flyer-frame").attr('sandbox', ''); // edit if needed, to disable iframe scripts.
                $("#flyer-frame").attr('name', 'Flyer'); // name of iframe ALT
                $("#flyer-frame").attr('allowfullscreen', 'false');  // do not change.
                $("#flyer-frame").attr('allowpaymentrequest', 'false'); // do not allow payments
                $("#flyer-frame").attr('referrerpolicy', localStorage.getItem("flyer-frame-rp")); // what kind of URL is it? Be unsafe if you dont know.
                $("#flyer-image").attr('src', localStorage.getItem("flyer-img-src")); // img SRC Gif, webm, PNG or jpeg.
                $("#flyer-image").attr('title', localStorage.getItem("flyer-img-title")); // title of img, alt
                $("#flyer-image").attr('alt', localStorage.getItem("flyer-img-alt")); // alt of an alt
                $("#flyer_video").attr('data-video', localStorage.getItem("flyer-video-data")); //mp4 only
                $("#flyer_video").attr('data-poster', localStorage.getItem("flyer-video-poster")); // poster "tumbnail/cover"
                $("#flyer_video").attr('data-type', 'video/mp4'); // data type
                $("#flyer-title").append(localStorage.getItem("flyer-title")); // top name
                $("#flyer-title").attr('href',localStorage.getItem("flyer-link-href")); 
                $("#flyer-desc").append('Your ad here'); // Bottom text
                $("#flyer-desc").attr('alt', 'ad desc.'); // bottom alt text
                function flyerdetect() {
                    if ("show-img" in localStorage) {
                        $("#flyer-image").show();
                            console.log('Flyer: img');
                        } else {
                            $("#flyer-image").remove();
                        };
                    if ("show-frame" in localStorage) {
                        $("#flyer-frame").show();
                            console.log('Flyer: frame'); 
                        } else { 
                            $("#flyer-frame").remove();
                        };
                    if ("show-show" in localStorage) {
                        $("#flyer-video").show();
                            console.log('Flyer: frame'); 
                        } else { 
                            $("#flyer-video").remove();
                    };
                };
                flyerdetect();
                console.log("Flyer: Im Locked and Loaded. Bring. it. on.");
        });
    } else {
        console.error('Flyer: div Not found. Flyer Stopped. to fix, add <div id="flyer"></div> do your page.');
    };
});
//
//
//
$(document).ready(function ($) {
    if ($("#flyer").length) {
    var mode = localStorage.getItem('ad');
    if (mode)
        $('#flyer').addClass(mode);

    $("#nofly").click(function () {
        $("#flyer").addClass("hide");
        console.log("Flyer: Hidden");
        localStorage.setItem('ad', 'hide');
    });
    $("#yesfly").click(function () {
        $("#flyer").removeClass("hide");
        console.log("Flyer: Shown");
        localStorage.setItem('ad', null);
    });
    console.log('Flyer buttons loaded');
    } else {
        console.error('Flyer: Buttons disabled due to div not found.');
        $("#nofly").remove();
        $("#yesfly").remove();
};
});
//
//
//
function rmvflyer() {
    $("#flyer-xbtn").prop('disabled', true);
    $("#flyer-xbtn").slideUp(1500)
    .queue(function(nxt) { 
        $(this).fadeOut(250);
        $(this).remove();
        nxt();
    });
    $("#flyer-t,#flyer-desc,#flyer-image,#flyer-video,#flyer-frame").slideUp(2500)
    .queue(function(nxt) { 
        $(this).empty();
        nxt();
    });
    $("#flyer").addClass("hide");
    localStorage.setItem('ad', 'hide');
    $("#flyer").attr('id','flyer-removed');
    $("#flyer-removed").append('<div style="padding:20px">-----<br>Flyer Ad Closed by Flyer. Have a Nice day.<br>-----</div>');
    setTimeout(function(){
        $("#flyer-removed").fadeOut(2000).queue(function(nxt) {
            $(this).empty();
            nxt();
        });
        console.warn("Flyer: Removed");
    }, 5000);
};
function videoEnded() {
    console.log("Flyer: Video done");
    $('#flyer-video').fadeOut(2500)
            .queue(function(nxt) { 
                $(this).remove();
                nxt();
            });
    $('#flyer').fadeOut(3500)
            .queue(function(nxt) { 
                $(this).remove();
                nxt();
            });
    $('#flyer-t').fadeOut(2500)
    .queue(function(nxt) { 
        $(this).remove();
        nxt();
    });
    $('#flyer-desc').fadeOut(2500)
    .queue(function(nxt) { 
        $(this).remove();
        nxt();
    });
}1000;
$(document).ready(function () {
    flyerloadcount();
});
/*
function flyerloadcount() {
    // function below will run clear.php?h=michael
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/offsite/count.php"
      }).done(function( data) {
        console.log("Flyer: Logged +1")
      });
} // DO NOT USE.
function flyerclick() {
    // function below will run clear.php?h=michael
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/offsite/click.php"
      }).done(function( data) {
        console.log("Flyer: Clicked +1")
      });
}
*/
// Types of Info Flyer Will Collect *in nginx, behind a Proxy.
/*
IP Address (Deleted every 14 Days)
User Agent
Device Width/Height
HTTP code: 200/202 or 4XX/5XX


as a Note, i dont think I will collect Ip addresses, But it could help with Spam Protection
*/