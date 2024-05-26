gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
})

const homeTimeLine = gsap.timeline({
  scrollTrigger:{
    trigger: '.wrapper',
  start: 'top',
  end: '+=600',
  scrub: 1,
  pin: true,
  ease: 'ease',
  pinSpacing: false
  }
})

homeTimeLine
.to('.img-container',{
    scale: 50,
    ease: 'ease',
    scrollTrigger:{
      trigger: '.video-section',
      scrub: 1,
      start: 'top',
      end: 'bottom',
      pin: true,
    }
})
.from('.left-side', {
    y: 150,
    opacity: 0,
    stagger: {
      amount: .4,
    },
    delay: 1
})
.from('.right-side', {
  opacity: 0,
  stagger: {
    amount: .4,
  },
})
.to('.wrapper',{
  x: -window.innerWidth,
  duration:3, delay: 1.5, ease: 'ease',
  
})

  
gsap.to('.right', {
  autoAlpha: 0,
  x: 500,
  duration: 1,
  scrollTrigger:{
    start: 1
  }
})

gsap.to('.left', {
  autoAlpha: 0,
  x: -500,
  duration: 1,
  scrollTrigger:{
    start: 1
  }
})

gsap.to('.txt-bottom', {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 1,
  scrollTrigger:{
    start: 2
  }
})
  gsap.utils.toArray('.w-img').forEach(image=>{
    gsap.fromTo(image, {
      opacity: 0,
      yPercent: 30,
     
    },{
      opacity: 1,
      yPercent: 0,
      scrollTrigger: {
        trigger: image,
        start: '100 bottom',
        scrub: 1,
        stagger:{
          amount: .4
        }
      }
    })
  })

const intit = gsap.timeline();

intit.from('.img_txt div', {
  y: -150,
  skewY: 7,
  duration: 1,
})
.from('.text-content p', {
  autoAlpha: 0,
  letterSpacing: -10,
  duration: 1,

})
