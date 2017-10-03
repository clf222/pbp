$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {

$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

$(function () {
        var isAdded = false;
        $(window).resize(function () {
            if (!isAdded && $(window).width() >= 768) {
                 isAdded = true;
                 $('.text').prepend('<h1>pop.<span>Bubble.</span>pop</h1>');
            } else if (isAdded && $(window).width() <768) {
                isAdded = false;
                $('<h1>pop.<span>Bubble.</span></h1>').remove();
            }
        });
    });
});
