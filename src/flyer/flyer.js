// the Flyer Project, NRRINC Media (C) 2021, Apache V2 
flyerinit();
$(document).ready(function () {
    if ($("#flyer").length) {flyer
        if (flyer.flyer_debug == 'true') {
            flylog("Debug Mode - Flyer Div found")
        };
        $("#flyer").append('\
        <h2 id="flyer-t">\
           <a href="#" id="flyer-title" target="_top" alt="Link to Sponsor" onClick="flyerclick()" rel="noreferrer"></a><button style="position: absolute; right: 35px;background-color: transparent;cursor:pointer;border:black 2px solid; border-radius: 4px;" onclick="rmvflyer()" id="flyer-xbtn">X</button>\
        </h2>\
        <div id="flyer-content">\
        <img class="flyer-image" id="flyer-image" src="" alt="none" title="" style="display:none;">\
        <iframe id="flyer-frame" class="flyer-iframe" src="" allowpaymentrequest="false" name="Flyer" allowfullscreen="false" referrerpolicy="unsafe-url" stlye="display: none;"></iframe>\
        <video oncontextmenu="return false;" id="flyer-video" width="100%" height="100%" muted style="display:block;" onended="videoEnded()" autoplay="autoplay">\
        <source src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_640_3MG.mp4#t=25" type="video/mp4">\
        </video>\
        <p class="flyer-desc" id="flyer-desc" alt="ad desc."></p>\
        </div>');
        if (flyer.flyer_debug == 'true') {
            flylog("Debug Mode - Markup loaded")
        };
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
                flylog("Flyer: Im Locked and Loaded. Bring. it. on.");
                if (flyer.flyer_debug == 'true') {
                    flylog("Debug Mode - attr loaded")
                };
        });
    } else {
        flylog('div Not found. Flyer Stopped. to fix, add <div id="flyer"></div> do your page.');
    };
});
$(document).ready(function ($) {
    if ($("#flyer").length) {
        if (flyer.flyer_debug == 'true') {
            flylog(" Debug Mode - Flyer Buttons Found")
        };
    var mode = localStorage.getItem('ad');
    if (mode)
        $('#flyer').addClass(mode);

    $("#nofly").click(function () {
        $("#flyer").addClass("hide");
        flylog(" Hidden");
        localStorage.setItem('ad', 'hide');
    });
    $("#yesfly").click(function () {
        $("#flyer").removeClass("hide");
        flylog(" Shown");
        localStorage.setItem('ad', null);
    });
        if($("#nofly, #yesfly").length) {
            console.log('Flyer: buttons Found and loaded');
            if (flyer.flyer_debug == 'true') {
                flylog(" Debug Mode - Flyer buttons Loaded")
            };
        } 
        // do nothing
    } else {
        flylogerror('Flyer: Buttons disabled due to div not found.');
        if (flyer.flyer_debug == 'true') {
            flylog(" Debug Mode - Flyer Buttons not found on page")
        };
        $("#nofly").remove();
        $("#yesfly").remove();
};
});
function rmvflyer() {
    $("#flyer-xbtn").prop('disabled', true);
    $("#flyer-xbtn").fadeOut(750)
    .queue(function(nxt) { 
        $(this).fadeOut(250);
        $(this).remove();
        nxt();
    });
    $("#flyer-desc,#flyer-image,#flyer-video,#flyer-frame,#flyer-t").slideUp(1500)
    .queue(function(nxt) { 
        $(this).empty();
        $("").slideUp(750).queue(function(nxt) {
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
    $("#flyer-removed").append('<div style="padding:20px">-----<br>Flyer Ad Closed by Flyer.<br>-----</div>');
    setTimeout(function(){
        $("#flyer-removed").slideDown(2000).queue(function(nxt) {
            $(this).empty();
            nxt();
        });
        flylogwarn("Removed");
    }, 5000);
    if (flyer.flyer_debug == 'true') {
        flylog(" Debug Mode - Remove Flyer Worked")
    };
};
function videoEnded() {
    $('#flyer-video').slideUp(1500)
            .queue(function(nxt) { 
                $("#flyer-video").remove();
                $("#flyer-image").slideDown(1500);
                nxt();
            });
            if (flyer.flyer_debug == 'true') {
                flylog(" Debug Mode - Video end")
            };
}1000;
$(document).ready(function () {
        $.ajax({
            url : "/offsite/counter",
            dataType: "text",
            success : function (data) {
                $(".text").append("Flyer Load Number: " + data);
            }
        });
        if (flyer.flyer_debug == 'true') {
            flylog(" Debug Mode - Video ended")
        };
});
function flyerloadcount() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/offsite/count.php"
      }).done(function( data) {
        flylog(" Logged +1")
        console.timeEnd("a")
      });
      if (flyer.flyer_debug == 'true') {
        flylog(" Debug Mode - AJAX 1 worked")
    };
} // DO NOT USE.
function flyerclick() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/offsite/click.php"
      }).done(function( data) {
        flylog(" Clicked +1")
      });
      if (flyer.flyer_debug == 'true') {
        flylog(" Debug Mode - AJAX 2 worked")
    };
}
function flyerdetect() {
    if (flyer.flyer_show === 'img') {
        $("#flyer-frame").remove();
        $("#flyer-video").remove();
        $("#flyer-image").show();
        if (flyer.flyer_debug == 'true') {
            flylog(" Debug Mode - IMG loaded")
        };
    } else if (flyer.flyer_show === 'vid') {
        $("#flyer-image").hide();
        $("#flyer-frame").remove();
        $("#flyer-video").show();
        if (flyer.flyer_debug == 'true') {
            flylog(" Debug Mode - VID loaded")
        };
    } else if (flyer.flyer_show === 'ifm') {
        $("#flyer-image").remove();
        $("#flyer-video").remove();
        $("#flyer-frame").show();
        if (flyer.flyer_debug == 'true') {
            flylog(" Debug Mode - IFM loaded")
        };
    } else {
        flylogerror("Flyer: No IFM/VID/IMG set.")
        if (flyer.flyer_debug == 'true') {
            flylog(" Debug Mode - No IFM/VID/IMG set.")
        };
    }
};
function flyerinit() {
    console.time("a")
    flylog = function() {
        var context = "Flyer:";
        return Function.prototype.bind.call(console.log, console, context);
    }();
    flylogwarn = function() {
        var context = "Flyer:";
        return Function.prototype.bind.call(console.warn, console, context);
    }();
    flylogerror = function() {
        var context = "Flyer:";
        return Function.prototype.bind.call(console.error, console, context);
    }();
    if (flyer.flyer_debug == 'true') {
        flylog(" Debug Mode - Flyer init Worked")
    };
    try {
        flyer
    } catch (error) {
        flylogerror("Flyer: Add Conf to page. Above Flyer.js")
         //flyer Default Backup
        flyer = {
            flyer_css: "yes", // Yes or url to css
            flyer_show: 'img', //img/vid/frm
            flyer_aid: 'FLYER IS NOT WORKING', // Unused
            flyer_title: 'Default Flyer Config', // title
            flyer_title_link: 'http://git.nrrinc.net/flyer', //title link
            flyer_frame_src: '/src/ad.html', // src to iframe, if iframe is set
            flyer_frame_rp: 'unsafe-url', // if url is on another server, change
            flyer_desc:'Flyer is not working ATM...', // Bottom text
            flyer_video:'/link/to/mp4.mp4', // video link (NOT YOUTUBE.), if video is set
            flyer_img_title: 'FlyerJS', // title of image, if image is set
            flyer_img_src: "/src/flyer/flyer.svg", // image src, if image is set
            flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer", // unused, but to be used
            flyer_ajax1: "",
            flyer_ajax2: "",
            flyer_useid: "TBD", // Random MD5
            flyer_debug:"true",
        }
    }
    if (flyer.flyer_debug == 'true') {
        flylog(" Debug Mode - Flyer config Found")
    };
    if (flyer.flyer_note == 'Hey! Welcome to Flyer! http://git.nrrinc.net/flyer') {
        // do nothing
    } else {
        console.log("add flyer_note to your config. where you set flyer up. Copy and paste.");
        console.warn('flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer",');
        youforgottoaddthenote();
        // the reason for this, i have no idea. you can remove these lines if you want (remove lines 2 - 9)
    }
    if (flyer.flyer_debug == 'true') {
        flylog(" Debug Mode - Flyer Note found")
        flyerchkconf();
    };
    $(document).ready( async function () {
        if (flyer.flyer_css === 'yes') {
            (function() {
                var css = document.createElement('link'); css.rel = 'stylesheet';
                css.href = '/src/flyer/flyer.css';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(css);
              })();
              if (flyer.flyer_debug == 'true') {
                flylog(" Debug Mode - Flyer.CSS loaded")
            };
        } else {
            (function() {
                var css = document.createElement('link'); css.rel = 'stylesheet';
                css.href = flyer.flyer_css;
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(css);
              })();
              if (flyer.flyer_debug == 'true') {
                flylog(" Debug Mode - Custom CSS loaded")
            };
        }
    });
    if (flyer.flyer_debug == 'true') {
        flylog(" Debug Mode - CSS Found")
    };
    if (flyer.flyer_debug == 'true') {
        flylog(" Debug Mode started")
    };
}
    var flycookietitle = "Cookies."; 
    var flycookiedesc = "By using Flyer.js, You Allow For Some Tracking Technologies to Be Used. You can Disable Flyer "; 
    var flycookielink = '<a onclick="rmvflyertwo()">Here</a>.'; 
    var flyercookiebtn = "Ok! Got it."; 
    if (flyer.flyer_debug == 'true') {
        flylog(" Debug Mode - FlyCookie markup ready")
    };
    function pureFadeIn(elem, display){
      var el = document.getElementById(elem);
      el.style.opacity = 0;
      el.style.display = display || "block";
      (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .02) > 1)) {
          el.style.opacity = val;
          requestAnimationFrame(fade);
        }
      })();
    };
    function pureFadeOut(elem){
      var el = document.getElementById(elem);
      el.style.opacity = 1;
      (function fade() {
        if ((el.style.opacity -= .02) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    };
    function setCookie(name,value,days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }
    function eraseCookie(name) {   
        document.cookie = name+'=; Max-Age=-99999999;';  
    }
    function cookieConsent() {
      if (!getCookie('flyercookie')) {
        document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + flycookietitle + '</a></div><div class="cookieDesc"><p>' + flycookiedesc + ' ' + flycookielink + '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' + flyercookiebtn + '</a></div></div>';
        pureFadeIn("cookieConsentContainer");
      }
    }
    window.onload = function() { cookieConsent(); };
function purecookieDismiss() {
    setCookie('flyercookie','1',7);
    pureFadeOut("cookieConsentContainer");
  }
  function rmvflyertwo() {
    rmvflyer();
    purecookieDismiss();
  }
/*
IP Address (Deleted every 14 Days)
User Agent
Device Width/Height
HTTP code: 200/202 or 4XX/5XX

as a Note, i dont think I will collect Ip addresses, But it could help with Spam Protection
*/
if (flyer.flyer_Plugin === 'true') {
    flyer_Plugins();
};
function flyer_Plugins() {
    if (flyer.flyer_Plugin_name === '*') {
    };
    if (flyer.flyer_Plugin_name === '*') {
    };
    if (flyer.flyer_Plugin_name === '*') {
    };
    if (flyer.flyer_Plugin_name === '*') {
    };
    if (flyer.flyer_Plugin_name === '*') {
    };
    if (flyer.flyer_Plugin_name === '*') {
    };
    if (flyer.flyer_Plugin_name === '*') {
    };
    if (flyer.flyer_Plugin_name === '*') {
    };
    if (flyer.flyer_Plugin_name === '*') {
    };
    if (flyer.flyer_Plugin_name === 'Custom') {
        console.log("Flyer Plugin: Custom Plugin Started")
    } else {
        //do nothing
        console.warn("Flyer Plugin: Started, No Plugin Loaded")
    };
};
function flyerchkconf() {
    {
    if (flyer.flyer_css === 'yes') {
        flylog(" Default CSS loaded")
    } else if (flyer.flyer_css.length > 0){
        flylogwarn("Custom CSS loaded. if CSS did not load, add HTTPS.")
    }else {
        flylogerror("Flyer: CSS Unable to load. Flyer.Flyer_css Not found")
    }
    }
    {
        if (flyer.flyer_show === 'img') {
            flylog("IMG Loaded")
        } else if (flyer.flyer_show === 'vid') {
            flylog("VID Loaded")   
        } else if (flyer.flyer_show === 'ifm') {
            flylog("IFM Loaded")
        } else {
            flylogerror("No IFM/VID/IMG Loaded")
        }
    }
    {
        if (flyer.flyer_aid.length === 0) {
            flylog("Aid is found") 
        } else {
            flylogwarn("Aid is Not found, May cause Issues in the Future")
        }
    }
    {
        if (flyer.flyer_title.length > 0) {
            flylog("title is loaded") 
        } else {
            flylogerror("title missing")
        }
    }
    {
        if (flyer.flyer_title_link.length > 0) {
            flylog("title link is loaded. Add HTTP if needed.") 
        } else {
            flylogerror("title link missing")
        }
    }
    /*
    // chkconf Checks your Config for errors.
    flyer.flyer_title_link: 'http://exmaple.com', //title link
    flyer.flyer_frame_src: '/src/ad.html', // src to iframe, if iframe is set
    flyer.flyer_frame_rp: 'unsafe-url', // if url is on another server, change
    flyer.flyer_desc:'your ad desc1', // Bottom text
    flyer.flyer_video:'/link/to/mp4.mp4', // video link (NOT YOUTUBE.), if video is set
    flyer.flyer_img_title: 'my cool image', // title of image, if image is set
    flyer.flyer_img_src: "https://via.placeholder.com/500x375", // image src, if image is set
    flyer.flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer", // unused, but to be used
    flyer.flyer_ajax1: "",
    flyer.flyer_ajax2: "",
    flyer.flyer_useid: "TBD", // Random MD5
    flyer.flyer_userandom: "true", // use random flyer config WIP
    flyer.flyer_debug:"" // Set to TRUE for Debug info
    */
}
/*
The idea for Plugins, You can import Custom Plugins, like Video or something.

if anyone has any better ideas, help.
*/