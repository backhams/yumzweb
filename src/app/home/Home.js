"use client"
import React, { useState } from 'react';
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

    return (
        <div className="text-white mt-48 bg-black">
            <div className=" px-4 sm:px-6 lg:px-8 pt-4 w-full mx-auto">
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
                          
                           
                                <img src="/dashboard.png" alt="Slide 3" className="rounded-lg shadow-lg w-full"  style={{ maxWidth: "320px", height: "300px" }} />
                           
                           
                                <img src="/tracking.png" alt="Slide 4" className="rounded-lg shadow-lg w-full" style={{ maxWidth: "320px", height: "280px" }} />
                           
                        </Slider>
                    </div>
                </div>
                <div className="py-8">
                    <h2 className="text-2xl font-bold">NEWS AT Flavo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                            <img src="https://placehold.co/320x180" alt="News Image" className="rounded-lg w-full" />
                            <p className="mt-2">New partnership with local restaurants.</p>
                        </div>
                        <div>
                            <img src="https://placehold.co/320x180" alt="News Image" className="rounded-lg w-full" />
                            <p className="mt-2">Expansion to new cities for delivery services.</p>
                        </div>
                        <div>
                            <img src="https://placehold.co/320x180" alt="News Image" className="rounded-lg w-full" />
                            <p className="mt-2">Introducing new features for restaurant partners.</p>
                        </div>
                    </div>
                    <div className="text-right mt-4">
                        <a href="#" className="text-blue-300 hover:text-blue-400">More</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
