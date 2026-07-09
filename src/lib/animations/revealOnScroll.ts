import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getBidirectionalScrollTrigger } from './scrollTrigger';

export function revealOnScroll(root: ParentNode = document): void {
  const sections = root.querySelectorAll<HTMLElement>('[data-animate="reveal"]');

  sections.forEach((section) => {
    if (section.dataset.motionReady === 'true') {
      return;
    }

    section.dataset.motionReady = 'true';

    gsap.fromTo(
      section,
      { autoAlpha: 0, y: 28 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.72,
        ease: 'power2.out',
        scrollTrigger: getBidirectionalScrollTrigger(section, 'top 84%'),
      },
    );
  });
}
