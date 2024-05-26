gsap.registerPlugin(ScrollTrigger);

// window.addEventListener('scroll', () => {
//   const refresh = ScrollTrigger.refresh()
//   if(refresh) console.log('refreshed');
// });

ScrollTrigger.defaults({
  toggleActions: 'play none none reverse',
})

const homeTimeLine = gsap.timeline({
  scrollTrigger:{
    trigger: '.wrapper',
    // endTrigger: '.box3 .col-2 img:nth-child(3)',
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
      // trigger: 'img-container',
      scrub: 1,
      start: 'top',
      end: 'bottom',
      pin: true,
      // pinSpacing: false
    }
})
.from('.left-side', {
    y: 150,
    opacity: 0,
    stagger: {
      amount: .4,
    },
    // delay: 1
})
.from('.right-side', {
  opacity: 0,
  stagger: {
    amount: .4,
  },
  // delay: 1
})
// .to('.right-side',{ scale: 1.2, duration:1, ease: 'ease'})
.to('.wrapper',{
  x: -window.innerWidth,
  duration:3, delay: 1.5, ease: 'ease',
  
})

// // const contactTimeLine = gsap.timeline()
// gsap.to('.wrapper',{
//   x: -(window.innerWidth * 3),
//   duration:3, delay: 1.5, ease: 'ease',
//   scrollTrigger:{
//     // trigger: '.contact-video',
//     // trigger: '.wrapper',
//     startTrigger: '.box3 .col-3 img:last-child',
//     trigger: '.box3 .col-3 img:last-child',
//   start: '300 top',
//   end: '200% bottom',
//   // end: '+=600',
 
//   duration: 3,
//   // delay: 1.5,
//   scrub: 1,
//     pin: true,
//   // pinSpacing: false
//   }
// })
// .to('.img-container', {
//   scale:1,
//   duration: 3,
//   delay: 3,
//   ease: 'ease',

// })
// // .fromTo('.img-container',{
// //   scale: 50,
// //   ease: 'ease',
// //   duration: 3,
// //   delay: 1.5,
// //   scrollTrigger:{
// //     trigger: '.contact-video',
// //     scrub: 1,
// //     end: '100% bottom',
// //     pin: true,
// //   }
// // },{
// //   scale: 1.5,
// //   ease: 'ease',
// //   duration: 3,
// //   scrollTrigger:{
// //     trigger: '.contact-video',
// //     scrub: 1,
// //     end: '100% bottom',
// //   }
// // })
  
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
  gsap.utils.toArray('.col img').forEach(image=>{
    gsap.fromTo(image, {
      opacity: 0,
      yPercent: 20,
     
    },{
      opacity: 1,
      yPercent: 0,
      scrollTrigger: {
        trigger: image,
        end: '100 bottom',
        // end: '-=100',
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
