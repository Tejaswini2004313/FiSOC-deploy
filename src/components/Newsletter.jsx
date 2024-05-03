import React from 'react';

const Newsletter = () => {
    const newsletters = [
        {id:1, title: "What should you do with your first salary?", image:"../src/assets/locker.jpg", link: "/first-salary"},
        {id:2, title: "How does WhatsApp earn?", image:"../src/assets/whatsapp.png", link: "https://web.whatsapp.com"},
        {id:3, title: "Is McDonald's a real estate company?", image:"../src/assets/McDonalds.jpg", link: "/mcdonalds-real-estate"},
        {id:4, title: "Beware! Your Salary is not as much as you think", image:"../src/assets/paper.jpg", link: "/salary-reality"},
        {id:5, title: "Why can't the government just print more money?", image:"../src/assets/money1.jpg", link: "/print-more-money"},
        {id:6, title: "Debts, Loans and Mortgages", image:"../src/assets/debt.jpg", link: "/debts-loans-mortgages"},
    ];

    return (
        <div className='bg-bgcolor text-whitesmoke pt-4 pb-4' id='newsletters'>
            <h1 className='text-5xl font-bold mb-4 md:w-3/2 text-center text-blue'>Newsletters</h1>
            <div className='px-4 lg:px-14 max-w-screen-4x1 mx-auto mt-4 mb-4'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
                    {
                        newsletters.map(newsletter => (
                            <div key={newsletter.id} className='mx-auto relative mb-12 cursor-pointer'>
                                <div className="aspect-w-4 aspect-h-3">
                                    <img src={newsletter.image} alt="" className='object-cover w-full h-full hover:scale-95 transition-all duration-300'/>
                                </div>
                                <div className='text-center px-4 py-8 bg-bgcolor shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-12'>
                                    <h3 className='mb-3 text-whitesmoke font-semibold'>{newsletter.title}</h3> 
                                    <div className='flex items-center justify-center gap-8'>
                                        <a href={newsletter.link} className='font-bold text-blue hover:text-whitesmoke'>
                                            Read More
                                            <svg xmlns='http://www.w3.org/2000/svg' width="17" height="11" viewBox='0 0 17 11' fill='none' className='inline-block m1-2'>
                                                <path d='M8.5 0L17 5.5M17 5.5L8.5 11' stroke='#88E1FF'/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
