var tl = gsap.timeline()


tl.from(".nav img , .nav h3 , .nav h4 , .nav button" , {
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.1
})
tl.from(".main h1 " , {
    y:100,
    opacity:0,
    stagger:0.3
})
tl.from(".main>.img1",{
    x:-600,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.3
})
tl.from(".main>.img2",{
    x:300,
    delay:0.5,
    opacity:0
})
tl.from(".main>.img3",{
    x:300,
    delay:0.5,
    opacity:0
})
tl.from(".main>.img4",{
    y:300,
    delay:0.5,
    opacity:0
})