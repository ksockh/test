$(window).on("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("#container section").forEach((section, i) => {
    const sectionHeight = section.offsetHeight;

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + (sectionHeight + 500),
        pin: true,
        pinSpacing: i === 3 ? true : false, // 마지막 섹션만 spacing 줌
        markers: true,
      },
    });
  });

  ScrollTrigger.refresh();
});
