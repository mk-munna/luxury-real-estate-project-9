import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import EstateSmall from "./EstateSmall";
import { useContext } from 'react';
import { DataContext } from '../Provider/DataContextProvider';
import { BiBuildingHouse } from 'react-icons/bi';
import { GoArrowRight } from 'react-icons/go';

const Explore = () => {
    const data = useContext(DataContext)
    return (
        <div className="bg-[#EEFFF5] py-24">
            <div className="lg:max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
                <div className="lg:w-[550px]">
                    <img src="	https://opencart.workdo.io/landholdings/image/cache/catalog/offerbanner/Fresh-products2-640x510.jpg" alt="" />
                </div>
                <div className='w-1/4'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={{
                            delay: 2000,
                            pauseOnMouseEnter: true,
                        }}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[Pagination, Autoplay, Navigation]}
                        className="mySwiper"
                    >
                        {
                            data.map((estate) => {
                                return (
                                    <SwiperSlide key={estate.id}>
                                        <EstateSmall estate={estate} />
                                    </SwiperSlide>
                                );
                            })
                        }
                    </Swiper>
                    <style jsx="true"> {`
                        .swiper-button-prev, .swiper-button-next {
                            color: green;
                            
                        }
                    `}</style>
                </div>
                <div className="w-[300px] mt-10 ">
                    <span className='border-l-2 border-[#f7bc3e] pl-2 text-sm text-primary font-semibold'>Luxury Apartments</span>
                    <h2 className="text-4xl font-bold text-primary  mt-4">Explore Apartment
                        Types</h2>
                    <p className="text-[12px] mt-8 leading-5">Embark on a journey through our diverse array of apartment types. From cozy studios to luxurious penthouses, discover the perfect living space tailored to your lifestyle. Explore our selection and find your ideal home today. </p>
                    <button className='flex text-white mt-8 items-center gap-2 px-4 py-2 rounded-lg bg-primary text-[12px] '><BiBuildingHouse></BiBuildingHouse> Show Producs <GoArrowRight></GoArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Explore;
