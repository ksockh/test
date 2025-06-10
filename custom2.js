$(window).on("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("#container section").forEach((section, i) => {
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        // end: "bottom top",
        end: "bottom+=100 top",
        pin: true,
        pinSpacing: i === 3 ? true : false, // 마지막 섹션만 spacing 줌
        markers: true,
      },
    });
  });

  ScrollTrigger.refresh();
});
