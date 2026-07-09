export function canUseDom(): boolean {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

export function prefersReducedMotion(): boolean {
  if (!canUseDom() || typeof window.matchMedia !== 'function') {
    return true;
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function shouldReduceMotion(): boolean {
  return !canUseDom() || prefersReducedMotion();
}
