
import { AiOutlineUser } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { HiOutlineUser } from "react-icons/hi2";
import { RiPagesLine, RiSettingsLine } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import { RiBuilding2Line } from "react-icons/ri";
import { TbBuildingWarehouse } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { LuMails } from "react-icons/lu";

import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import './nav.css'
import { AuthContext } from "../Provider/AuthContextProvider";
import { BiUserCircle } from "react-icons/bi";
import { signOut } from "firebase/auth";
import { auth } from "../Provider/firebase.config";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";


const Nav = () => {
    
    const { user, loading } = useContext(AuthContext)
    const [myValue, setMyValue] = useState('');
    console.log(myValue);

    const handleClick = () => {
        signOut(auth)
            .then(() => {
                toast.success(' successfully logged out!')
            }).catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className='font-Outfit'>
            {/* top bar */}
            <div className="bg-[#EEFFF5] py-6">
                <div className="max-w-6xl flex mx-auto">
                    <h1 className="flex items-center gap-2 text-3xl font-semibold text-primary"><img className="w-10" src="https://i.ibb.co/YjBjgNm/image-removebg-preview-1.png" alt="" /><span>Luxe Realty</span></h1>

                    <label className="ml-[70px] bg-white rounded-full px-4  h-10 flex items-center gap-2">
                        <Link to={'/login'}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg></Link>
                        <input type="text" className="text-[12px] grow w-[150px] focus:outline-none focus:border-none" placeholder="Search" />
                        <select onChange={e => setMyValue(e.target.value)} className="h-9 text-white text-[12px] rounded-full px-2  bg-[#0F172A]">
                            <option value={"default"}>Category</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </label>
                    <div className="text-[12px] ml-6">
                        <span className="font-semibold">Monday - Friday :</span> <br />
                        8:00 AM - 9:00 PM
                    </div>
                    <div className="text-[12px] text-right ml-[120px]">
                        Support 24/7: <br />
                        <span className="font-bold text-sm">+66 442-424-444</span>
                        

                    </div>
                    <div className="flex justify-center items-center text-2xl ml-6">
                        <div className="dropdown dropdown-end">
                            {
                                loading ? (
                                    <div className="skeleton w-8 h-8 rounded-full shrink-0"></div>
                                ) : (
                                        user ? (
                                            <div className="tooltip  tooltip-left" data-tip={user?.displayName || 'Unknown'}>
                                            <div>
                                                <div tabIndex={0} role="button" className=" m-1">
                                                    {
                                                        user?.photoURL ? (
                                                            <img src={user?.photoURL} alt="" className="w-8 h-8 rounded-full " />
                                                        ) : (
                                                            <div className="bg-[#3bd8d8] text-lg w-8 h-8 flex justify-center items-center rounded-full">
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
                                                <ul tabIndex={0} className="dropdown-content z-[2] menu p-1 shadow-xl bg-base-100 rounded-box w-[160px]">
                                                        <li><Link to={'/profile'}><HiOutlineUser /> Profile</Link></li>
                                                        <li><Link to={'/update-profile'}><FiEdit />Update Profile</Link></li>
                                                    <li><a><RiSettingsLine /> Settings</a></li>
                                                    <li onClick={handleClick}><a><IoIosLogOut /> Logout</a></li>
                                                </ul>
                                                </div>
                                            </div>
                                        ) : (
                                            <div>
                                                <div tabIndex={0} role="button" className=" m-1"><AiOutlineUser /></div>
                                                <ul tabIndex={0} className="dropdown-content z-[2] menu p-1 shadow-xl bg-base-100 rounded-box w-28">
                                                    <li><Link to={'/login'}><HiOutlineUser /> Login</Link></li>
                                                    <li><Link to={'/sign-up'}><BiUserCircle /> Register</Link></li>
                                                </ul>
                                            </div>
                                        )
                                )
                            }

                        </div>
                    </div>
                    <div className="flex items-center ml-6">
                        <div className="  text-2xl relative">
                            <div><IoIosHeartEmpty /></div>
                            <div className=" absolute -top-3 -right-3 h-4 w-4 text-[12px]  text-white"><span className="p-[1px] bg-black">20</span></div>
                        </div>
                    </div>
                    <div className="flex items-center ml-6">
                        <span className="text-[12px] mr-1">My Cart</span>
                        <div className="  text-2xl relative">
                            <div><PiShoppingCartSimpleLight /></div>
                            <div className=" absolute -top-3 -right-3 h-4 w-4 text-[12px]  text-white"><span className="p-[1px] bg-black">10</span></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* nav bar */}
            <div className=" bg-primary ">
                <div className="lg:max-w-[1200px] navbar mx-auto">
                    <div className="navbar-center">
                        <div className="dropdown z-10">
                            <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <NavLink to={'/'} className={"flex items-center gap-2"}><IoHomeOutline />Home</NavLink>
                                <NavLink to={'/all-product'} className={"flex items-center gap-2"}><RiBuilding2Line />All Product</NavLink>
                                <NavLink to={'/blogs'} className={"flex items-center gap-2"}><RiPagesLine></RiPagesLine> Our Blogs</NavLink>
                                <NavLink to={'/about-us'} className={"flex items-center gap-2"}><TbBuildingWarehouse />ABout us</NavLink>
                                <NavLink to={'/sign-up'} className={"flex items-center gap-2"}><FaRegUserCircle></FaRegUserCircle>Register</NavLink>
                                <NavLink to={'/login'} className={"flex items-center gap-2"}><FaRegUser />Login</NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className="w-3/4 hidden text-white lg:flex">
                        <ul className="menu menu-horizontal px-1 gap-8 text-base">
                            <NavLink to={'/'} className={"flex items-center gap-2 hover:bg-none hover:border-b border-[#ffff00] pb-1"}><IoHomeOutline />Home</NavLink>
                            <NavLink to={'/all-product'} className={"flex items-center gap-2 hover:bg-none hover:border-b border-[#ffff00] pb-1"}><RiBuilding2Line />All Product</NavLink>
                            <NavLink to={'/blogs'} className={"flex items-center gap-2 hover:bg-none hover:border-b border-[#ffff00] pb-1"}><RiPagesLine></RiPagesLine> Our Blogs</NavLink>
                            <NavLink to={'/about-us'} className={"flex items-center gap-2 hover:bg-none hover:border-b border-[#ffff00] pb-1"}><TbBuildingWarehouse />ABout us</NavLink>
                            <NavLink to={'/sign-up'} className={"flex items-center gap-2 hover:bg-none hover:border-b border-[#ffff00] pb-1"}><FaRegUserCircle></FaRegUserCircle>Register</NavLink>
                            <NavLink to={'/login'} className={"flex items-center gap-2"}><FaRegUser />Login</NavLink>
                        </ul>
                    </div>
                    <div className="w-1/4 flex justify-end">
                        <div className="flex items-center  gap-2  text-white">
                            <LuMails />
                            <span className="">mkmunna@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Nav;

