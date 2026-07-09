import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let pluginsRegistered = false;

export function registerScrollTrigger(): void {
  if (pluginsRegistered) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
}

export function isCompactViewport(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;
}
