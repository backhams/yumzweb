"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isDropdownOpen && !event.target.closest('.dropdown')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isDropdownOpen]);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleDropdownHover = (isHovering) => {
        setIsDropdownOpen(isHovering);
    };

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="flex flex-col w-full sm:flex-row justify-between items-center py-4 bg-black fixed top-0">
            <div className="text-5xl font-semibol mb-4 sm:mb-0 text-orange-500">Flavo</div>
            <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-8 sm:ml-4 mr-10">
                <Link href="/" className="block text-center hover:text-green-300 hover:underline text-white mb-2 sm:mb-0">Home</Link>
                <Link href="help_center" className="block text-center hover:text-green-300 hover:underline text-white mb-2 sm:mb-0">Get Help</Link>
                <Link href="about_us" className="block text-center hover:text-green-300 hover:underline text-white mb-2 sm:mb-0">About Us</Link>
                <Link href="contact_us" className="block text-center hover:text-green-300 hover:underline text-white mb-2 sm:mb-0">Contact Us</Link>
                <div
                    className="relative inline-block text-left dropdown"
                    onMouseEnter={() => handleDropdownHover(true)}
                    onMouseLeave={() => handleDropdownHover(false)}
                >
                    <button
                        onClick={handleDropdownClick}
                        type="button"
                        className="inline-flex justify-center w-full sm:w-auto rounded-md border border-transparent shadow-sm px-4 py-2 text-sm font-medium text-white hover:text-orange-300"
                    >
                        Terms and Conditions
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H4a1 1 0 010-2h10.586l-5.293-5.293A1 1 0 0110 3z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div className="origin-top-right absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <div className="py-1" role="none">
                                <Link href="restaurant_partnership_agreement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text" role="menuitem">Restaurant Partnership Terms&Condition</Link>
                                <Link href="delivery_partnership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Delivery Partnership Terms&Condition</Link>
                                <Link href="privacy_policy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Privacy Policy</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
