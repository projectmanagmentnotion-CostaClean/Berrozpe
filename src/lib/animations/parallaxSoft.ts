import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isCompactViewport } from './scrollTrigger';

export function parallaxSoft(root: ParentNode = document): void {
  if (isCompactViewport()) {
    return;
  }

  const elements = root.querySelectorAll<HTMLElement>('[data-animate="soft-parallax"]');

  elements.forEach((element) => {
    if (element.dataset.motionReady === 'true') {
      return;
    }

    element.dataset.motionReady = 'true';

    gsap.fromTo(
      element,
      { yPercent: -2, scale: 1.04 },
      {
        yPercent: 2,
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      },
    );
  });
}
