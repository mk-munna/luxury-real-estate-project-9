import PropTypes from "prop-types"
import { BiCart, BiHeart } from "react-icons/bi";
import { GiHomeGarage } from "react-icons/gi";
import { Link } from "react-router-dom";
const EstateSmall = ({ estate }) => {
    const {id, title,  price, status, area, image} = estate;
    return (
        <div>
            <div className="w-[250px] bg-base-100 shadow-xl  hover:scale-[1.01] duration-500 ">
                <figure className=" relative">
                    <img width={"100%"} src={image} className="rounded-xl" />
                    <span className='absolute bg-primary px-2 py-[2px] rounded-md top-0 left-0 text-white font-Outfit'>{status}</span>
                    <div className="tooltip absolute top-8 right-5" data-tip="Add to wishlist">
                        <button className='bg-white hover:bg-primary hover:text-white  p-2 rounded-md text-lg'><span><BiHeart></BiHeart></span></button>
                    </div>
                    <div className="tooltip absolute top-20 right-5" data-tip="Add to Cart">
                        <button className='bg-white hover:bg-primary hover:text-white  p-2 rounded-md text-lg'><span><BiCart></BiCart></span></button>
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-Amaranth font-medium overflow-hidden whitespace-nowrap">{title}</h2>
                    <h1 className='text-3xl text-primary font-bold font-Amaranth'>${price} </h1>
                    <div>
                        <span className='bg-slate-200 px-2 py-[2px] text-sm font-Outfit rounded-md'>{area}</span>
                        <hr className='my-3' />
                    </div>
                    <div className="card-actions">
                        <Link to={`/estate/${id}`}><button className='bg-[#379c8b] px-4 py-2 text-white rounded-lg flex items-center gap-2'><GiHomeGarage></GiHomeGarage>View Property</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
EstateSmall.propTypes = {
    estate: PropTypes.object
};
export default EstateSmall;