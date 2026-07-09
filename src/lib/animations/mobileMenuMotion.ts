import { gsap } from 'gsap';

function animateOpen(details: HTMLDetailsElement, panel: HTMLElement): void {
  details.dataset.motionState = 'opening';
  panel.style.overflow = 'hidden';
  gsap.killTweensOf(panel);
  gsap.fromTo(
    panel,
    { autoAlpha: 0, y: -12, height: 0 },
    {
      autoAlpha: 1,
      y: 0,
      height: panel.scrollHeight,
      duration: 0.32,
      ease: 'power2.out',
      onComplete: () => {
        panel.style.height = 'auto';
        panel.style.overflow = '';
        details.dataset.motionState = 'open';
      },
    },
  );
}

function animateClose(details: HTMLDetailsElement, panel: HTMLElement): void {
  details.dataset.motionState = 'closing';
  panel.style.overflow = 'hidden';
  gsap.killTweensOf(panel);
  gsap.to(panel, {
    autoAlpha: 0,
    y: -10,
    height: 0,
    duration: 0.24,
    ease: 'power2.inOut',
    onComplete: () => {
      details.open = false;
      panel.style.height = 'auto';
      panel.style.overflow = '';
      gsap.set(panel, { clearProps: 'all' });
      details.dataset.motionState = 'closed';
    },
  });
}

export function mobileMenuMotion(root: ParentNode = document): void {
  const menus = root.querySelectorAll<HTMLDetailsElement>('details[data-mobile-menu]');

  menus.forEach((details) => {
    if (details.dataset.motionReady === 'true') {
      return;
    }

    const summary = details.querySelector<HTMLElement>('summary');
    const panel = details.querySelector<HTMLElement>('[data-mobile-menu-panel]');

    if (!summary || !panel) {
      return;
    }

    details.dataset.motionReady = 'true';
    details.dataset.motionState = details.open ? 'open' : 'closed';

    summary.addEventListener('click', (event) => {
      if (details.open && details.dataset.motionState !== 'closing') {
        event.preventDefault();
        animateClose(details, panel);
      }
    });

    details.addEventListener('toggle', () => {
      if (details.open && details.dataset.motionState !== 'opening') {
        animateOpen(details, panel);
      }
    });
  });
}
