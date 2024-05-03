import React from 'react';
import logo2 from "../assets/logo2.png";

const Events = () => {
    return (
        <div className='bg-bgcolor text-whitesmoke pt-1 pb-1' id='pastEvents'>
            <h1 className='text-5xl font-bold mb-4 md:w-3/2 text-center text-blue'>Past Events</h1>
            <div className='px-4 lg:px-14 max-w-screen-4x1 mx-auto mt-1 mb-1'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row items-center gap-4'> {/* Reduced gap */}
                    <div className='rounded-lg overflow-hidden w-64 h-64 md:w-96 md:h-96'>
                        <img src={logo2} alt="" className="w-full h-full object-cover shadow-lg"/>
                    </div>
                    <div className='md:w-3/4 mx-auto md:ml-4 mt-4 md:mt-0'> {/* Adjusted margin and reduced gap */}
                        <h2 className='text-3xl text-whitesmoke font-semibold mb-2 md:w-4/5'>
                            The Finance and Economics Club (FiSOC)
                        </h2>
                        <p className='md:w-11/12 text-lg text-whitesmoke mb-4'>
                            The Finance and Economics Club (FiSOC) provides a platform for ardent students to come together 
                            to learn the intriguing world of finance and economics through seminars/webinars with industry 
                            experts and organizing debates and discussions to explore career opportunities in the financial sector.
                        </p>
                    </div>
                </div>

                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row items-center gap-4'> {/* Reduced gap */}
                    <div className='md:w-3/4 mx-auto md:ml-4 mt-4 md:mt-0'> {/* Adjusted margin and reduced gap */}
                        <h2 className='text-3xl text-whitesmoke font-semibold mb-2 md:w-4/5'>
                            The Finance and Economics Club (FiSOC)
                        </h2>
                        <p className='md:w-11/12 text-lg text-whitesmoke mb-4'>
                            The Finance and Economics Club (FiSOC) provides a platform for ardent students to come together 
                            to learn the intriguing world of finance and economics through seminars/webinars with industry 
                            experts and organizing debates and discussions to explore career opportunities in the financial sector.
                        </p>
                    </div>
                    <div className='rounded-lg overflow-hidden w-64 h-64 md:w-96 md:h-96'>
                        <img src={logo2} alt="" className="w-full h-full object-cover shadow-lg"/>
                    </div>
                </div>

                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row items-center gap-4'> {/* Reduced gap */}
                    <div className='rounded-lg overflow-hidden w-64 h-64 md:w-96 md:h-96'>
                        <img src={logo2} alt="" className="w-full h-full object-cover shadow-lg"/>
                    </div>
                    <div className='md:w-3/4 mx-auto md:ml-4 mt-4 md:mt-0'> {/* Adjusted margin and reduced gap */}
                        <h2 className='text-3xl text-whitesmoke font-semibold mb-2 md:w-4/5'>
                            The Finance and Economics Club (FiSOC)
                        </h2>
                        <p className='md:w-11/12 text-lg text-whitesmoke mb-4'>
                            The Finance and Economics Club (FiSOC) provides a platform for ardent students to come together 
                            to learn the intriguing world of finance and economics through seminars/webinars with industry 
                            experts and organizing debates and discussions to explore career opportunities in the financial sector.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
