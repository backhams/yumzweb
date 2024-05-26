"use client"
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
                        If you have any questions, feedback, or inquiries, please feel free to contact us via email at <a href="mailto:yumzinform@gmail.com" className="text-orange-500">yumzinform@gmail.com</a> or WhatsApp us at <a href="https://wa.me/+91 9612557102" className="text-orange-500">+91 9612557102</a>.
                    </p>
                    {/* Add your contact form or contact information here */}
                    <div className="mb-8">
                        {/* <h2 className="text-xl font-bold mb-2 text-white">Contact Form</h2> */}
                        {/* Your contact form JSX */}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2 text-white">Contact Information</h2>
                        <p className="mb-2 text-white">Email: yumzinform@gmail.com</p>
                        <p className="mb-2 text-white">Phone: +91 9612557102</p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
