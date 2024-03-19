var tl = gsap.timeline()

tl.from(".nav h1", {
    y:50,
    opacity:0,
    scale:.5,
    duration:0.8,
    delay:0.3
})
tl.from(".nav h2", {
    opacity:0,
    scale:0.5,
    duration:0.5,
})

gsap.from("#page2-part-1 img", {
    x:-100,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
        trigger:"#page2-part-1",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 20%",
        end:"top 60%"
    }
})
gsap.from("#page2-part-2 img", {
    x:100,
    opacity:0,
    duration:0.6,
    scrollTrigger:{
        trigger:"#page2-part-1",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 20%",
        end:"top 60%"
    },
})
gsap.from("#page2-part-1 h1", {
    x:-100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2-part-1",
        scroller:"body",
        // markers:true,
        duration:0.6,
        scrub:2,
        start:"top 7%",
        end:"top 60%"
    },
})
gsap.from(".pg2-text-part2 h3", {
    x:-100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2-part-1",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 5%",
        end:"top 60%"
    },
})
gsap.from(".pg2-text-part2 p", {
    x:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2-part-1",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 5%",
        end:"top 60%"
    },
})

gsap.from(".page3-part2 img", {
    x:200,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 15%",
        end:"top 50%"
    },
})
gsap.from(".page3-part1-text h5", {
    x:-200,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 5%",
        end:"top 50%"
    },
})

gsap.from(".page4 img", {
    y:200,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 25%",
        end:"top 50%"
    },
})



gsap.from(".page6 img", {
    y:200,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 25%",
        end:"top 50%"
    },
})
