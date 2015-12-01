$(document).foundation();
$(document).ready(function() {

  $("#owl-slider").owlCarousel({

      autoPlay: false, //Set AutoPlay to 3 seconds
	  lazyLoad: true,
	  lazyFollow: true,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

  });

});
