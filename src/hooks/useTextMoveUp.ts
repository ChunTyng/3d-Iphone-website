import { useEffect, type RefObject } from 'react';
import useCounterStore from '../stores/stores';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export const useTextMoveUp = (
  textMoveUpRef: RefObject<HTMLParagraphElement | null>,
) => {
  const { videoSrc } = useCounterStore((state) => state);

  gsap.registerPlugin(useGSAP);

  const delayInSmallDevice = window.innerWidth < 640 ? 2.5 : 1.5;
  const translateyInSmallDevice =
    window.innerHeight < 400
      ? '-1.5vh'
      : window.innerHeight < 800
      ? '-3vh'
      : '0';
  useGSAP(
    () => {
      if (textMoveUpRef.current) {
        gsap.to(textMoveUpRef.current, {
          opacity: 1,
          y: translateyInSmallDevice,
          duration: 1,
          delay: delayInSmallDevice,
        });
      }
    },
    { scope: textMoveUpRef },
  );

  useEffect(() => {
    if (textMoveUpRef.current) {
      gsap.killTweensOf(textMoveUpRef.current);
      gsap.set(textMoveUpRef.current, { opacity: 0, y: 20 });
      gsap.to(textMoveUpRef.current, {
        opacity: 1,
        y: translateyInSmallDevice,
        duration: 1,
        delay: delayInSmallDevice,
      });
    }
  }, [videoSrc, textMoveUpRef, delayInSmallDevice, translateyInSmallDevice]);
};
