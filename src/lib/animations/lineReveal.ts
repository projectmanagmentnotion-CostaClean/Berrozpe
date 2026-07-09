import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getBidirectionalScrollTrigger } from './scrollTrigger';

export function lineReveal(root: ParentNode = document): void {
  const labels = root.querySelectorAll<HTMLElement>('[data-animate="line"]');

  labels.forEach((label) => {
    if (label.dataset.motionReady === 'true') {
      return;
    }

    const line = label.querySelector<HTMLElement>('span');

    if (!line) {
      return;
    }

    label.dataset.motionReady = 'true';

    gsap.fromTo(
      line,
      { scaleX: 0, transformOrigin: 'left center' },
      {
        scaleX: 1,
        duration: 0.55,
        ease: 'power2.out',
        scrollTrigger: getBidirectionalScrollTrigger(label, 'top 90%'),
      },
    );
  });
}
