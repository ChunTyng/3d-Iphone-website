import useCounterStore from '../stores/stores';
import { useDiffVideo } from '../hooks/useDiffVideo';
import { useRef } from 'react';
import { useTextFadeIn } from '../hooks/useTextFadeIn';
import { useTextMoveUp } from '../hooks/useTextMoveUp';
import { clcx } from '../lib/clcx';

const Hero = () => {
  const { videoSrc } = useCounterStore((state) => state);
  const { heightClass } = useCounterStore((state) => state);

  //#region Pass ref to animation hooks
  const { textFadeInRef, textMoveUpRef } = {
    textFadeInRef: useRef<HTMLParagraphElement>(null),
    textMoveUpRef: useRef<HTMLParagraphElement>(null),
  };
  useDiffVideo();
  useTextFadeIn(textFadeInRef);
  useTextMoveUp(textMoveUpRef);
  //#endregion

  return (
    //#region default
    // <div className="w-full bg-black relative h-[calc(100vh-60px)]">
    //   <div className="h-5/6 w-full items-center justify-center flex-col">
    //     <p
    //       ref={textFadeInRef}
    //       className={
    //         'text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10 '
    //       }
    //     >
    //       Iphone 15 Pro
    //     </p>
    //     <div className="md:w-10/12 w-9/12 mx-auto">
    //       <video autoPlay playsInline muted key={videoSrc}>
    //         <source src={videoSrc} type="video/mp4" />
    //         <p className="text-5xl text-white">
    //           Your browser does not support the video tag.
    //         </p>
    //       </video>
    //     </div>
    //   </div>

    //   <div
    //     ref={textMoveUpRef}
    //     className="flex flex-col items-center opacity-0 translate-y-20"
    //   >
    //     <a href="#highlights" className="btn">
    //       Buy
    //     </a>
    //     <p className="font-normal text-xl text-center">
    //       From $199/month or $999
    //     </p>
    //   </div>
    // </div>
    //#endregion

    // myMethod
    <div
      className={clcx(
        'w-full bg-black relative height--1280:flex height--1280:items-center height--1280:justify-center',
        heightClass,
      )}
    >
      <div className="flex flex-col items-center justify-center  ">
        <div className="w-full">
          <p
            ref={textFadeInRef}
            className={
              'text-center font-semibold text-3xl text-gray-100 opacity-0 max-md:mb-10 '
            }
          >
            Iphone 100 Pro
          </p>
          <div className="mx-auto w-9/12 md:w-10/12">
            <video autoPlay playsInline muted key={videoSrc}>
              <source src={videoSrc} type="video/mp4" />
              <p className="text-5xl text-white">
                Your browser does not support the video tag.
              </p>
            </video>
          </div>
        </div>

        <div
          ref={textMoveUpRef}
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#highlights" className="btn">
            Buy
          </a>
          <p className="font-normal text-2xl text-center">
            From $199/month or $999
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
