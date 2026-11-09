import { gsap } from 'gsap';
import { ctaMotion } from './ctaMotion';
import { heroIntro } from './heroIntro';
import { imageReveal } from './imageReveal';
import { lineReveal } from './lineReveal';
import { mobileMenuMotion } from './mobileMenuMotion';
import { parallaxSoft } from './parallaxSoft';
import { refreshAnimations } from './refreshAnimations';
import { revealOnScroll } from './revealOnScroll';
import { shouldReduceMotion } from './reducedMotion';
import { registerScrollTrigger } from './scrollTrigger';
import { staggerGroup } from './staggerGroup';
import { visualPanels } from './visualPanels';

export function initAnimationSystem(root: ParentNode = document): void {
  if (shouldReduceMotion()) {
    return;
  }

  registerScrollTrigger();
  heroIntro(root);
  lineReveal(root);
  revealOnScroll(root);
  imageReveal(root);
  visualPanels(root);
  parallaxSoft(root);
  staggerGroup(root);
  ctaMotion(root);
  mobileMenuMotion(root);
  refreshAnimations();
}
