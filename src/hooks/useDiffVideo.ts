import { useEffect } from 'react';
import useCounterStore from '../stores/stores';

export const useDiffVideo = () => {
  const { setVideoSrc } = useCounterStore((state) => state);
  const { setHeightClass } = useCounterStore((state) => state);

  useEffect(() => {
    const handleResize = () => {
      setVideoSrc();
      setHeightClass();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setVideoSrc, setHeightClass]);
};
