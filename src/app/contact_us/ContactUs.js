"use client";

import React from 'react';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

export default function ContactUs() {
    return (
        <>
            <div className='mx-auto px-4 sm:px-6 lg:px-8 pt-4 bg-black mt-48'>
                <Navbar />
                <div className='md:mx-28 mb-16'>
                    <h1 className="text-2xl font-bold mb-4 mt-10 text-white">Contact Us</h1>
                    <p className="mb-4 text-white">
                        If you have any questions, feedback, or inquiries, please feel free to contact us via email at <a href="mailto:yumzinform@gmail.com" className="text-orange-500 hover:underline">yumzinform@gmail.com</a> or WhatsApp us at <a href="https://wa.me/+91 9612557102" className="text-orange-500 hover:underline">+91 9612557102</a>.
                    </p>
                    <div className="mb-8">
                        {/* <h2 className="text-xl font-bold mb-2 text-white">Contact Form</h2> */}
                        {/* Your contact form JSX */}
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4 text-white border-b border-gray-600 pb-2">Contact Information</h2>
                        <p className="mb-4 text-white">
                            <span className="font-semibold">Email:</span> <a href="mailto:yumzinform@gmail.com" className="text-orange-500 hover:underline">yumzinform@gmail.com</a>
                        </p>
                        <p className="mb-4 text-white">
                            <span className="font-semibold">Phone:</span> <a href="https://wa.me/+91 9612557102" className="text-orange-500 hover:underline">+91 9612557102</a>
                        </p>
                        <p className="text-white">
                            <span className="font-semibold">Address:</span> Chawngte - Borapansuri road, kamalanagar, Mizoram, 796772
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
