import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function staggerGroup(root: ParentNode = document): void {
  const groups = root.querySelectorAll<HTMLElement>('[data-animate-group]');

  groups.forEach((group) => {
    if (group.dataset.motionReady === 'true') {
      return;
    }

    const items = Array.from(group.querySelectorAll<HTMLElement>('[data-animate="stagger"]'));

    if (items.length === 0) {
      return;
    }

    group.dataset.motionReady = 'true';

    gsap.fromTo(
      items,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.62,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 82%',
          once: true,
        },
      },
    );
  });
}
