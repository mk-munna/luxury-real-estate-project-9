import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContextProvider';
import { LuPenLine, } from 'react-icons/lu';
import { Link,  } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { RiBook2Line, RiSettingsLine } from 'react-icons/ri';
import toast, { Toaster } from 'react-hot-toast';
import { signOut } from 'firebase/auth';
import { auth } from '../../Provider/firebase.config';
import { IoIosLogOut } from 'react-icons/io';
import { TfiWrite } from 'react-icons/tfi';
import { Helmet } from 'react-helmet-async';

const UserProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const handleClick = () => {
        signOut(auth)
            .then(() => {
                toast.success(' successfully logged out!')
            }).catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className=" my-20 lg:max-w-6xl px-4 lg:px-0  md:max-w-screen-sm max-w-[350px] mx-auto flex flex-col lg:flex-row gap-12 justify-evenly">
            <Helmet>
                <title>Luxy Realty | Profile - {user?.displayName|| 'Unknown'} </title>
            </Helmet>
            <div  data-aos="fade-up" data-aos-duration="1500" className='flex justify-center  lg:mb-48 lg:ml-[191px] ml-0 mb-0  lg:mt-20'>
                <div className='flex gap-8 relative flex-col lg:flex-row lg:px-14'>
                    <div className="tooltip absolute top-0 right-0" data-tip="Update Profile">
                        <Link to={'/update-profile'}><div className=' bg-[#e5e7e6] p-2 rounded-full'><LuPenLine /></div></Link>
                    </div>
                    <div>
                        {
                            user?.photoURL ? (
                                <img src={user?.photoURL} alt="" className="w-[120px] h-[120px] rounded-full " />
                            ) : (
                                <div className="bg-[#3bd8d8] text-3xl md:text-6xl lg:text-6xl font-semibold w-[120px] h-[120px] flex justify-center items-center rounded-full">
                                    {
                                        user?.displayName ? (

                                            <p>{user?.displayName.charAt(0).toUpperCase()}</p>
                                        ) : (
                                            <p>U</p>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <p className='text-[32px] font-OpenSans font-bold mt-4'>{user?.displayName || 'Unknown'}</p>
                        <p className=' font-OpenSans text-[#999999] font-semibold mt-2'>Email : &nbsp; {user?.email || 'not found'}</p>
                        <div className='flex gap-4 items-center mt-4'>
                            <Link to={'/update-profile'}><div className=' px-4 py-2 text-center border rounded-full'>Edit Profile</div></Link>
                            <div className="dropdown dropdown-bottom lg:dropdown-right">
                                <div tabIndex={0} className='border p-3 rounded-full' role='button'>
                                    <BsThreeDots />
                                </div>
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[190px]">
                                    <li><Link to={'/login'}><BiUser></BiUser> Add new account</Link></li>
                                    <li><Link><RiSettingsLine /> Settings</Link></li>
                                    <li onClick={handleClick}><a><IoIosLogOut /> Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
                <hr className="mt-6" />
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

export default UserProfile;
