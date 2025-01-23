"use client";

import { Card } from "../ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

const LearnMore = () => {
  const learnItems = [
    { title: "About", image: "/background.png" },
    { title: "Blog", image: "/background.png" },
    { title: "Something Else", image: "/background.png" },
    { title: "TBD", image: "/background.png" },
  ];
  return (
    <div className="flex justify-center">
      {/* Trending/Hottest Section */}
      <div className="mb-12  w-full max-w-[992px]">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Learn more</h2>

        {/* Swiper Container */}
        <div className="sm:hidden">
          <Swiper
            slidesPerView={1} // Show 1 card on small screens
            spaceBetween={32}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2, // Show 2 cards on medium screens (like tablets)
                spaceBetween: 32,
              },
              768: {
                slidesPerView: 3, // Show 3 cards on larger screens
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 4, // Show 4 cards on large screens (desktop)
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
                    <h3 className="text-xl font-medium text-white">
                      {item.title}
                    </h3>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination mt-5"></div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden sm:grid md:grid-cols-4 gap-4">
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
