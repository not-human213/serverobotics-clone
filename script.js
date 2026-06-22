gsap.registerPlugin(ScrollTrigger);
console.log("hello world")


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
    lastscroll = currentScroll;
});
