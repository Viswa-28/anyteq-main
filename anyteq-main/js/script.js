gsap.registerPlugin(ScrollTrigger);



gsap.from(".icon", {
    // x: 100,
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: ".icon",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        // markers: true
    }
});


// gsap.from(".h1", {
//     y: 100,
//     duration: 1,
//     // opacity: 0,
  
    

//     scrollTrigger: {
//         trigger: ".h1",
//         start: "top 80%",
//         end: "bottom 20%",
//         scrub: true,
//         // markers: true
//     }
// });
    
// $(".icon").mouseover(function() {
//  $(this).fadeOut(400);
//  $(this).siblings(".details").fadeIn(500);

// });
// $(".details").mouseleave(function() {
//  $(this).fadeOut(500);
//  $(this).siblings(".icon").fadeIn(500);
// });


// $(".parent").hover(function() {
// $(this).find(".icon").fadeOut(400);
// $(this).find(".details").fadeIn(500);
// $(this).find(".p").fadeOut(400);
// });

// $(".details").mouseleave(function() {
// $(this).fadeOut(500);
// $(this).siblings(".icon").fadeIn(500);
// $(this).siblings(".p").fadeIn(500);
// });



// swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
 // Prevents gap
  speed: 5000,              // Slow, smooth scroll
  autoplay: {
    delay: 0,                // No pause
    disableOnInteraction: false,
    // reverseDirection: true   /// Reverse direction
    autoplayDisableOnInteraction: true // Keep autoplay after interaction
  },
  allowTouchMove: false,
  freeMode: true,            // Continuous flow
  freeModeMomentum: false,   // No bounce at edges
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

// Pause on hover
$(".mySwiper").on("mouseenter", function() {
  swiper.autoplay.stop();
});
$(".mySwiper").on("mouseleave", function() {
  swiper.autoplay.start();
});


