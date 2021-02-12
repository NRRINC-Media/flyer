flypreinit();
function flypreinit() {
    try {
        flyer
    } catch (error) {
        console.error("Flyer: Add Config to page. Above Flyer.js. Fallback Config loaded.");
        console.error("Flyer: Add Config to page. Above Flyer.js. Fallback Config loaded.");
        console.error("Flyer: Add Config to page. Above Flyer.js. Fallback Config loaded. (yes x3. deal with it.)")
         //flyer Default Backup
        flyer = {
            flyer_css: "yes", // Yes or url to css
            flyer_show: 'img', //img/vid/frm
            flyer_aid: 'FLYER IS NOT WORKING', // Unused
            flyer_title: 'Default Flyer Config', // title
            flyer_title_link: 'http://git.nrrinc.net/flyer', //title link
            flyer_frame_src: '/ad.html', // src to iframe, if iframe is set
            flyer_frame_rp: 'unsafe-url', // if url is on another server, change
            flyer_desc:'Flyer is not working ATM...', // Bottom text
            flyer_video:'/link/to/mp4.mp4', // video link (NOT YOUTUBE.), if video is set
            flyer_img_title: 'FlyerJS', // title of image, if image is set
            flyer_img_src: "/flyer/flyer.svg", // image src, if image is set
            flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer", // unused, but to be used
            flyer_ajax1: "",
            flyer_ajax2: "",
            flyer_useid: "TBD", // Random MD5
            flyer_debug:"true",
        }
    }
};
document.querySelector(window).ready(function flyerinit() {
    if (Element.querySelector("#flyer").length) {
    var mode = localStorage.getItem('ad');
    if (mode)
    Element.querySelector('#flyer').classList.add(mode);

    Element.querySelector("#nofly").click(function () {
        Element.querySelector("#flyer").classList.add("hide");
        flylog(" Hidden");
        localStorage.setItem('ad', 'hide');
    });
    Element.querySelector("#yesfly").click(function () {
        Element.querySelector("#flyer").removeClass("hide");
        flylog(" Shown");
        localStorage.setItem('ad', null);
    });
        if(document.querySelector("#nofly, #yesfly").length) {
            flylog(' buttons Found and loaded');
        } 
        // do nothing
    } else {
        flylogerror(' Buttons disabled due to div not found.');
        Element.querySelector("#nofly").remove();
        Element.querySelector("#yesfly").remove();
    };
});
flyerinit();
/* old js */
/*
flypreinit();
function flypreinit() {
    try {
        flyer
    } catch (error) {
        console.error("Flyer: Add Config to page. Above Flyer.js. Fallback Config loaded.");
        console.error("Flyer: Add Config to page. Above Flyer.js. Fallback Config loaded.");
        console.error("Flyer: Add Config to page. Above Flyer.js. Fallback Config loaded. (yes x3. deal with it.)")
         //flyer Default Backup
        flyer = {
            flyer_css: "yes", // Yes or url to css
            flyer_show: 'img', //img/vid/frm
            flyer_aid: 'FLYER IS NOT WORKING', // Unused
            flyer_title: 'Default Flyer Config', // title
            flyer_title_link: 'http://git.nrrinc.net/flyer', //title link
            flyer_frame_src: '/ad.html', // src to iframe, if iframe is set
            flyer_frame_rp: 'unsafe-url', // if url is on another server, change
            flyer_desc:'Flyer is not working ATM...', // Bottom text
            flyer_video:'/link/to/mp4.mp4', // video link (NOT YOUTUBE.), if video is set
            flyer_img_title: 'FlyerJS', // title of image, if image is set
            flyer_img_src: "/flyer/flyer.svg", // image src, if image is set
            flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer", // unused, but to be used
            flyer_ajax1: "",
            flyer_ajax2: "",
            flyer_useid: "TBD", // Random MD5
            flyer_debug:"true",
        }
    }
}
flyerinit();
document.querySelector(document).ready(function ($) {
    if (document.querySelector("#flyer").length) {
    var mode = localStorage.getItem('ad');
    if (mode)
        document.querySelector('#flyer').classList.add(mode);

    document.querySelector("#nofly").click(function () {
        document.querySelector("#flyer").classList.add("hide");
        flylog(" Hidden");
        localStorage.setItem('ad', 'hide');
    });
    document.querySelector("#yesfly").click(function () {
        document.querySelector("#flyer").removeClass("hide");
        flylog(" Shown");
        localStorage.setItem('ad', null);
    });
        if(document.querySelector("#nofly, #yesfly").length) {
            flylog(' buttons Found and loaded');
        } 
        // do nothing
    } else {
        flylogerror(' Buttons disabled due to div not found.');
        document.querySelector("#nofly").remove();
        document.querySelector("#yesfly").remove();
};
});
function rmvflyer() {
    document.querySelector("#flyer-xbtn").prop('disabled', true);
    document.querySelector("#flyer-xbtn").fadeOut(750)
    .queue(function(nxt) { 
        document.querySelector(this).fadeOut(250);
        document.querySelector(this).remove();
        nxt();
    });
    document.querySelector("#flyer-desc,#flyer-image,#flyer-video,#flyer-frame,#flyer-t").slideUp(1500)
    .queue(function(nxt) { 
        document.querySelector(this).empty();
        document.querySelector("").slideUp(750).queue(function(nxt) {
            document.querySelector("#flyer-t").remove();
            document.querySelector("#flyer-image,#flyer-video,#flyer-frame").remove()
            // keep under 5000 total
            .queue(function(nxt){

            });
        });
        nxt();
    });
    document.querySelector("#flyer").classList.add("hide");
    localStorage.setItem('ad', 'hide');
    document.querySelector("#flyer").attr('id','flyer-removed');
    document.querySelector("#flyer-removed").insertAdjacentHTML("beforeend",'<div style="padding:20px">-----<br>Flyer Ad Closed by Flyer.<br>-----</div>');
    setTimeout(function(){
        document.querySelector("#flyer-removed").slideDown(2000).queue(function(nxt) {
            document.querySelector(this).empty();
            nxt();
        });
        flylogwarn("Removed");
        if (flyer.flyer_debug == 'true') {
            flylog(" Debug Mode - Remove Flyer Worked")
        };
    }, 5000);
};
function videoEnded() {
    document.querySelector('#flyer-video').slideUp(1500)
            .queue(function(nxt) { 
                document.querySelector("#flyer-video").remove();
                document.querySelector("#flyer-image").slideDown(1500);
                flylog("video end, image placed")
                nxt();
            });
}1000;
function flyerloadcount() {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/offsite/count.php"
      }).done(function( data) {
        flylog(" Logged +1")
      });
      if (flyer.flyer_debug == 'true') {
        flylog(" Debug Mode - AJAX 1 (load) worked")
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
        flylog(" Debug Mode - AJAX 2 (click) worked")
       };
}
function flyerdetect() {
    if (flyer.flyer_show === 'img') {
        document.querySelector("#flyer-frame").remove();
        document.querySelector("#flyer-video").remove();
        document.querySelector("#flyer-image").show();
    } else if (flyer.flyer_show === 'vid') {
        document.querySelector("#flyer-image").hide();
        document.querySelector("#flyer-frame").remove();
        document.querySelector("#flyer-video").show();
    } else if (flyer.flyer_show === 'ifm') {
        document.querySelector("#flyer-image").remove();
        document.querySelector("#flyer-video").remove();
        document.querySelector("#flyer-frame").show();
    } else {
        flylogerror("No IFM/VID/IMG set.")
    }
};
function flyerinit() {
    flyconsole();
    if (flyer.flyer_debug == 'true') {
        flydebug();
    };
    if (flyer.flyer_note == 'Hey! Welcome to Flyer! http://git.nrrinc.net/flyer') {
        if (flyer.flyer_debug == 'true') {
            flylog(" Debug Mode - Flyer Note found")
        };
        // do nothing
    } else {
        flylog("add flyer_note to your config. where you set flyer up. Copy and paste.");
        flylogwarn('flyer_note: "Hey! Welcome to Flyer! http://git.nrrinc.net/flyer",');
        // the reason for this, i have no idea. you can remove these lines if you want (remove lines 2 - 9)
    }
    document.querySelector(document).ready(function () {
        if (flyer.flyer_css === 'yes') {
            (function() {
                var css = document.createElement('link'); css.rel = 'stylesheet';
                css.href = '/flyer/flyer.css';
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(css);
              })();
              if (flyer.flyer_debug == 'true') {
                flylog(" Debug Mode - Flyer.CSS loaded")
              };
        } else if (flyer.flyer_css.includes('https')) {
            (function() {
                var css = document.createElement('link'); css.rel = 'stylesheet';
                css.href = flyer.flyer_css;
                (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(css);
              })();
              if (flyer.flyer_debug == 'true') {
                flylog(" Debug Mode - Custom CSS loaded")
            };} else {
                flylogerror("No CSS used. Make sure to add HTTPS:// to your URL. DO NOT USE LOCAL.");
                flylogerror("Flyer Div Removed until CSS fixed.");
                document.querySelector('#flyer').remove();
            }
    });
}
    var flycookietitle = "Cookies."; 
    var flycookiedesc = "By using Flyer.js, You Allow For Some Tracking Technologies to Be Used. You can Disable Flyer "; 
    var flycookielink = '<a onclick="rmvflyertwo()">Here</a>.'; 
    var flyercookiebtn = "Ok! Got it."; 
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
function flydebug() {
    $.getScript( "/flyer/flyer-debug.js" )
    .done(function( script, textStatus ) {
        flylog(' Loading debug',textStatus );
        flylog(" Debug On")
    })
    .fail(function( jqxhr, settings, exception ) {
        document.querySelector( "div.log" ).text( "Triggered ajaxError handler." );
    }); }
function flyconsole() {
    flylog = function() {
        var context = "%c Flyer.JS: ";
        return Function.prototype.bind.call(console.log, console, context, 'color:green;');
    }();
    flylogwarn = function() {
        var context = "%c Flyer.JS: ";
        return Function.prototype.bind.call(console.warn, console, context, 'color:rgb(255, 179, 0);');
    }();
    flylogerror = function() {
        var context = "%c Flyer.JS: ";
        return Function.prototype.bind.call(console.error, console, context, 'color:red;');
    }();
};
document.querySelector(document).ready( function () {
    if (document.querySelector("#flyer").length) {
        document.querySelector("#flyer").insertAdjacentHTML("beforeend",'
        <h2 id="flyer-t">
        <a href="#" id="flyer-title" target="_top" alt="Link to Sponsor" onClick="flyerclick()" rel="noreferrer"></a><button style="position: absolute; right: 35px;background-color: transparent;cursor:pointer;border:black 2px solid; border-radius: 4px;" onclick="rmvflyer()" id="flyer-xbtn">X</button>
        </h2>
        <div id="flyer-content">
        <img class="flyer-image" id="flyer-image" src="" alt="none" title="" style="display:none;">
        <iframe id="flyer-frame" class="flyer-iframe" src="" allowpaymentrequest="false" name="Flyer" allowfullscreen="false" referrerpolicy="unsafe-url" stlye="display: none;"></iframe>
        <video oncontextmenu="return false;" id="flyer-video" width="100%" height="100%" muted style="display:block;" onended="videoEnded()" autoplay="autoplay">
        <source src="" type="video/mp4">
        </video>
        <p class="flyer-desc" id="flyer-desc" alt="ad desc."></p>
        </div>');
        document.querySelector(document).ready(function () {
                flyerdetect();
                document.querySelector("#flyer-frame").attr('src', flyer.flyer_frame_src); // link to html, htm or img.
                document.querySelector("#flyer-frame").attr('sandbox', ''); // edit if needed, to disable iframe scripts.
                document.querySelector("#flyer-frame").attr('name', 'Flyer'); // name of iframe ALT
                document.querySelector("#flyer-frame").attr('allowfullscreen', 'false');  // do not change.
                document.querySelector("#flyer-frame").attr('allowpaymentrequest', 'false'); // do not allow payments
                document.querySelector("#flyer-frame").attr('referrerpolicy', flyer.flyer_frame_rp); // what kind of URL is it? Be unsafe if you dont know.
                document.querySelector("#flyer-image").attr('src', flyer.flyer_img_src); // img SRC Gif, webm, PNG or jpeg.
                document.querySelector("#flyer-image").attr('title', flyer.flyer_img_title); // title of img, alt
                document.querySelector("#flyer-image").attr('alt',flyer.flyer_img_title); // alt of an alt
                document.querySelector("#flyer_video").attr('data-type', 'video/mp4'); 
                document.querySelector("#flyer-title").insertAdjacentHTML("beforeend",flyer.flyer_title);
                document.querySelector("#flyer-title").attr('href',flyer.flyer_title_href); 
                document.querySelector("#flyer-desc").insertAdjacentHTML("beforeend",flyer.flyer_desc); 
                document.querySelector("#flyer-desc").attr('alt', flyer.flyer_desc);
                // working on Video
                document.querySelector("#flyer-video").attr('src', flyer.flyer_video)
                flyerloadcount(); 
                flylog(" Im Locked and Loaded. Bring. it. on.");
                if (flyer.flyer_debug == 'true') {
                    flylog(" Debug Mode - DIV, Markup and settings Loaded")
                };
        });
    } else {
        flylogerror('div Not found. Flyer Stopped. to fix, add <div id="flyer"></div> do your page.');
        if (flyer.flyer_debug == 'true') {
            flylog(" Debug Mode - Flyer Div Not found")
        };
    };
}); 
*/