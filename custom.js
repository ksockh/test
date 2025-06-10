$(function () {
  gsap.utils.toArray("#container section").forEach((section, i) => {
    console.log(i);
    const content = section.querySelector(".txtBox");
    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        // end: () => "+=" + content.scrollHeight,
        end: "+=3000",
        pin: true,
        // pinSpacing: false,
        pinSpacing: i === 3 ? true : false,
        markers: true,
      },
    });
  });
});
