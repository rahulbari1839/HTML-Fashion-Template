
jQuery(document).ready(function($) {
	
	
	$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('.back-to-top:hidden').stop(true, true).fadeIn();
    } else {
        $('back-to-top').stop(true, true).fadeOut();
    }
});

        setTimeout( function(){
				jQuery('.rbt-wrapper-loder').hide("slow");
			     jQuery('.body-layout').show("slow");

			       $('.carousel-slider-home').owlCarousel({

					loop: true,
					margin: 10,
					nav: true,
					responsive:{
						0:{
							items: 1 
						},
						600:{
							items: 1
						},
						1000:{
							items: 1
						}
					}


				 });



		}, 3000);
		
		
		


		RBTTemplateHtmlWowCall();
		$(".owl-prev").hide();
		$(".owl-next").hide();


	   $(".rb-carousel-inner").mouseover( function(){
	   	   $(".owl-prev,.owl-next").show();
	   });		 
       
       $(".rb-carousel-inner").mouseout( function(){
	   	   $(".owl-prev,.owl-next").hide();
	   });

/*	   $(".list-line-section .show-men").click( function(){
	   	  $(".img-gallery .women-rbt").hide(1000);

	   });
*/
	   $(".sub-li-list").click(function(){
	   	  $(this ).find(".rbt-cover-size").toggle();
	   });

	   $("#rbt-modal-poppup").modal('show');


});

function RBTTemplateHtmlWowCall(){
	if(jQuery('body').find('.wow').length != 0 ){
		new WOW().init();
	}
}


