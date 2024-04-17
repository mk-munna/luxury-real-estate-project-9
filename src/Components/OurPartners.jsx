import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const OurPartners = () => {
    return (
        <div className='bg-[#EEFFF5]'>
            <h1 className='font-Amaranth text-5xl font-bold mb-8 ml-[60px]'>Our Partners</h1>
            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                autoplay={{
                    delay: 1500,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    type: 'bullets',
                    clickable: true,
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper max-w-[350px] md:max-w-screen-sm lg:max-w-6xl h-28"
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '@0.25': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@0.50': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '@0.75': {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    '@1.25': {
                        slidesPerView: 6,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide><div className='border border-gray-300 rounded-lg px-6 py-4'><img src="https://opencart.workdo.io/landholdings/image/cache/catalog/logoslider/testi-03-135x20.png" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='border border-gray-300 rounded-lg px-6 py-4'><img src="https://opencart.workdo.io/landholdings/image/cache/catalog/logoslider/testi-01-135x20.png" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='border border-gray-300 rounded-lg px-6 py-4'><img src="https://opencart.workdo.io/landholdings/image/cache/catalog/logoslider/testi-02-135x20.png" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='border border-gray-300 rounded-lg px-6 py-4'><img src="https://opencart.workdo.io/landholdings/image/cache/catalog/logoslider/testi-03-135x20.png" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='border border-gray-300 rounded-lg px-6 py-4'><img src="https://opencart.workdo.io/landholdings/image/cache/catalog/logoslider/testi-05-135x20.png" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='border border-gray-300 rounded-lg px-6 py-4'><img src="https://opencart.workdo.io/landholdings/image/cache/catalog/logoslider/testi-05-135x20.png" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='border border-gray-300 rounded-lg px-6 py-4'><img src="https://opencart.workdo.io/landholdings/image/cache/catalog/logoslider/testi-05-135x20.png" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='border border-gray-300 rounded-lg px-6 py-4'><img src="https://opencart.workdo.io/landholdings/image/cache/catalog/logoslider/testi-05-135x20.png" alt="" /></div></SwiperSlide>
                <SwiperSlide><div className='border border-gray-300 rounded-lg px-6 py-4'><img src="https://opencart.workdo.io/landholdings/image/cache/catalog/logoslider/testi-02-135x20.png" alt="" /></div></SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default OurPartners;