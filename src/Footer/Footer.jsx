import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FiArrowDownRight } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className='bg-[#1f1f30]'>
            <footer className="lg:max-w-6xl md:max-w-screen-sm max-w-[300px] lg:w-full mx-auto py-20">
                <div className='footer text-white '>
                    <aside className=' w-[280px] justify-center lg:justify-start mx-auto '>
                        <div className='w-[250px] flex gap-2 items-center'>
                            <img className='w-[35px]' src="https://i.ibb.co/YjBjgNm/image-removebg-preview-1.png" alt="" />
                            <p className="text-primary text-2xl font-semibold">Luxy Realty</p>
                        </div>
                        <p className=" md:block">Your Gateway to Exquisite Living</p>
                        <div className='flex mt-12'>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '100%', maxWidth: '200px' }, // Adjusted width for better mobile layout
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    label={'Your Email'}
                                    id="Email"
                                    variant="outlined"
                                    size="small"
                                    sx={
                                        {
                                            '& .MuiInputLabel-root': {
                                                color: '#DDDDDD',
                                                fontSize: '12px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                top: '10%',
                                                '&.Mui-focused': {
                                                    color: 'black',
                                                    backgroundColor: '#5BBC04',
                                                    padding: '2px 8px 2px 8px',
                                                    borderRadius: '5px',
                                                    fontWeight: 'bold',
                                                },
                                            },
                                            '& .MuiOutlinedInput-root': {
                                                '&:hover fieldset': {
                                                    border: 'none',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    border: 'none',
                                                },
                                                '& input ': {
                                                    border: '1px solid white',
                                                    borderRight: 'none',
                                                    borderRightRadius: '0px',
                                                    borderTopLeftRadius: '5px',
                                                    borderBottomLeftRadius: '5px',
                                                    color: 'white',
                                                },
                                            },
                                        }
                                    }
                                />
                            </Box>
                            <button><FiArrowDownRight className='bg-primary rounded-r-[5px] text-[43px] p-2' /></button>
                        </div>
                    </aside>
                    <div className='flex flex-col mx-auto w-[200px]  items-center md:items-start '>
                        <h6 className="footer-title">Category</h6>
                        <p><a className="link link-hover">Resort</a></p>
                        <p><a className="link link-hover">Private Island</a></p>
                        <p><a className="link link-hover">Pentaloom Flat</a></p>
                        <p><a className="link link-hover">Penthouse</a></p>
                    </div>
                    <div className='flex md:hidden lg:flex flex-col mx-auto w-[200px]  items-center md:items-start'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div className='flex flex-col mx-auto   items-center md:items-start w-[150px]'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
