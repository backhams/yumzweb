"use client"
import React from 'react';
import Footer from '../footer/page';
import Navbar from '../navbar/page';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
    const settings = {
        dots: true,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="text-white mt-48 bg-black">
            <div className="px-4 sm:px-6 lg:px-8 pt-4 w-full mx-auto">
                <div className="pb-16">
                    <div className="fixed z-50"> {/* Ensuring Navbar is on top */}
                        <Navbar />
                    </div>
                    <div className="mt-8 md:flex md:items-center md:justify-between">
                        <div className="md:w-2/3">
                            <h1 className="text-3xl font-bold">All-in-One Food Ordering App by Flavo</h1>
                            <p className="mt-4 text-lg">
                                Flavo offers an all-in-one platform for restaurants to list their menus, take orders, manage orders, and fulfill delivery orders. From ordering food to listing menus and taking orders to maintaining orders and delivery, Flavo handles it all.
                            </p>
                            <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <a href="https://play.google.com/store" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-center">
                                    Download on Play Store
                                </a>
                                <a href="#" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded text-center">
                                    Download on App Store
                                </a>
                            </div>
                        </div>
                        <Slider {...settings} className="md:w-1/3 mt-8 md:mt-0 z-0">
                            <img src="/menu.png" alt="Slide 1" className="rounded-lg shadow-lg w-full" style={{ maxWidth: "320px", height: "280px" }} />
                            <img src="/all.png" alt="Slide 1" className="rounded-lg shadow-lg w-full" style={{ maxWidth: "420px", height: "480px" }} />
                            <img src="/specialmenu.png" alt="Slide 2" className="rounded-lg shadow-lg w-full" style={{ maxWidth: "320px", height: "280px" }} />
                            <img src="/dashboard.png" alt="Slide 3" className="rounded-lg shadow-lg w-full" style={{ maxWidth: "320px", height: "300px" }} />
                            <img src="/tracking.png" alt="Slide 4" className="rounded-lg shadow-lg w-full" style={{ maxWidth: "320px", height: "280px" }} />
                        </Slider>
                    </div>
                </div>
                <div className="py-8">
                    <h2 className="text-2xl font-bold text-center">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                        <div className="text-center p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="mt-4 text-xl font-bold">Seamless Ordering</h3>
                            <p className="mt-2 text-gray-400">Easy and fast ordering process for customers. Order your favorite meals in just a few taps.</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="mt-4 text-xl font-bold">Order Management</h3>
                            <p className="mt-2 text-gray-400">Efficient order management system for restaurants, ensuring smooth operations.</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="mt-4 text-xl font-bold">Real-time Tracking</h3>
                            <p className="mt-2 text-gray-400">Track your orders in real-time from preparation to delivery with live updates.</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="mt-4 text-xl font-bold">Multiple Payment Options</h3>
                            <p className="mt-2 text-gray-400">Supports various payment methods for a hassle-free checkout experience.</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="mt-4 text-xl font-bold">Customizable Menus</h3>
                            <p className="mt-2 text-gray-400">Restaurants can easily update and customize their menus to reflect current offerings.</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="mt-4 text-xl font-bold">Customer Support</h3>
                            <p className="mt-2 text-gray-400">24/7 customer support to assist with any inquiries or issues.</p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <a href="#" className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
                    </div>
                </div>

                <div className="py-8">
                    <h2 className="text-2xl font-bold text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="text-center p-4">
                            <h3 className="mt-4 text-xl font-bold">Step 1: Browse</h3>
                            <p className="mt-2 text-gray-400">Browse through a wide range of restaurant menus.</p>
                        </div>
                        <div className="text-center p-4">
                            <h3 className="mt-4 text-xl font-bold">Step 2: Order</h3>
                            <p className="mt-2 text-gray-400">Select your favorite dishes and place your order with ease.</p>
                        </div>
                        <div className="text-center p-4">
                            <h3 className="mt-4 text-xl font-bold">Step 3: Enjoy</h3>
                            <p className="mt-2 text-gray-400">Receive your food at your doorstep and enjoy your meal.</p>
                        </div>
                    </div>
                </div>

                <div className="py-8">
                    <h2 className="text-2xl font-bold text-center">For Delivery Partners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="text-center p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="mt-4 text-xl font-bold">Flexible Working Hours</h3>
                            <p className="mt-2 text-gray-400">Choose your own working hours and deliver at your convenience.</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="mt-4 text-xl font-bold">Competitive Earnings</h3>
                            <p className="mt-2 text-gray-400">Earn competitive rates for each delivery you complete.</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="mt-4 text-xl font-bold">Support and Training</h3>
                            <p className="mt-2 text-gray-400">Access to training resources and support to help you succeed.</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="mt-4 text-xl font-bold">Incentives and Bonuses</h3>
                            <p className="mt-2 text-gray-400">Opportunity to earn incentives and bonuses for high performance.</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="mt-4 text-xl font-bold">Real-time Order Tracking</h3>
                            <p className="mt-2 text-gray-400">Keep track of your deliveries with real-time updates and navigation.</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg hover:bg-gray-800 transition duration-300">
                            <h3 className="mt-4 text-xl font-bold">Community and Support</h3>
                            <p className="mt-2 text-gray-400">Be part of a community of delivery partners and access 24/7 support.</p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <a href="#" onClick={scrollToTop} className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Join as a Delivery Partner</a>
                    </div>
                </div>

                {/* <div className="py-8">
                    <h2 className="text-2xl font-bold text-center">Testimonials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="text-center p-4 border rounded-lg">
                            <p className="mt-2 text-gray-400">"Flavo has completely transformed the way I order food. It's so convenient and easy to use!" - Jane Doe</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                            <p className="mt-2 text-gray-400">"As a restaurant owner, Flavo's order management system has streamlined our operations." - John Smith</p>
                        </div>
                        <div className="text-center p-4 border rounded-lg">
                            <p className="mt-2 text-gray-400">"Real-time tracking is a game-changer. I always know when my food will arrive." - Sarah Lee</p>
                        </div>
                    </div>
                </div> */}

                <div className="py-8">
                    <h2 className="text-2xl font-bold text-center">Contact Us</h2>
                    <div className="text-center mt-8">
                        <p className="text-gray-400">Have questions or need support? Get in touch with us!</p>
                        <a href="mailto:yumzinform@gmail.com " className="mt-4 block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mx-auto w-40">Contact Us</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}



