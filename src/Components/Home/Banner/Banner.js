import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner-section'>
            <div>
                <h1 className='font-semibold text-2xl uppercase'>I grow by helping people in need.</h1>
                <div className='w-1/4 mx-auto mt-4 relative'>
                    <input type="text" id="email-address-icon" class=" block p-2 pl-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    <button className='absolute top-0 right-0 px-4 text-white text-sm bg-[#3F90FC] h-full rounded-r-md'>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;