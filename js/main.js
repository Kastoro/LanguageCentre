$('.owl-carousel').owlCarousel({
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
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.my-owl-next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.my-owl-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})