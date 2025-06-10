$(window).on("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("#container section").forEach((section, i) => {
    const content = section.querySelector(".cloneWrap"); // ✅ 내부 콘텐츠 기준
    const contentHeight = content.scrollHeight; // ✅ 실제 내용 전체 높이

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + (contentHeight + 500),
        pin: true,
        pinSpacing: i === 3 ? true : false, // 마지막 섹션만 spacing 줌
        markers: true,
      },
    });
  });

  ScrollTrigger.refresh();
});
