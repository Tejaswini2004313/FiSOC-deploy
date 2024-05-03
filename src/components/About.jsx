import React from 'react';
import about from "../assets/about.jpg";

const About = () => {
    return (
        <div className='bg-bgcolor text-whitesmoke pt-12 pb-12' id='about'>
            <h1 className='text-5xl font-bold mb-8 md:w-3/2 text-center text-blue'>About Us</h1> {/* Increased margin bottom */}
            <div className='px-4 lg:px-14 max-w-screen-4x1 mx-auto mt-2 mb-8'> {/* Increased margin top */}
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row items-center gap-12'> {/* Increased width, centered */}
                    <div className='rounded-lg overflow-hidden w-64 h-64 md:w-96 md:h-96'>
                        <img src={about} alt="" className="w-full h-full object-cover shadow-lg"/>
                    </div>
                    <div className='md:w-3/4 mx-auto md:ml-8 mt-4 md:mt-0'> {/* Increased margin top */}
                        <h2 className='text-3xl text-whitesmoke font-semibold mb-4 md:w-4/5'>
                            The Finance and Economics Club (FiSOC)
                        </h2>
                        <p className='md:w-11/12 text-lg text-whitesmoke mb-8'>
                            The Finance and Economics Club (FiSOC) provides a platform for ardent students to come together 
                            to learn the intriguing world of finance and economics through seminars/webinars with industry 
                            experts and organizing debates and discussions to explore career opportunities in the financial sector.
                        </p>
                        <p className='md:text-lg text-whitesmoke mb-8'>
                            Coordinator– Snigdha Srivastava
                        </p>
                        <p className='md:text-lg text-whitesmoke mb-8'>
                            Email: snigdha.srivastava@cumminscollege.in
                        </p>
                        <p className='md:text-lg text-whitesmoke mb-8'>
                            Club Email id– fisoc@cumminscollege.in
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
