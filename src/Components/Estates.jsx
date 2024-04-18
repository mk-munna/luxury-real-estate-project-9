
import 'animate.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination,Navigation } from 'swiper/modules';

import { useContext,  } from "react";
import Estate from "./Estate";
import { DataContext } from '../Provider/DataContextProvider';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
const Estates = () => {
    const data = useContext(DataContext)
    // console.log(data);

    return (
        <div id='estate' className="mt-[70px] px-8 lg:px-0">
            <div className='' data-aos="fade-up" data-aos-duration="1500">
                <h1 className="text-[40px] text-primary font-Amaranth font-semibold text-center">Discover Our Estate Listings</h1>
                <p className="mt-[30px] text-center lg:w-[700px] mx-auto text-sm font-Outfit">From luxurious beachfront villas to modern city apartments, our diverse portfolio offers something for every lifestyle and preference. Start your journey towards finding your dream home today with our meticulously curated estate listings</p>
            </div>
            <div className='mt-10'>
                <Swiper
                    slidesPerView={0}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    pagination={{
                        clickable: true,
                        type:'bullets'
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.25': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        '@0.50': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        '@0.60': {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        '@0.70': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        '@1.00': {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        '@1.25': {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper w-[95%] h-[600px]"
                >
                    {data.map((estate) => (
                        <SwiperSlide key={estate.id}>
                            <Estate  estate={estate} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Estates;