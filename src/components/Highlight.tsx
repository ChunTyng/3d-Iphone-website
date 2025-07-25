import { useRef } from 'react';
import { Images } from '../constants';
import { useTextMoveUp2 } from '../hooks/useTextMoveUp2';
import VideoCarousel from './VideoCarousel';
import fetchData from '../api/fetchData';

const Highlight = () => {
  const { textMoveUpRef, linksMoveUpRef } = {
    textMoveUpRef: useRef<HTMLParagraphElement>(null),
    linksMoveUpRef: useRef<HTMLParagraphElement>(null),
  };
  fetchData();
  useTextMoveUp2(textMoveUpRef, 1, 1);
  useTextMoveUp2(linksMoveUpRef, 1, 1.5);
  return (
    <section className="w-full h-full overflow-hidden px-10 py-20 sm:py-32 bg-gray-950">
      <div className="mx-auto relative max-w-[1120px]">
        <div className="mb-5 w-full items-end justify-between md:flex">
          <h1
            ref={textMoveUpRef}
            className="text-gray text-3xl mb-5 font-medium opacity-0 md:mb-0 md:text-5xl lg:text-6xl lg:mb-0 translate-Y-20"
          >
            Get the hightlights.
          </h1>
          <div
            ref={linksMoveUpRef}
            className="flex flex-wrap items-end gap-5 opacity-0"
          >
            <p className="text-blue-500 cursor-pointer flex items-center text-xl hover:underline">
              Watch the film
              <img src={Images.watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="text-blue-500 cursor-pointer flex items-center text-xl hover:underline">
              Watch the event
              <img src={Images.rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlight;
