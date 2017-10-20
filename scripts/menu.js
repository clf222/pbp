$( document ).ready(function() {
  $('#fullpage').fullpage({
  	anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage'],
  	menu: '#myMenu',
    navigation: false,

    easing: 'easeInOutExpo',
			scrollingSpeed: 1000,
			css3: true,

  });
});
