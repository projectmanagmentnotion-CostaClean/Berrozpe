import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    if (block.dataset.motionReady === 'true') {
      bindInteractiveMotion(block);
      return;
    }

    block.dataset.motionReady = 'true';
    bindInteractiveMotion(block);

    gsap.fromTo(
      block,
      { autoAlpha: 0, y: 24 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.64,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: block,
          start: 'top 84%',
          once: true,
        },
      },
    );
  });
}
