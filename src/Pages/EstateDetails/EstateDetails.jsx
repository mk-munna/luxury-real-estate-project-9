import React, { useContext, } from 'react';
import { DataContext } from '../../Provider/DataContextProvider';
import { useParams } from 'react-router-dom';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';

import ReactImageMagnify from 'react-image-magnify';

const EstateDetails = () => {

    const data = useContext(DataContext);
    const inputId = useParams();
    const idInt = parseInt(inputId.id)
    const resultData = data.find(data => data.id === idInt);
    console.log(inputId, idInt );
    console.log(data);
    if (resultData) {
        const { title, price, status, area, image, location, segment, facilities, description  } = resultData;
        return (
            <div className='bg-[#EEFFF5] py-16'>
                <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-6'>
                    <div className='space-y-0 w-[350px] lg:w-[500px]'>
                        
                        <div className='flex gap-6 pb-5'>
                            <p className='text-sm mb-2'><span className='font-semibold text-primary'>Category :</span> {segment}</p>
                            <p className='text-[12px] text-white mb-2 bg-primary px-1 font-Outfit rounded-md'>{status}</p>
                            
                        </div>
                        <p className='text-4xl mb-4 font-Amaranth'>{title}</p>
                        <br />
                        <hr className='pb-4' />
                        <div className='flex gap-16 pb-4'>
                            
                            <p className='bg-gray-200 px-2 text-sm font-Outfit py-[2px] rounded-md text-black inline-block'>{area}</p>
                        </div>
                        <p>{location}</p>
                        <div className='pt-2'>
                            <p className='text-5xl text-primary font-Amaranth pt-4'>${price}</p>
                        <br />
                            <hr />
                            <br />
                            <p className='font-OpenSans mb-4 text-xl'>Facilities :</p>
                            {
                                facilities.map((facility, index) => {
                                    return <li className='font-OpenSans text-sm ml-4' key={index}>{facility}</li>
                                })
                            }
                        </div>
                        <br />
                        <div className='flex gap-6'>
                            <button className='flex gap-2 bg-primary hover:bg-[#3f9c27] duration-300 rounded-md items-center px-3 text-white py-1'><CiShoppingCart className='text-xl'/>Add to Cart</button>
                            <button className='flex gap-2 hover:bg-primary hover:text-white duration-300 bg-gray-200 rounded-md items-center px-2 py-1'><CiHeart className='text-xl'/> Add to Wishlist</button>
                        </div>
                    </div>
                    <div className='w-[350px] lg:w-[500px]'>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: image,
                                    width: 400, 
                                    height: 400, 
                                },
                                largeImage: {
                                    src: image,
                                    width: 1500, 
                                    height: 1000, 
                                },
                                enlargedImageContainerDimensions: {
                                    width: '200%', 
                                    height: '100%', 
                                },
                                enlargedImageContainerPosition: 'over',
                                enlargedImageClassName:"ml-[200px]"
                            }}
                        />

                    </div>
                    <div className='w-[350px] lg:w-[500px]'>
                        <h1 className=' font-Amaranth'>Description : </h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        );

    } else {
        return (
            <div>
                Loading...
            </div>
        );
    }
    
};

export default EstateDetails;