// the Flyer Project, NRRINC Media (C) 2021, Apache V2 
flyerinit();
if (typeof flyer != "undefined") {
 } else {
     console.warn("Flyer: Conf Not Found, Loading Default")
 }
$(document).ready(function () {
    if ($("#flyer").length) {flyer
        $("#flyer").append('\
        <h2 id="flyer-t">\
           <a href="#" id="flyer-title" target="_top" alt="Link to Sponsor" onClick="flyerclick()"></a><button style="position: absolute; right: 35px;background-color: Transparent;cursor:pointer;" onclick="rmvflyer()" id="flyer-xbtn">X</button>\
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
                flyerdetect();
                $("#flyer-frame").attr('src', flyer.flyer_frame_src); // link to html, htm or img.
                $("#flyer-frame").attr('sandbox', ''); // edit if needed, to disable iframe scripts.
                $("#flyer-frame").attr('name', 'Flyer'); // name of iframe ALT
                $("#flyer-frame").attr('allowfullscreen', 'false');  // do not change.
                $("#flyer-frame").attr('allowpaymentrequest', 'false'); // do not allow payments
                $("#flyer-frame").attr('referrerpolicy', flyer.flyer_frame_rp); // what kind of URL is it? Be unsafe if you dont know.
                $("#flyer-image").attr('src', flyer.flyer_img_src); // img SRC Gif, webm, PNG or jpeg.
                $("#flyer-image").attr('title', flyer.flyer_img_title); // title of img, alt
                $("#flyer-image").attr('alt',flyer.flyer_img_title); // alt of an alt
                $("#flyer_video").attr('data-type', 'video/mp4'); 
                $("#flyer-title").append(flyer.flyer_title);
                $("#flyer-title").attr('href',flyer.flyer_title_href); 
                $("#flyer-desc").append(flyer.flyer_desc); 
                $("#flyer-desc").attr('alt', flyer.flyer_desc);
                flyerloadcount(); 
                console.log("Flyer: Im Locked and Loaded. Bring. it. on.");
        });
    } else {
        console.log('%c Flyer: div Not found. Flyer Stopped. to fix, add <div id="flyer"></div> do your page.', 'border: 8px none #00FF16; border-radius: 40px;background-color:black; color: #00FF80;');
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
    $("#flyer-desc").slideUp(750)
    .queue(function(nxt) { 
        $(this).empty();
        $("#flyer-image,#flyer-video,#flyer-frame").slideUp(750);
        $("#flyer-t").slideUp(3500).queue(function(nxt) {
            $("#flyer-t").remove();
            $("#flyer-image,#flyer-video,#flyer-frame").remove()
            // keep under 5000 total
            .queue(function(nxt){

            });
        });
        nxt();
    });
    $("#flyer").addClass("hide");
    localStorage.setItem('ad', 'hide');
    $("#flyer").attr('id','flyer-removed');
    $("#flyer-removed").append('<div style="padding:20px">-----<br>Flyer Ad Closed by Flyer. Have a Nice day.<br>-----</div>');
    setTimeout(function(){
        $("#flyer-removed").slideUp(2000).queue(function(nxt) {
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
        $.ajax({
            url : "/offsite/counter",
            dataType: "text",
            success : function (data) {
                $(".text").append("Flyer Load Number: " + data);
            }
        });
});

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
function flyerdetect() {
    if (flyer.flyer_show === 'img') {
        $("#flyer-frame").remove();
        $("#flyer-video").remove();
        $("#flyer-image").show();
    } else if (flyer.flyer_show === 'vid') {
        $("#flyer-image").remove();
        $("#flyer-frame").remove();
        $("#flyer-video").show();
    } else if (flyer.flyer_show === 'frm') {
        $("#flyer-image").remove();
        $("#flyer-video").remove();
        $("#flyer-frame").show();
    } else {
        console.log("error")
    }
};
function flyerrand() {
    const Flyerconf = ["FlyerconfA", "FlyerconfB", "FlyerconfC", "FlyerconfD", "FlyerconfE", "FlyerconfF", "FlyerconfG"];

    const random = Math.floor(Math.random() * Flyerconf.length);
    Flyerconf[random];
}
flyerrand();
function flyerinit() {
    try {
        flyer
    } catch (error) {
        console.error("Flyer: Add Conf to page. Above Flyer.js")
        stop();
    }
    if (flyer.flyer_note == 'Hey! Welcome to Flyer! http://git.nrrinc.net/flyer') {
        // do nothing
    } else {
        console.log("add flyer_note to your config. where you set flyer up. Copy and paste.");
        console.warn('flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer",');
        youforgottoaddthenote();
        // the reason for this, i have no idea. you can remove these lines if you want (remove lines 2 - 9)
    }
    $(document).ready(function () {
        if (flyer.flyer_css === 'yes') {
            (function() {
                var css = document.createElement('link'); css.rel = 'stylesheet';
                css.href = '/src/flyer/flyer.css';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(css);
              })();
        } else {
            (function() {
                var css = document.createElement('link'); css.rel = 'stylesheet';
                css.href = flyer.flyer_css;
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(css);
              })();
        }
    });
}
// Types of Info Flyer Will Collect *in nginx, behind a Proxy.
/*
IP Address (Deleted every 14 Days)
User Agent
Device Width/Height
HTTP code: 200/202 or 4XX/5XX


as a Note, i dont think I will collect Ip addresses, But it could help with Spam Protection
*/