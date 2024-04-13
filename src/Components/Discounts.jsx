import { BiBuildingHouse } from 'react-icons/bi';
import { GoArrowRight } from 'react-icons/go';
const Discounts = () => {
    return (
        <div className="bg-[#EAF0FF] text-primary font-semibold px-[60px] flex gap-6 flex-col lg:flex-row pt-[70px]">
            <div className="w-[300px] ">
                <span className='border-b-2 border-[#f7e43e] pb-1'>Hot Deals</span>
                <h2 className="text-3xl mt-4">Change Begins <br />At Home</h2>
                <p className="text-[12px] mt-8 leading-5">Experience unparalleled value in our Hot Deals section, where exclusive offers await. Discover your perfect property or investment opportunity at prices you will not find anywhere else. Do not miss out on these limited-time discounts - explore now! </p>
                <button className='flex text-white mt-8 items-center gap-2 px-4 py-2 rounded-lg bg-primary text-[12px] '><BiBuildingHouse></BiBuildingHouse> Show Producs <GoArrowRight></GoArrowRight></button>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-[270px]  hover:scale-[1.01] duration-300  ">
                    <div className="h-[80px]"></div>
                    <div className="bg-[#FCB045] shadow-xl text-white p-4 rounded-xl space-y-6">
                        <img className="hover:translate-x-2 duration-200" src="https://opencart.workdo.io/landholdings/image/catalog/service/1.svg" alt="" />
                        <h2 className="text-2xl leading-9 font-Amaranth">Awesome Family <br />
                            Home 3 BHK</h2>
                        <p className="font-Outfit text-[12px]">Nestled in a tranquil neighborhood, this spacious and contemporary 3-bedroom, 2-bathroom haven offers the perfect blend of comfort and style. </p>
                    </div>
                </div>
                <div className="w-[270px]  hover:scale-[1.01] duration-300 ">
                    <div className="bg-[#0F172A] shadow-xl text-white p-4 rounded-xl space-y-6">
                        <img className="hover:translate-x-2 duration-200" src="https://opencart.workdo.io/landholdings/image/catalog/service/2.svg" alt="" />
                        <h2 className="text-2xl leading-9 font-Amaranth">Luxurious Villa <br />beachfront</h2>
                        <p className="font-Outfit text-[12px]">Experience the ultimate in seaside luxury with this breathtaking beachfront villa. With stunning ocean views and unparalleled amenities, this is coastal living at its finest. </p>
                    </div>
                    <div className="h-[80px]"></div>
                </div>
                <div className="w-[270px]  hover:scale-[1.01] duration-300 ">
                    <div className="h-[80px]"></div>
                    <div className="bg-primary shadow-xl text-white p-4 rounded-xl space-y-6">
                        <img className="hover:translate-x-2 duration-200" src="https://opencart.workdo.io/landholdings/image/catalog/service/3.svg" alt="" />
                        <h2 className="text-2xl leading-9 font-Amaranth">Modern City Apartment</h2>
                        <p className="font-Outfit text-[12px]">Discover urban living redefined in this sleek and stylish modern city apartment.  enjoy convenient access to amenities and vibrant city life. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discounts;