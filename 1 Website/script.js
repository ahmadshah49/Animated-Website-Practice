var tl= gsap.timeline()
tl.from("nav img,.nav-part2 h5,.nav-part3 h5 , .nav-part3 button",{
    y:-100,
    delay:.3,
    opacity:0,
    stagger:0.3,
   duration:2
})
tl.from(".head h1",{
    y:100,
    opacity:0,
    stagger:0.3,
   duration:1
})
tl.from(".head img",{
    scale:0,
    opacity:0
    
})
tl.from(".scroll",{
    opacity:0,
    y:-20,
    duration:1,
    repeat:-1,
    yoyo:true,
    
})