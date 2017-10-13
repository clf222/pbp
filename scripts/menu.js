$( document ).ready(function() {
  $('#fullpage').fullpage();


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


//
// $('#fullpage').fullpage({
// 	afterResize: function(){
// 		var pluginContainer = $(this);
// 		alert("The sections have finished resizing");
// 	}
// });
        var isAdded = false;
        $(window).resize(function () {
            if (!isAdded && ($(window).width() >= 450) && !($("h1").length)){
                 isAdded = true;
                 $('.text').prepend('<h1>pop.<span>Bubble.</span>pop</h1>');
            } else if ( ($(window).width() <450)) {
                isAdded = false;
                $("h1").remove();
            }
        });
    });

// });
