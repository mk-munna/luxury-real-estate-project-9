import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Parallax, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BiBuildingHouse } from 'react-icons/bi';
import { GoArrowRight } from 'react-icons/go';

const Banner = () => {
    return (
        <div className='text-white'>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                autoplay={{
                    delay: 3000,
                    pauseOnMouseEnter: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div style={{
                        'backgroundImage':
                            'url(https://i.ibb.co/fqbNdhW/banner-image-1920x700.jpg)',
                        'padding': '60px',
                        'backgroundSize': 'cover'
                    }}>
                        <div className="font-Amaranth text-5xl" data-swiper-parallax="-300">
                            Home is the starting <br />place of love.
                        </div>
                        <div className="text-sm font-Outfit mt-8" data-swiper-parallax="-200">
                            Exclusive luxury properties for the discerning, where opulence<br />meets comfort and style.
                        </div>
                        <div className="mt-8" data-swiper-parallax="-100">
                            <button className='flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-[12px] animate__animated animate__fadeInUp '><BiBuildingHouse></BiBuildingHouse> Show Producs <GoArrowRight></GoArrowRight></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        'backgroundImage':
                            'url(https://i.ibb.co/qFvskKG/blog-bg.jpg)',
                        'padding': '60px',
                        'backgroundSize': 'cover'
                    }}>
                        <div className="font-Amaranth text-5xl" data-swiper-parallax="-300">
                            Home is the starting <br />place of love.
                        </div>
                        <div className="text-sm font-Outfit mt-8" data-swiper-parallax="-200">
                            Exclusive luxury properties for the discerning, where opulence<br />meets comfort and style.
                        </div>
                        <div className="mt-8" data-swiper-parallax="-100">
                            <button className='flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-[12px]'><BiBuildingHouse></BiBuildingHouse> Show Producs <GoArrowRight></GoArrowRight></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{
                        'backgroundImage':
                            'url(https://i.ibb.co/BqJRv89/best-bg.jpg)',
                        'padding': '60px',
                        'backgroundSize': 'cover'
                    }}>
                        <div className="font-Amaranth text-5xl" data-swiper-parallax="-300">
                            Home is the starting <br />place of love.
                        </div>
                        <div className="text-sm font-Outfit mt-8" data-swiper-parallax="-200">
                            Exclusive luxury properties for the discerning, where opulence<br />meets comfort and style.
                        </div>
                        <div className="mt-8" data-swiper-parallax="-100">
                            <button className='flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-[12px] '><BiBuildingHouse></BiBuildingHouse> Show Producs <GoArrowRight></GoArrowRight></button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;