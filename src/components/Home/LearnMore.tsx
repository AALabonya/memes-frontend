"use client";

import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { SwiperSlide, Swiper as SwiperWraper } from "swiper/react";
import { Card } from "../ui/card";

const LearnMore = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const learnItems = [
    { title: "About", image: "/background.png" },
    { title: "Blog", image: "/background.png" },
    { title: "Something Else", image: "/background.png" },
    { title: "TBD", image: "/background.png" },
  ];

  return (
    <div className="flex justify-center md:mb-24 mb-4 px-0 md:px-24 lg:px-0">
      {/* Trending/Hottest Section */}
      <div className="mb:mb-12 md:py-0 w-full max-w-[1055px]">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Learn More</h2>

        {/* Swiper for mobile view */}
        <div className="relative sm:hidden">
          <SwiperWraper
            slidesPerView={1}
            spaceBetween={16}
            loop={true}
            initialSlide={0}
            centeredSlides={false}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {learnItems?.map((item, i) => (
              <SwiperSlide key={i}>
                <Card
                  className="overflow-hidden"
                  style={{
                    width: "197px",
                    borderRadius: "12px",
                    background: `
                      radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.07) 0%, rgba(0, 0, 0, 0.35) 100%),
                      url(${item.image}) lightgray 50% / cover no-repeat`,
                  }}
                >
                  <div className="p-6 flex justify-center items-center">
                    <h3 className="text-xl font-medium text-white">
                      {item.title}
                    </h3>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </SwiperWraper>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {learnItems?.map((item, i) => (
            <Card
              key={i}
              className="overflow-hidden"
              style={{
                width: "237px",
                borderRadius: "12px",
                background: `
                  radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.07) 0%, rgba(0, 0, 0, 0.35) 100%),
                  url(${item.image}) lightgray 50% / cover no-repeat`,
              }}
            >
              <div className="p-6 flex justify-center items-center">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
