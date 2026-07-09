import { initAnimationSystem } from '../lib/animations';
import { shouldReduceMotion } from '../lib/animations/reducedMotion';

declare global {
  interface Window {
    __berrozpeAnimationsBooted__?: boolean;
  }
}

function bootAnimations(): void {
  if (window.__berrozpeAnimationsBooted__) {
    return;
  }

  if (shouldReduceMotion()) {
    return;
  }

  window.__berrozpeAnimationsBooted__ = true;
  document.documentElement.dataset.animationsBooted = 'true';
  initAnimationSystem(document);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootAnimations, { once: true });
} else {
  bootAnimations();
}
