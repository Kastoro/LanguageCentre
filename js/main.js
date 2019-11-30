//Слайдер НАЧАЛО
$('#owl-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    navText: ["&lang;", "&rang;"],
    items:1,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            mouseDrag:true
        },
        1200:{
        	mouseDrag:false
        }
    }
})
var owlSlid = $('#owl-slider');
owlSlid.owlCarousel();
// Go to the next item
$('.my-owl-next').click(function() {
    owlSlid.trigger('next.owl.carousel');
})
// Go to the previous item
$('.my-owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owlSlid.trigger('prev.owl.carousel', [300]);
})
//Слайдер КОНЕЦ
//Карусель НАЧАЛО
$('#owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    navText: ["&lang;", "&rang;"],
    items:2,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            mouseDrag:true
        },
        992:{
            items:2,
            mouseDrag:true
        },
        1200:{
        	items:2,
        	mouseDrag:false
        }
    }
})
var owlCar = $('#owl-carousel');
owlCar.owlCarousel();
// Go to the next item
$('.rev-owl-next').click(function() {
    owlCar.trigger('next.owl.carousel');
})
// Go to the previous item
$('.rev-owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owlCar.trigger('prev.owl.carousel', [300]);
})
//Карусель КОНЕЦ
//Мобильное меню НАЧАЛО
$(".topmenu-mobile-rightside").click(function() {
	if($('.mobile-call').hasClass("mobile-menu-close")) {
  	$('.mobile-call').removeClass("mobile-menu-close");
    $('.mobile-call').addClass("mobile-menu-open");
  }else {
  	$('.mobile-call').removeClass("mobile-menu-open");
    $('.mobile-call').addClass("mobile-menu-close");
  }
});
//Мобильное меню КОНЕЦ
