import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ctaMotion } from './ctaMotion';
import { heroIntro } from './heroIntro';
import { lineReveal } from './lineReveal';
import { mobileMenuMotion } from './mobileMenuMotion';
import { refreshAnimations } from './refreshAnimations';
import { revealOnScroll } from './revealOnScroll';
import { shouldReduceMotion } from './reducedMotion';
import { staggerGroup } from './staggerGroup';

let pluginsRegistered = false;

function registerPlugins(): void {
  if (pluginsRegistered) {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  pluginsRegistered = true;
}

export function initAnimationSystem(root: ParentNode = document): void {
  if (shouldReduceMotion()) {
    return;
  }

  registerPlugins();
  heroIntro(root);
  lineReveal(root);
  revealOnScroll(root);
  staggerGroup(root);
  ctaMotion(root);
  mobileMenuMotion(root);
  refreshAnimations();
}
