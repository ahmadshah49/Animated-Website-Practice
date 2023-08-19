var tl= gsap.timeline()
tl.from(".nav,.nav h1,.nav-part2 h4,.nav-part3 h3",{
    y:-50,
    opacity:0,
    // delay:.3,
    stagger:0.4

})
tl.from(".left,.main .left  .part1 h1,part1 ,.part2 span",{
    x:-50,
    opacity:0,
    // delay:,
    stagger:0.2

})
tl.from(".right img",{
    scale:2,
    opacity:0,
    // delay:.3,
   duration:1

})
tl.from(".page2 h1",{
    y:200,
    opacity:0,

})
gsap.from(".page2 .boxes .box",{    
    y:200,
    delay:0.5,
    stagger:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:".page2 .boxes .box",
        scroller:"body",
    }

})