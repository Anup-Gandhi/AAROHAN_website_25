document.addEventListener("DOMContentLoaded", () => {
    const comp = document.getElementById("myImage");
    const video = document.querySelector(".video-background");
    let src = video.currentSrc || video.src;
    console.log(video, src);
    
    /* Make sure the video is 'activated' on iOS */
    function once(el, event, fn, opts) {
      var onceFn = function (e) {
        el.removeEventListener(event, onceFn);
        fn.apply(this, arguments);
      };
      el.addEventListener(event, onceFn, opts);
      return onceFn;
    }
    
    once(document.documentElement, "touchstart", function (e) {
      video.play();
      video.pause();
    });
    gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});

once(video, "loadedmetadata", () => {
  tl.fromTo(
    video,
    {
      currentTime: 0
    },
    {
      currentTime: video.duration || 1
    }
  );
});

/* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
setTimeout(function () {
  if (window["fetch"]) {
    fetch(src)
      .then((response) => response.blob())
      .then((response) => {
        var blobURL = URL.createObjectURL(response);

        var t = video.currentTime;
        once(document.documentElement, "touchstart", function (e) {
          video.play();
          video.pause();
        });

        video.setAttribute("src", blobURL);
        video.currentTime = t + 0.01;
      });
  }
}, 1000);

    // Wait for the image to fully load
    comp.onload = () => {
        const originalWidth = comp.offsetWidth; // Get the original width of the element
        const targetWidth = window.innerWidth * 3.5; // Calculate the target width

        const scaleValue = targetWidth / originalWidth; // Calculate scale

        gsap.to(comp, {
            scale: scaleValue,
            scrollTrigger: {
                trigger: comp,
                start: "center center",
                end: "bottom center", // End when the bottom of the image reaches the center of the viewport
                scrub: true, // Smoothly animate
                // markers: true // Optional: Show markers for debugging
            }
        });
    };

    // If the image is already loaded before this event
    if (comp.complete) {
        comp.onload();
    }
});

gsap.fromTo("#comp1", {
    scale: 0, // Start at scale 0
}, {
    scale: 1.7, // Animate to scale 1.7
    scrollTrigger: {
        trigger: "#comp1",
        start: "bottom bottom-=25%", 
        end: "bottom top",
        scrub: true, // Smoothly animate
        onEnter: () => gsap.to("#comp1", { display: "grid" }),
        // markers: true // Optional: Show markers for debugging
    }
});

gsap.fromTo("#comp2", {
    scale: 0, // Start at scale 0
}, {
    scale: 1.5, // Animate to scale 1.5
    scrollTrigger: {
        trigger: "#comp2",
        start: "bottom bottom-=25%", 
        end: "bottom-=25 top",
        scrub: true, // Smoothly animate
        onEnter: () => gsap.to("#comp2", { display: "grid" }),
        // markers: true // Optional: Show markers for debugging
    }
});

gsap.fromTo("#comp3", {
    scale: 0, // Start at scale 0
}, {
    scale: 1, // Animate to scale 1
    scrollTrigger: {
        trigger: "#comp3",
        start: "bottom bottom-=25%", 
        end: "bottom center",
        scrub: true, // Smoothly animate
        onEnter: () => gsap.to("#comp3", { display: "grid" }),
        // markers: true // Optional: Show markers for debugging
    }
});
