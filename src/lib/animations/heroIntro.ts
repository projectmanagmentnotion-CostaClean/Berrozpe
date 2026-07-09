import { gsap } from 'gsap';
import { getBidirectionalScrollTrigger } from './scrollTrigger';

export function heroIntro(root: ParentNode = document): void {
  const heroes = root.querySelectorAll<HTMLElement>('[data-animate="hero"]');

  heroes.forEach((hero) => {
    if (hero.dataset.motionReady === 'true') {
      return;
    }

    hero.dataset.motionReady = 'true';

    const label = hero.querySelector<HTMLElement>('[data-animate="line"]');
    const title = hero.querySelector<HTMLElement>('h1, h2');
    const body = hero.querySelector<HTMLElement>('p');
    const cta = hero.querySelector<HTMLElement>('[data-animate="cta"]');

    const timeline = gsap.timeline({
      scrollTrigger: getBidirectionalScrollTrigger(hero, 'top 88%'),
      defaults: {
        duration: 0.72,
        ease: 'power3.out',
      },
    });

    if (label) {
      timeline.fromTo(label, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0 }, 0);
    }

    if (title) {
      timeline.fromTo(
        title,
        { autoAlpha: 0, y: 32 },
        { autoAlpha: 1, y: 0, duration: 0.96 },
        label ? 0.08 : 0,
      );
    }

    if (body) {
      timeline.fromTo(body, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0 }, 0.18);
    }

    if (cta) {
      timeline.fromTo(cta, { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0 }, 0.3);
    }
  });
}
