$(document).ready(function(){
  
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 

$(".tranding_carosel_area_m").owlCarousel({
	items:6,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
		center:true,
		responsive : {
			// breakpoint from 0 up
			0 : {
				items:2,
				center:false,
			},
			// breakpoint from 480 up
			480 : {
				items:3,
			},
			// breakpoint from 768 up
			991 : {
				items:6,
			}
		}
});

$(".order_slider").owlCarousel({
	
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
		center:true,
		responsive : {
			// breakpoint from 0 up
			0 : {
				items:2,
				center:false,
			},
			// breakpoint from 480 up
			480 : {
				items:3,
			},
			// breakpoint from 768 up
			991 : {
				items:6,
			}
		}
});
$(".oucaming_slider ").owlCarousel({
	
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
		center:true,
		responsive : {
			// breakpoint from 0 up
			0 : {
				items:2,
				center:false,
			},
			// breakpoint from 480 up
			480 : {
				items:3,
			},
			// breakpoint from 768 up
			991 : {
				items:6,
			}
		}
});
$(".oucaming_slider").owlCarousel({
	items:6,
		loop:true,
		nav:false,
		dots:false,
		autoplay:true,
		
});
$(".hero_slide_item").owlCarousel({
	items:1,
		loop:true,
		nav:false,
		dots:true,
		autoplay:true,
		
		
});

$(".search_box").click(function(){
	$(".serch_none_box").show();
});
$(".s_btns").click(function(){
	$(".serch_none_box").fadeOut();
});
$(".containerr").click(function(){
	$(".menu").toggleClass("menu_show");
});
$(".date").click(function(){
	$(".filter_c_box_1").slideToggle();
});
$(".theme").click(function(){
	$(".filter_c_box_2").slideToggle();
});
$(".product").click(function(){
	$(".filter_c_box_3").slideToggle();
});
$(".company").click(function(){
	$(".filter_c_box_4").slideToggle();
});
$(".ETA").click(function(){
	$(".filter_c_box_5").slideToggle();
});
$(".Price").click(function(){
	$(".filter_c_box_6").slideToggle();
});
$(".PriCollectionce").click(function(){
	$(".filter_c_box_7").slideToggle();
});
$(".Character").click(function(){
	$(".filter_c_box_8").slideToggle();
});
$(".Celebrity").click(function(){
	$(".filter_c_box_9").slideToggle();
});
$(".Artist").click(function(){
	$(".filter_c_box_10").slideToggle();
});
$(".Special_Feature").click(function(){
	$(".filter_c_box_11").slideToggle();
});
	 
	

});
//======================
	// Preloder
	//======================
	$(window).on("load", function () {
		$("#preloader").fadeOut();
		$("#preloader").delay(500).fadeOut("slow");
		$("body").delay(500).css({ overflow: "visible" });
	});
