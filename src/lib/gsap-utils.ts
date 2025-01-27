import gsap from "gsap";

export const fadeInUp = (element: string | Element) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
  });
};

export const staggerFadeIn = (elements: string | Element[], stagger = 0.2) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    stagger,
    duration: 0.8,
    ease: "power2.out"
  });
};