import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, type RefObject } from 'react';
import useCounterStore from '../stores/stores';

export const useTextFadeIn = (
  textFadeInRef: RefObject<HTMLParagraphElement | null>,
) => {
  const { videoSrc } = useCounterStore((state) => state);

  gsap.registerPlugin(useGSAP);

  useGSAP(
    () => {
      if (textFadeInRef.current) {
        gsap.to(textFadeInRef.current, { opacity: 1, duration: 5, delay: 1.5 });
      }
    },
    { scope: textFadeInRef },
  );

  useEffect(() => {
    if (textFadeInRef.current) {
      gsap.killTweensOf(textFadeInRef.current);
      gsap.set(textFadeInRef.current, { opacity: 0 });
      gsap.to(textFadeInRef.current, { opacity: 1, duration: 5, delay: 1.5 });
    }
  }, [videoSrc, textFadeInRef]);
};
