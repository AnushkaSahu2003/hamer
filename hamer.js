gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


var time = gsap.timeline()
time.from("#black",{
    x:"120",
    duration:0.3,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 60%",
// markers:true,
        end: "top 15%",
        scrub: 1,
    }
})
time.from("#white",{
    x:"-120",
    duration:0.3,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 60%",
// markers:true,
        end: "top 15%",
        scrub: 1,
    }
})
time.from("#content",{
    y:"150",
    duration:0.1,
    opcity:0,
    stragger:0.8,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 45%",
// markers:true,
        end: "top -5%",
        scrub: 2,
    }
})
time.from(".text h3",{
    y:"150",
    duration:0.1,
    opcity:0,
    stragger:0.8,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 45%",
// markers:true,
        end: "top -5%",
        scrub: 2,
    }
})
time.from(".text i ",{
    x:"-120",
    duration:0.2,
    opcity:0,
    stragger:0.8,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top 45%",
// markers:true,
        end: "top -5%",
        scrub: 3,
    }
})
time.from("#page2 button ",{
    y:"-40",
    height:"0%",
    duration:0.2,
    opcity:0,
    stragger:0.8,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top -38%",
// markers:true,
scrub:3,
        end: "top -5%",
        
    }
})
time.from("#page3 .container ",{
x:"102",
    y:"80",
    height:"0%",
    duration:0.2,
    opcity:0,
    stragger:0.2,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 85%",
// markers:true,
scrub:2,
        end: "top 70%",
        
    }
})
time.from("#page3 h1",{
x:"-105",

    
    duration:0.3,
    opcity:1,
    // stragger:0.2,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 20%",
// markers:true,
scrub:2,
        end: "top -18%",
        
    }
})
time.from("#page3 #whitetwo,#page3 img",{
x:"170",

 
    duration:0.3,
    opcity:1,
    
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 22%",
// markers:true,
scrub:2,
        end: "top -25%",
        
    }
})


time.from("#page4 #blacktwo",{
y:"-90",
duration:0.1,
opcity:1,
scrollTrigger:{
    scroller:"#main",
    trigger:"#page4",
    // markers:true,
    start:"top 90%",
    end:"top -5%",
    scrub:1,
    // pin:true,
}
})
time.from("#page4",{
    y:"90",
    duration:0.1,
    opacity:1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page4",
        // markers:true,
        start:"top 90%",
        end:"top -5%",
        scrub:1,
    }
})
time.from("#page4 h2",{
    y:-40,
    opacity:1,
duration:0.1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page4",
        // markers:true,
        start:"top 70%",
        end:"top -5%",
        scrub:1,
    }
})
time.from("#page4 h1,#page4 h4",{
    x:-120,
    duration:0.1,
    opacity:0,
    stragger:0.1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page4",
        // markers:true,
        start:"top 35%",
        end:"top 13%",
        scrub:1,
    }

})
time.from("#page4 h3 ,#page4 h5",{
    x:120,
    duration:0.1,
    opacity:0,
    stragger:0.1,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page4",
        // markers:true,
        start:"top 35%",
        end:"top 7%",
        scrub:1,
    }

})


time.to("#page5 svg",{
    scale:7,
    duration:1,
    stragger:2,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page5",
        start:"top top",
       
        scrub:7,
        pin:true,
    //    markers:true,
    },
   
})
time.from("#page6 img ,#page6 #two ,#page6 #three ,#page6 #four",{
   y:150,
  
    duration:0.3,
    stragger:3,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page6",
        start:"top 60%",
       end:"top 10%",
        scrub:1,
       
    //    markers:true,
    },
   
})

time.from("#page7 #green ,#page7 h2,#page7 h5 ",{
   x:-450,

  opacity:0,
    duration:0.3,
    stragger:2,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page7",
        start:"top 40%",
       end:"top 5%",
        scrub:1,
       
    //    markers:true,
    },
   
})
time.from("#page7 h3,#page7 h4 ,#page7 h6  ",{
   x:350,

  opacity:0,
    duration:0.3,
    stragger:2,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page7",
        start:"top 40%",
       end:"top 5%",
        scrub:1,
       
    //    markers:true,
    },
   
})



var menu = document.querySelector("#navbar h3")
var full = document.querySelector("#full-scr")
var flag = 0
menu.addEventListener("click", function () {
    if (flag == 0){

        menu.innerHTML = '<i class="ri-close-line"></i>'
        full.style.top = 0;
        flag = 1
        
    }else {
        menu.innerHTML = '<i class="ri-menu-add-line"></i> '
        full.style.top = "-100%"
        flag = 0
    }
})

