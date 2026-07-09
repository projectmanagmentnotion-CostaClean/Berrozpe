import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let pluginsRegistered = false;
export const BIDIRECTIONAL_TOGGLE_ACTIONS = 'play reverse play reverse';

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

export function getBidirectionalScrollTrigger(trigger: Element, start: string, end?: string) {
  return {
    trigger,
    start,
    end,
    toggleActions: BIDIRECTIONAL_TOGGLE_ACTIONS,
    invalidateOnRefresh: true,
  };
}
