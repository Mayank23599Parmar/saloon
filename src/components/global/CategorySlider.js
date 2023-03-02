import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Image from 'next/image';

const CETEGORY_SLIDER = [
    {
        image: "/images/list/1.png",
        price: "120",
        category: "saloon"
    },
    {
        image: "/images/list/2.png",
        price: "120",
        category: "saloon"
    },
    {
        image: "/images/list/3.png",
        price: "120",
        category: "saloon"
    },
    {
        image: "/images/list/4.png",
        price: "120",
        category: "saloon"
    },
    {
        image: "/images/list/5.png",
        price: "120",
        category: "saloon"
    }
    , {
        image: "/images/list/6.png",
        price: "120",
        category: "saloon"
    }
    ,
    {
        image: "/images/list/7.png",
        price: "120",
        category: "saloon"
    }
    , {
        image: "/images/list/8.png",
        price: "120",
        category: "saloon"
    }
    ,
    {
        image: "/images/list/9.png",
        price: "120",
        category: "saloon"
    }
]
export default function CategorySlider() {
    return (
        <div className='category-slider relative'>
            <button id='category-prev' className={"z-10 absolute top-1/2 -translate-y-1/2 w-7 h-7 md:w-9 md:h-9 -left-1 md:-left-5 bg-white rounded-full text-xs md:text-base"}><i className="fa fa-chevron-left text-xs leading-9" ></i></button>
            <Swiper
                slidesPerView={2}
                loop={true}
                spaceBetween={20}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 2000 }}
                navigation={{
                    prevEl: "#category-prev",
                    nextEl: "#category-next",
                }}
                breakpoints={{
                    // when window width is >= 768px

                    768: {
                        spaceBetween: 20,
                        slidesPerView: 4,
                    },
                }}
            >
                {
                    CETEGORY_SLIDER.map((category, index) => {
                        return <SwiperSlide key={index}>
                            <div className='category-wrapper  cursor-pointer'>
                                <div className='image  w-full'>
                                    <Image src={category.image} alt={category.category} width={110} height={60} className="rounded-t-lg" />
                                </div>
                                <div className='category-detaile bg-white p-1 rounded-b-lg'>
                                    <p className='name text-primary text-center text-xs md:text-sm'>{category.category}</p>
                                    <p className='name text-gray-400 text-center text-xs md:text-sm'>{category.price}</p>

                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
            <button id='category-next' className={"z-10 absolute top-1/2 -translate-y-1/2 w-7 h-7 md:w-9 md:h-9 -right-1 md:-right-5 bg-white rounded-full text-xs md:text-base"}><i className="fa fa-chevron-right text-xs leading-9" ></i></button>
        </div>
    )
}
