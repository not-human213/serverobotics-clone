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

h1.textContent.split(" ").forEach((char) => {
    clutter += ` <span>${char}</span> `;
});
h1.innerHTML = clutter;

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "+=800",
        scrub: 1,
        pin: true,
    }       
})
t2.to(".about svg", {
    scale: 0.7,
    filter: "blur(30px)",
})
t2.from(".about h1 span", {
    opacity: 0,
    y:20,
    duration: 1.5,
    stagger: 0.3,
}, "<50%" )