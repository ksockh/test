$(function () {
  gsap.utils.toArray("#container section").forEach((section, i) => {
    console.log(i);
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        pin: true,
        // pinSpacing: false,
        pinSpacing: i === 3 ? true : false,
        markers: true,
      },
    });
  });
});
