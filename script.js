var crsr = document.getElementById('cursor')
var crsr1 = document.getElementById('cursor-1')
document.addEventListener("mousemove", function(dets) {
    crsr.style.left = dets.x + 25 + "px"
    crsr.style.top = dets.y + 20 + "px"
    crsr1.style.left = dets.x - 200 + "px"
    crsr1.style.top = dets.y - 200 + "px"
})
var h4all = document.querySelectorAll("#nav h4 , #page-4 h1,.elem-card , .card .overlay,.overlay h4, .overlay p , #scroller-1 h4,#nav img  ")
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter", function() {
        crsr.style.scale = 4
        crsr.style.border = "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
        crsr.style.transition = "all ease 0.2s"
    })
    elem.addEventListener("mouseout", function() {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
        crsr.style.transition = "all ease 0.2s"

    })
})






gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "95px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,

    },

});
gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -50%",
        end: " top -100%",
        scrub: 6
    }
})
gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    // stagger: 0.1,
    scrollTrigger: {

        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 58%",
        scrub: 3
    }
})
gsap.from("#card1 ", {
    x: -95,
    opacity: 0,
    duration: 2,
    // stagger: 1,
    scrollTrigger: {

        trigger: "#cards-container",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 58%",
        scrub: 2
    }
})
gsap.from("#card2 ", {
    y: 95,
    opacity: 0,
    duration: 2,
    // stagger: 1,
    scrollTrigger: {

        trigger: "#cards-container",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 58%",
        scrub: 2
    }
})
gsap.from("#card3 ", {
    x: 95,
    opacity: 0,
    duration: 2,
    // stagger: 1,
    scrollTrigger: {

        trigger: "#cards-container",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 58%",
        scrub: 2
    }
})
gsap.from("#coln-1", {
    y: -70,
    x: -70,
    // duration: 4,
    scrollTrigger: {
        trigger: "#coln-1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})

gsap.from("#coln-2", {
    y: 70,
    x: 70,
    // duration: 4,
    scrollTrigger: {
        trigger: "#coln-1",
        scroller: "body",
        // markers: true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from("#page-3 p", {
    y: 90,
    opacity: 0,
    // duration: 4,
    // stagger: 0.5,
    scrollTrigger: {

        trigger: "#page-3",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 4
    }
})
gsap.from("#page-4>h1 , .elem-card", {
    y: 70,
    opacity: 0,
    // duration: 4,
    // stagger: 0.5,
    scrollTrigger: {

        trigger: "#page-4",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 58%",
        scrub: 1.5
    }
})