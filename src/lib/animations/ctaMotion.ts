import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getBidirectionalScrollTrigger } from './scrollTrigger';

function bindInteractiveMotion(container: HTMLElement): void {
  const controls = Array.from(container.querySelectorAll<HTMLElement>('a, button'));

  controls.forEach((control) => {
    if (control.dataset.motionInteractive === 'true') {
      return;
    }

    control.dataset.motionInteractive = 'true';

    const enter = () => gsap.to(control, { y: -2, duration: 0.18, ease: 'power2.out' });
    const leave = () => gsap.to(control, { y: 0, duration: 0.18, ease: 'power2.out' });

    control.addEventListener('pointerenter', enter);
    control.addEventListener('pointerleave', leave);
    control.addEventListener('focus', enter);
    control.addEventListener('blur', leave);
  });
}

export function ctaMotion(root: ParentNode = document): void {
  const blocks = root.querySelectorAll<HTMLElement>('[data-animate="cta"]');

  blocks.forEach((block) => {
    const insideHero = block.closest('[data-animate="hero"]');

    if (block.dataset.motionReady === 'true') {
      bindInteractiveMotion(block);
      return;
    }

    block.dataset.motionReady = 'true';
    bindInteractiveMotion(block);

    if (insideHero) {
      return;
    }

    gsap.fromTo(
      block,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.64,
        ease: 'power2.out',
        scrollTrigger: getBidirectionalScrollTrigger(block, 'top 84%'),
      },
    );
  });
}
