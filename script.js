const locomotiveScroll = new LocomotiveScroll();

gsap.registerPlugin(ScrollTrigger);



let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "body",
        start: "30% top",
    }       
})

tl.to("header",{
    y: -100,
});

let lastscroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > 300) {
        if (currentScroll > lastscroll) {
            gsap.to("header", {y: -100});
        } else if(lastscroll - currentScroll > 3) {
            gsap.to("header", {y: 0});
        }
    }
    else{
        gsap.to("header", {y: 0});
    }
    lastscroll = currentScroll;
});


let h1 = document.querySelector(".about h1");
let clutter = "";

h1.textContent.split('').forEach((char) => {
    clutter += `<span>${char}</span>`;
});
h1.innerHTML = clutter;

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "+=2000",
        scrub: 1.5,
        pin: true,
    }       
})
t2.to(".about svg", {
    scale: 0.7,
    filter: "blur(30px)",
}, )
t2.from(".about h1 span", {
    opacity: 0,
    x:-30,
    stagger: 0.1,
},)


let t3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        start: "top top",
        end: "+=2000",
        scrub: 1.5,
        pin: true,
    }
})

t3.to(".page4 .completedbar", {
    height: "100%",
    duration: 4,
}, "element");

t3.to(".page4 .baricon", {
    top: "100%",
    duration: 4,
}, "element");

t3.to(".page4 .vct1", {
    opacity: 0,
},  0.5);

t3.to(".page4 .vct2", {
    opacity: 1,
    y: -100,
}, 0.5);

t3.to(".page4 .vci_scroller", {
    y: "-80vh",
    duration: 0.5,
    ease: "none",
}, 0.5);

t3.to(".page4 .vct2", {
    opacity: 0,
    y: -100,
},  2);

t3.to(".page4 .vct3", {
    opacity: 1,
    y: -100,
}, 2);


t3.to(".page4 .vci_scroller", {
    y: "-160vh",
    duration: 0.5,
    ease: "none",
}, 2);

t3.to(".page4 .vct3", {
    opacity: 0,
    y: -100,
},  3);

t3.to(".page4 .vct4", {
    opacity: 1,
    y: -100,
}, 3);


t3.to(".page4 .vci_scroller", {
    y: "-240vh",
    duration: 0.5,
    ease: "none",
}, 3);