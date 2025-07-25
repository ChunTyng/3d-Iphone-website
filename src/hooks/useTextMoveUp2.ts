import { useEffect, type RefObject } from 'react';
import useCounterStore from '../stores/stores';
import gsap from 'gsap';

export const useTextMoveUp2 = (
  textMoveUpRef: RefObject<HTMLParagraphElement | null>,
  duration: number,
  delay: number,
) => {
  const { videoSrc } = useCounterStore((state) => state);

  useEffect(() => {
    const element = textMoveUpRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.killTweensOf(element);
          gsap.to(element, {
            opacity: 1,
            y: 0,
            duration: duration,
            delay: delay,
          });
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [textMoveUpRef, duration, delay, videoSrc]);
};
