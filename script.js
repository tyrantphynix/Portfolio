



/** ----------- GSAP ANIMATION ------------ */

// animate hero section

const hero_tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-section",
        start : "top top",
        end : "+=400px top", // expand the scroll height by 400px
        scrub: 2,
        pin: true
    }
});

// iterate .title span tag

document.querySelectorAll(".hero-section .hero-content .title span").forEach((span, index) => {
    hero_tl.to(span, {
        y : -1500,
        duration : 4,
        ease : "power1.Out",
    }, index * 0.1)
})

gsap.to(".hero-section", {
    y : -1200, duration : 4, ease : "power1.Out",
    scrollTrigger: {
        trigger: ".hero-section",
        start : "top top",
        end : "+=800px top", // expand the scroll height by 400px
        scrub: 2,
        pin: true
    }
})