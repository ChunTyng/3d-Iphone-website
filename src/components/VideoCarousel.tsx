import { Swiper, SwiperSlide } from 'swiper/react';
import { useQuery } from '@tanstack/react-query';
import createTodoQueryOptions from '../queryOptions/createTodoQueryOptions';
import { Pagination, Autoplay } from 'swiper/modules';
import useCounterStore from '../stores/stores';
import { useEffect, useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideoCarousel = () => {
  const { data, isPending } = useQuery(createTodoQueryOptions());
  const { setSlides } = useCounterStore((state) => state);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const videoRefs = useRef<HTMLVideoElement[]>([]);

  useEffect(() => {
    if (data) {
      setSlides(data);
    }
  }, [data, setSlides]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentIndex) {
        video.play().catch((err) => console.error(err));
      } else {
        const timer = setTimeout(() => {
          video.pause();
          video.currentTime = 0;
        }, 1000);
        timers.push(timer);
      }
    });

    // cleanup
    return () => {
      timers.forEach(clearTimeout);
    };
  }, [currentIndex]);

  if (isPending) return <p>Loading...</p>;
  return (
    <div>
      <main className="shadow-lg shadow-gray-900 rounded-2xl">
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            grabCursor
            slideToClickedSlide
            centeredSlides
            initialSlide={Math.floor(data ? data.length / 2 : 0)}
            slidesPerView={1}
            speed={800}
            autoplay={{
              disableOnInteraction: false,
            }}
            loop
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: { spaceBetween: 40 },
              650: { spaceBetween: 30 },
              1000: { spaceBetween: 20 },
            }}
            onSlideChange={(swiper) => {
              setCurrentIndex(swiper.realIndex);
            }}
            className="rounded-2xl"
          >
            {data?.map((ele, index) => (
              <SwiperSlide
                className="text-white "
                data-swiper-autoplay={ele.videoDuration * 700}
                key={ele.id}
              >
                <div className="relative flex justify-center aspect-video">
                  <video
                    playsInline={true}
                    preload="auto"
                    muted
                    autoPlay={currentIndex === index}
                    className="object-cover w-full rounded-2xl"
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                    }}
                  >
                    <source src={ele.video} />
                  </video>
                  <div className="absolute top-3 left-3 text-xs sm:text-sm md:text:lg lg:text-2xl">
                    {ele.textLists.map((item, index) => {
                      return <p key={index}>{item}</p>;
                    })}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </div>
  );
};

export default VideoCarousel;
