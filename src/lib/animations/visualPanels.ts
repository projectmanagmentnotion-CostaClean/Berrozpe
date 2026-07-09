import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getBidirectionalScrollTrigger } from './scrollTrigger';

export function visualPanels(root: ParentNode = document): void {
  const panels = root.querySelectorAll<HTMLElement>('[data-animate="visual-panel"]');

  panels.forEach((panel) => {
    if (panel.dataset.motionReady === 'true') {
      return;
    }

    panel.dataset.motionReady = 'true';

    gsap.fromTo(
      panel,
      { autoAlpha: 0, y: 20, scale: 0.985 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.74,
        ease: 'power2.out',
        scrollTrigger: getBidirectionalScrollTrigger(panel, 'top 88%'),
      },
    );
  });
}
