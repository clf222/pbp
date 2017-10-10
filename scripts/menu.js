$( document ).ready(function() {
  $('.scrollspy').scrollSpy();


  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
      $( ".menu" ).slideToggle( "slow", function() {
        $( ".hamburger" ).hide();
        $( ".cross" ).show();
      });
  });
function closeMenu() {
  $( ".menu" ).slideToggle( "slow", function() {
    $( ".cross" ).hide();
    $( ".hamburger" ).show();
  });
}
$( ".cross" ).click(closeMenu);


$( ".menu li" ).click(closeMenu);




$(function () {
        var isAdded = false;
        $(window).resize(function () {
            if (!isAdded && $(window).width() >= 768) && !($("h1").length){
                 isAdded = true;
                 $('.text').prepend('<h1>pop.<span>Bubble.</span>pop</h1>');
            } else if (isAdded && $(window).width() <768) {
                isAdded = false;
                $('.text').find('h1').remove();
            }
        });
    });

});
