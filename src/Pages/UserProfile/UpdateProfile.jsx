import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import toast, { Toaster } from 'react-hot-toast';
import { BiUser } from 'react-icons/bi';
import { IoImageOutline } from 'react-icons/io5';
import { LuUser } from 'react-icons/lu';
import { RiBook2Line } from 'react-icons/ri';
import { TfiWrite } from 'react-icons/tfi';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthContextProvider';

const UpdateProfile = () => {
    const { updateUserProfile, user,setUser, } = useContext(AuthContext)
    // console.log(user)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.url.value;
        updateUserProfile(user, name, photoUrl)
            .then(() => {
                setUser({ ...user, displayName: name, photoURL : photoUrl})
                toast.success('Successfully signed up!')
                e.target.reset
                navigate('/')
        }).catch(err => {
            console.log(err.message);
        })
    }
    console.log(user);
    return (
        <div className=" my-20 lg:max-w-6xl px-10 lg:px-0 mx-auto flex flex-col lg:flex-row gap-12 justify-evenly">
            <Helmet>
                <title>Luxy Realty | Update Profile</title>
            </Helmet>
            <div className="text-gray-700 rounded-xl">
                <h4 className="block font-OpenSans text-5xl font-semibold text-primary leading-snug text-blue-gray-900">
                    Update your profile
                </h4>
                <p className="block mt-1 font-sans  pl-4 border-l-2 border-primary text-base leading-relaxed text-gray-700">
                    Enter your details to update.
                </p>
                <form onSubmit={handleSubmit} className='mt-6 lg:w-[700px]'>
                    <label className="relative">
                        <span  className="absolute text-primary top-1 left-6 cursor-pointer">
                            <LuUser />


                        </span>
                        <input type='text' id="name" name="name" className="grow bg-gray-50 focus:outline-none border border-primary font-light rounded-lg w-full px-14 py-2 mt-2 font-Outfit  " placeholder="Your Full Name" required />
                    </label>
                    <br />
                    <br />
                    <label className="relative">
                        <span  className="absolute text-primary top-1 left-6 cursor-pointer">
                            <IoImageOutline />

                        </span>
                        <input type='text' id="url" name="url" className="grow bg-gray-50 focus:outline-none border border-primary font-light rounded-lg w-full px-14 py-2 mt-2 font-Outfit  " placeholder="Your Photo Url" required />
                    </label>
                    <br />
                    <br />
                    <button className='bg-primary text-white px-4 py-[4px] rounded-md'>Save changes</button>
                </form>
            </div>

            <div className="lg:w-[300px] mt-6 border border-gray-200 rounded-xl p-6">
                <p className="flex items-center gap-2 text-base uppercase font-semibold">
                    <BiUser className="text-primary font-Outfit" />Account Setting
                </p>
                <div className="mt-4 pl-8 flex flex-col mb-6 gap-4">
                    <Link to="/login" className="cursor-pointer font-Outfit text-sm">Login</Link>
                    <Link to="/sign-up" className="cursor-pointer font-Outfit text-sm">Register</Link>
                    <Link to="#" className="cursor-pointer font-Outfit text-sm">Forgotten Password</Link>
                    <Link to="#" className="cursor-pointer font-Outfit text-sm">My account</Link>
                    <Link to="#" className="cursor-pointer font-Outfit text-sm">Address Book</Link>
                </div>
                <hr />
                <p className="flex items-center gap-2 mt-6 text-base uppercase font-semibold">
                    <TfiWrite className="text-primary font-Outfit" />My Orders
                </p>
                <div className="mt-4 pl-8 flex flex-col gap-4">
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Order History</p></Link>
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Download</p></Link>
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Return</p></Link>
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Transaction</p></Link>
                </div>
                <hr className="mt-6"/>
                <p className="flex items-center gap-2 mt-6 text-base uppercase font-semibold">
                    <RiBook2Line className="text-primary font-Outfit" />My Stuff
                </p>
                <div className="mt-4 pl-8 flex flex-col gap-4">
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Wishlist</p></Link>
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Reward Points</p></Link>
                    <Link to="#"><p className="cursor-pointer font-Outfit text-sm">Coupon</p></Link>
                </div>
            </div>
            <div><Toaster /></div>
        </div>
    );
};

export default UpdateProfile;