import React from 'react';
import logo from '../assets/logo.png';
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const MyFooter = () => {
    return (
        <div className='bg-gray'>
        <Footer container className='bg-gray'>
            <div className="w-full bg-gray">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 bg-gray p-0"> {/* Removed padding */}
                    <div className='space-y-4 mb-8'>
                        <a href = "" className="text-2xl font-semibold flex items-center space-x-3"><img src={logo}
                            alt="" className="w-10 inline-block items-center"/>
                            <span>FiSOC</span></a>
                        <p className='mb-1'>Created By Team FiSOC </p>
                        <p>© 2024 All Rights Reserved </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Flowbite</Footer.Link>
                                <Footer.Link href="#">Tailwind CSS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Github</Footer.Link>
                                <Footer.Link href="#">Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#">Privacy Policy</Footer.Link>
                                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" icon={BsFacebook} />
                        <Footer.Icon href="#" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                    </div>
                </div>
            </div>
        </Footer>
        </div>
    );
};

export default MyFooter;
