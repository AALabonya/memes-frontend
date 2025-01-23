"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../ui/card";

import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";

const Hottest = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  const items = [
    {
      name: "VIRTUAL",
      change: "0.59%",
      price: "$2.74",
      marketCap: "$1.7B",
      bgClass: "bg-gradient-to-r from-lime-300 to-green-500",
      image: "/image1.png",
    },
    {
      name: "AI16Z",
      verified: true,
      change: "11.59%",
      price: "$0.0873",
      marketCap: "$962K",
      bgClass: "bg-pink-300",
      image: "/image2.png",
    },
    {
      name: "TICKER3",
      verified: true,
      price: "$0.1232",
      marketCap: "$701M",
      bgClass: "bg-gray-900",
      className: "",
      image: "/image3.png",
    },
    {
      name: "TICKER4",
      price: "$25.51",
      marketCap: "$988",
      bgClass: "bg-pink-500",
      className: "",
      image: "/image4.png",
    },
  ];

  return (
    <div className="flex justify-center md:pt-0 pt-[20px]">
      {/* Trending/Hottest Section */}
      <div className="md:mb-12 mb-5 md:py-0 w-full max-w-[1055px]">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {isClient && window.innerWidth >= 768 ? "Hottest" : "Trending"}
        </h2>
        <div className="sm:hidden">
          <Swiper
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
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <Card
                  key={i}
                  className={`overflow-hidden ${item.className || ""}`}
                >
                  {/* Image inside the card */}
                  <div className="w-full md:h-48">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full rounded-t-lg"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center mr-5">
                        <div className="font-medium text-[14px]">
                          {item.name}
                        </div>
                        {item.verified && (
                          <div className="text-blue-500 text-[14px]">
                            <Image
                              width={30}
                              height={60}
                              src="/verified-icon.png"
                              alt="verified-icon"
                              className=""
                            />
                          </div>
                        )}
                      </div>
                      {item.change && (
                        <span
                          className={`flex items-center text-[14px] ${
                            item.change === "0.59%"
                              ? "text-green-500"
                              : "text-red-500"
                          } mr-7`}
                        >
                          {/* Triangle */}
                          <div
                            className={`w-0 h-0 border-l-[6px] mr-2 border-r-[6px] text-[14px] ${
                              item.change === "0.59%"
                                ? "border-b-[10px] border-transparent border-b-green-500"
                                : "border-t-[10px] border-transparent border-t-red-500"
                            }`}
                          ></div>
                          {item.change}
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-[13px]">Price</p>
                        <p className="font-medium text-[13px]">{item.price}</p>
                      </div>
                      <div>
                        <p className=" font-medium text-[13px]">Market Cap</p>
                        <p className="font-medium text-[13px]">
                          {item.marketCap}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
        <div className="hidden sm:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items?.map((item, i) => (
            <Card key={i} className={`overflow-hidden ${item.className || ""}`}>
              {/* Image inside the card */}
              <div className="w-full h-48">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center mr-5">
                    <div className="font-medium">{item.name}</div>
                    {item.verified && (
                      <div className="text-blue-500">
                        <Image
                          width={30}
                          height={60}
                          src="/verified-icon.png"
                          alt="verified-icon"
                          className=""
                        />
                      </div>
                    )}
                  </div>
                  {item.change && (
                    <span
                      className={`flex items-center ${
                        item.change === "0.59%"
                          ? "text-green-500"
                          : "text-red-500"
                      } mr-7`}
                    >
                      {/* Triangle */}
                      <div
                        className={`w-0 h-0 border-l-[6px] mr-2 border-r-[6px] ${
                          item.change === "0.59%"
                            ? "border-b-[10px] border-transparent border-b-green-500"
                            : "border-t-[10px] border-transparent border-t-red-500"
                        }`}
                      ></div>
                      {item.change}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="font-medium">{item.price}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Market Cap</p>
                    <p className="font-medium">{item.marketCap}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hottest;
