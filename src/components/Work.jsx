"use client";

import "swiper/css/autoplay";

import Image from "next/image";
import image1 from "@/assets/digitalCard.png";
import image2 from "@/assets/mobile.png";
import image3 from "@/assets/clothing.png";
import image4 from "@/assets/task.png";
import image5 from "@/assets/ecommerce.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowOutward } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Work = () => {
  return (
    <div className="w-full md:w-11/12   mx-auto py-10  text-white">
      <h1 className="text-2xl py-5">See My Work</h1>
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide on screens >= 640px (mobile)
          },
          1024: {
            slidesPerView: 3, // 2 slides on screens >= 1024px (desktop)
          },
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <span className="text-black mt-3"> . </span>
        <SwiperSlide>
          <div className="relative mb-3 px-3 md:px-0  rounded-3xl">
            <Image
              alt="digital"
              className="rounded-3xl w-11/12 md:w-11/12 "
              src={image1}
            />
            <div className="absolute bottom-0 left-0 backdrop-blur-md py-5 bg-black/30 w-11/12 md:w-11/12  px-3">
              <h1 className="text-xl md:text-xl pb-1">
                Digital Card Landing Page
              </h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 font-light">
                  <span className="bg-[#00980F] px-2 py-0.2 rounded-xl inline-block">
                    Landing Page
                  </span>
                  <span className="bg-[#00980F] px-2 py-0.5 rounded-xl inline-block">
                    Website Design
                  </span>
                </div>
                <span className="bg-white h-12 w-12 mt-[-28px] flex justify-center items-center text-4xl rounded-full">
                  <MdArrowOutward className="text-[#00980F]" />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative px-3 md:px-0  rounded-3xl">
            <Image
              alt="digital"
              className="rounded-3xl w-11/12 md:w-11/12 "
              src={image2}
            />
            <div className="absolute bottom-0 left-0 backdrop-blur-md py-5 bg-black/30 w-11/12 md:w-11/12  px-2 md:px-3">
              <h1 className="text-xl md:text-xl pb-1">
                Mobile Banking App Design
              </h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 font-light">
                  <span className="bg-[#00980F] px-2 py-0.2 rounded-xl inline-block">
                    Landing Page
                  </span>
                  <span className="bg-[#00980F] px-2 py-0.5 rounded-xl inline-block">
                    Website Design
                  </span>
                </div>
                <span className="bg-white h-12 w-12 mt-[-28px] flex justify-center items-center text-4xl rounded-full">
                  <MdArrowOutward className="text-[#00980F]" />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative  px-3 md:px-0 rounded-3xl">
            <Image
              alt="digital"
              className="rounded-3xl w-11/12 md:w-11/12 "
              src={image3}
            />
            <div className="absolute bottom-0 left-0 backdrop-blur-md py-5 bg-black/30 w-11/12 md:w-11/12  px-2 md:px-3">
              <h1 className="text-xl md:text-xl pb-1">Clothing Landing Page</h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 font-light">
                  <span className="bg-[#00980F] px-2 py-0.3 rounded-xl inline-block">
                    Landing Page
                  </span>
                  <span className="bg-[#00980F] px-2 py-0.5 rounded-xl inline-block">
                    Website Design
                  </span>
                </div>
                <span className="bg-white h-12 w-12 mt-[-28px] flex justify-center items-center text-4xl rounded-full">
                  <MdArrowOutward className="text-[#00980F]" />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative pl-4 md:pl-0   rounded-3xl">
            <Image
              alt="digital"
              className="rounded-3xl w-11/12 md:w-11/12 "
              src={image4}
            />
            <div className="absolute bottom-0 left-0 backdrop-blur-md py-5 bg-black/30 w-11/12 md:w-11/12  mx-4 md:mx-0 px-2 md:px-3">
              <h1 className="text-xl md:text-xl pb-1">Task Manager App</h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 font-light">
                  <span className="bg-[#00980F] px-2 py-0.2 rounded-xl inline-block">
                    Landing Page
                  </span>
                  <span className="bg-[#00980F] px-2 py-0.2 rounded-xl inline-block">
                    Website Design
                  </span>
                </div>
                <span className="bg-white h-12 w-12 mt-[-28px] flex justify-center items-center text-4xl rounded-full">
                  <MdArrowOutward className="text-[#00980F]" />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative px-3 md:px-0  rounded-3xl">
            <Image
              alt="digital"
              className="rounded-3xl w-11/12 md:w-11/12 "
              src={image5}
            />
            <div className="absolute bottom-0 left-0 backdrop-blur-md py-5 bg-black/30 w-11/12 md:w-11/12  mx-3 md:mx-0  px-3">
              <h1 className="text-xl md:text-xl pb-1">E-Commerce Dashboard</h1>
              <div className="flex justify-between items-center">
                <div className="flex gap-3 font-light">
                  <span className="bg-[#00980F] px-2 py-0.2 rounded-xl inline-block">
                    Landing Page
                  </span>
                  <span className="bg-[#00980F] px-2 py-0.2 rounded-xl inline-block">
                    Website Design
                  </span>
                </div>
                <span className="bg-white h-12 w-12 mt-[-28px] flex justify-center items-center text-4xl rounded-full">
                  <MdArrowOutward className="text-[#00980F]" />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Work;
