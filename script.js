gsap.timeline()
    .to(".element_2", { duration: 1,y: 2,repeat:-1,yoyo: true })
    .to(".element_6", { duration: 1,scaleX: 1.01,scaleY:1.01,repeat:-1,yoyo: true },"<")
    .fromTo(".element_5", {rotate:-1},{ duration: 1,rotate:1,repeat:-1,yoyo: true },"<")