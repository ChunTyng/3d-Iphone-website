import { create } from 'zustand';
import { type TStores, type THighlightSlides } from '../types/types';
import { videos } from '../constants';

const { smallHeroVideo, heroVideo } = videos;

const useCounterStore = create<TStores>((set) => ({
  videoSrc:
    typeof window !== 'undefined' && window.innerWidth < 640
      ? smallHeroVideo
      : heroVideo,

  setVideoSrc: () =>
    set(() => ({
      videoSrc:
        typeof window !== 'undefined' && window.innerWidth < 640
          ? smallHeroVideo
          : heroVideo,
    })),

  heightClass: 'h-[calc(100vh-60px)]',

  setHeightClass: () =>
    set(() => {
      if (typeof window === 'undefined') {
        return { heightClass: 'h-[calc(100vh-60px)]' };
      }

      const height = window.innerHeight;
      const width = window.innerWidth;

      if (height > 1000) {
        if (width > 768) {
          return { heightClass: 'h-[calc(100vh-700px)]' };
        }
        return { heightClass: 'h-[calc(100vh-200px)]' };
      }

      if (height < 400) {
        return { heightClass: 'h-[calc(100vh+20vh)]' };
      }

      if (height > 400) {
        return { heightClass: 'h-[calc(100vh+25vh)]' };
      }

      if (height < 321) {
        return { heightClass: 'h-[calc(100vh+40vh)]' };
      }

      return { heightClass: 'h-[calc(100vh-60px)]' };
    }),

  slides: [],
  setSlides: (mySlide: THighlightSlides[] | undefined) =>
    set({ slides: mySlide }),
}));

export default useCounterStore;
