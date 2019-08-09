import { TimelineMax as Timeline, Power1 } from "gsap";

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const header = node.querySelector(".header");
  const contentItem = node.querySelectorAll(".content-item");

  timeline
    .from(node, 0, { display: "none", autoAlpha: 0, delay })
    .from(header, 0.15, { display: "none", autoAlpha: 0, delay, ease: Power1.easeInOut })
    .staggerFrom(
      contentItem,
      0.375,
      { autoAlpha: 0, x: -25, delay: 0.15, ease: Power1.easeOut },
      0.125
    );

  return timeline;
};

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5;
  let timeline;

  timeline = getHomeTimeline(node, delay);

  window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
};

export const exit = node => {
  const timeline = new Timeline({ paused: true });

  timeline.to(node, 0.15, { autoAlpha: 0, ease: Power1.easeOut });
  timeline.play();
};
