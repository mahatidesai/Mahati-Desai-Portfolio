import Lenis from 'lenis';

export const initSmoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,       // smoothness
    easing: (t) => 1 - Math.pow(1 - t, 3),
    smooth: true,
    smoothTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenis;
};
