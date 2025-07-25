type TVideo = {
  videoSrc: string;
  setVideoSrc: () => void;
};

type THeightClass = {
  heightClass: string;
  setHeightClass: () => void;
};

export type THighlightSlides = {
  id: number;
  textLists: string[];
  video: string;
  videoDuration: number;
};

export type TSwiperSlides = {
  slides: THighlightSlides[];
  setSlides: (mySlide: THighlightSlides[] | undefined) => void;
};

export type TStores = TVideo & THeightClass & TSwiperSlides;
