document.addEventListener("DOMContentLoaded", function () {
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: "#favoriteSection",
            start: "top center", 
            end: "bottom center", 
            scrub: true 
        }
    });

    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#favoriteSection",
            start: "top center", 
            end: "bottom center", 
            scrub: true 
        }
    });

    tl1.to("#favoriteImg1", { x: "-200%", ease: "none" }); 
    tl2.to("#favoriteImg2", { x: "-400%", ease: "none" }); 
});


/* aos 속도 조절 */
AOS.init({
    duration: 1200,
  })