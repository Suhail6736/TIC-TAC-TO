let tl = gsap.timeline();

tl.from("nav",{
    y:-100,
    duration:2,
});

tl.from(".container",{
    x:-500,
    opacity : 0,
    duration : 1,
})


