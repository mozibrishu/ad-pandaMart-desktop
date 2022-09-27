gsap.timeline({defaults:{ease: "power2.out"}})
    .to(".element_2", { duration: 1,y: 2,repeat:-1,yoyo: true })
    .fromTo(".element_5", {rotate:-1},{ duration: 2,rotate:1,repeat:-1,yoyo: true },"<")
    .to(".element_6", { duration: 1,scaleY: 1.05,repeat:-1,yoyo: true },"<.2")