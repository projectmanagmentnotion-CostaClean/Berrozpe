import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getBidirectionalScrollTrigger } from './scrollTrigger';

export function imageReveal(root: ParentNode = document): void {
  const elements = root.querySelectorAll<HTMLElement>('[data-animate="image-reveal"]');

  elements.forEach((element) => {
    if (element.dataset.motionReady === 'true') {
      return;
    }

    element.dataset.motionReady = 'true';

    gsap.fromTo(
      element,
      { autoAlpha: 0, y: 24, clipPath: 'inset(0 0 18% 0 round 2rem)' },
      {
        autoAlpha: 1,
        y: 0,
        clipPath: 'inset(0 0 0% 0 round 2rem)',
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: getBidirectionalScrollTrigger(element, 'top 84%'),
      },
    );
  });
}
