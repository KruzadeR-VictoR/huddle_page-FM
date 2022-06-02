gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  defaults: { duration: 1, opacity: 0, stagger: 0.5 },
});
//navbar
tl.from(".navbar", {
  y: -100,
});
//hero
tl.from(".herlet", {
  y: 100,
  stagger: 0.1,
  ease: "power4",
}).from(".herletImg", {
  y: 100,
  ease: "back",
});

//numbers
tl.from(".numlet", {
  y: 100,
  stagger: 0,
  scrollTrigger: {
    trigger: ".numbers",
    start: "top center",
    end: "top top",
    // markers: true,
    scrub: true,
  },
});
//growth
tl.from(".glet", {
  y: 100,
  scrollTrigger: {
    trigger: ".growth",
    start: "top center",
    end: "top top",
    scrub: true,
  },
});
tl.from(".gletImg", {
  x: 200,
  scrollTrigger: {
    trigger: ".growth",
    start: "top center",
    end: "top top",
    scrub: true,
  },
});
//conversations
tl.from(".clet", {
  y: 100,
  scrollTrigger: {
    trigger: ".conversations",
    start: "top center",
    end: "top top",
    scrub: true,
  },
});
tl.from(".cletImg", {
  x: -200,
  scrollTrigger: {
    trigger: ".conversations",
    start: "top center",
    end: "top top",
    scrub: true,
  },
});

//users
tl.from(".ulet", {
  y: 100,
  scrollTrigger: {
    trigger: ".users",
    start: "top center",
    end: "top top",
    scrub: true,
  },
});
tl.from(".uletImg", {
  x: 200,
  scrollTrigger: {
    trigger: ".conversations",
    start: "top center",
    end: "top top",
    scrub: true,
  },
});

//get Started
tl.from(".gstart", {
  y: 100,
  ease: "power3",
  scrollTrigger: {
    trigger: ".getStarted",
    start: "top center",
    end: "10% top",
    scrub: true,
  },
});

//footer
tl.from(".lft", {
  y: 100,
  stagger: 0,
  scrollTrigger: {
    trigger: "footer",
    start: "top 70%",
    end: "20% center",
    scrub: true,
  },
});
tl.from(".rgt", {
  y: 100,
  stagger: 0,
  scrollTrigger: {
    trigger: "footer",
    start: "top 70%",
    end: "10% center",
    scrub: true,
  },
});
