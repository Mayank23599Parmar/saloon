import React, { useRef } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/autoplay";
import "swiper/css/navigation";
import Image from 'next/image';
import { Autoplay, Navigation } from "swiper";

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
            <button id='category-prev' className={"z-10 absolute top-1/2 -translate-y-1/2 w-9 h-9 -left-5 bg-white rounded-full"}><i className="fa fa-chevron-left text-xs leading-9" ></i></button>
            <Swiper
                spaceBetween={10}
                slidesPerView={8}
                centeredSlides={true}
                modules={[Autoplay, Navigation]}
                loop={true}
                autoplay={{ delay: 1000 }}
                navigation={{
                    prevEl: "#category-prev",
                    nextEl: "#category-next",
                }}

            >
                {
                    CETEGORY_SLIDER.map((category, index) => {
                        return <SwiperSlide key={index} className="rounded-md">
                            <div className='category-wrapper ' >
                                <div className='image max-w-[120px] w-full'>
                                    <Image src={category.image} alt={category.category} width={110} height={60} />
                                </div>
                                <div className='category-detaile bg-white p-1'>
                                    <p className='name text-primary text-center'>{category.category}</p>
                                    <p className='name text-gray-400 text-center'>{category.price}</p>

                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>
            <button id='category-next' className={"z-10 absolute top-1/2 -translate-y-1/2 w-9 h-9 -right-5 bg-white rounded-full"}><i className="fa fa-chevron-right text-xs leading-9" ></i></button>
        </div>
    )
}
