//Слайдер НАЧАЛО
$('#owl-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    navText: ["&lang;", "&rang;"],
    items:1,
    mouseDrag:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
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
    mouseDrag:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
})
var owlCar = $('#owl-carousel');
owlCar.owlCarousel();
// Go to the next item
$('.my-owl-next').click(function() {
    owlCar.trigger('next.owl.carousel');
})
// Go to the previous item
$('.my-owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owlCar.trigger('prev.owl.carousel', [300]);
})
//Карусель КОНЕЦ