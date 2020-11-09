$('head').append('<link rel="stylesheet" href="flyer.css" type="text/css" />');// AD CSS
// auto set ad
$(document).ready(function() {
    //flyer css main
    // flyer
    $("#flyer").append('<br><h2 class="flyer-title"><a href="#" id="flyer-linka"><i id="fyler-Sponsor-name"></i></a></h2> <div class="entry"> <desc><img class="flyer-image" id="flyer-image" src="/src/home/shared/images/HER.PNG" alt="" title="this is not the right image.." style="display: none;"/> <iframe id="flyer-frame" class="flyer-iframe9"></iframe> <p class="flyer-desc" id="flyer-desc"></p> </desc> </div>');
    //Sponer name
    $("#fyler-Sponsor-name").append('Sponsor: Spot Open!');
    $("#flyer-linka").attr('a', '#');
    $("#flyer-linka").attr('target', '_blank');
    $("#flyer-linka").attr('alt', 'Link to Sponsor')
    // Sponsor Iframe
    $("#flyer-frame").attr('src', 'flyer.htm');
    $("#flyer-frame").attr('sandbox', '');
    $("#flyer-frame").attr('allowpaymentrequest', 'false');
    $("#flyer-frame").attr('name', 'Flyer');
    $("#flyer-frame").attr('allowfullscreen', 'false');
    $("#flyer-frame").attr('referrerpolicy', 'unsafe-url');
    // Sponsor Dsec
    $("#flyer-desc").append('Your ad here');
    $("#flyer-desc").attr('alt', 'ad desc.');
    // Sponsor image
    $("#flyer-image").attr('src', '');
    $("#flyer-image").attr('title', '');
    $("#flyer-image").attr('alt', 'none');
    $("#flyer-image").hide();
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
// <div id="flyer"></div>