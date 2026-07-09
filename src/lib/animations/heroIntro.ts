import { gsap } from 'gsap';

export function heroIntro(root: ParentNode = document): void {
  const heroes = root.querySelectorAll<HTMLElement>('[data-animate="hero"]');

  heroes.forEach((hero) => {
    const label = hero.querySelector<HTMLElement>('[data-animate="line"]');
    const title = hero.querySelector<HTMLElement>('h1, h2');
    const body = hero.querySelector<HTMLElement>('p');
    const cta = hero.querySelector<HTMLElement>('[data-animate="cta"]');
    const staggerItems = Array.from(hero.querySelectorAll<HTMLElement>('[data-animate="stagger"]'));

    const timeline = gsap.timeline({
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

    if (staggerItems.length > 0) {
      timeline.fromTo(
        staggerItems,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.6 },
        0.22,
      );
    }
  });
}
