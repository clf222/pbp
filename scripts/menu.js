$( document ).ready(function() {

$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".hamburger" ).hide();
// $( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});
// this is a test not working
$("ul li").click(function() {
  $(".menu").fadeToggle("fast", function() {
    $(".hamburger").show();
  });
  $
});


// need script so that when you click on #home, #about, #menu, #events, #location the following happens:
// 1.menu disappears
// 2. header appears with .hamburger as visible
// 3. go to the id of the clicked on menu item

});
