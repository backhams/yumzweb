import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="flex justify-between items-center py-4 bg-black">
            <div className="text-5xl font-semibold text-white">Yumz</div>
            <div className="space-x-4 flex items-center">
                <Link href="/" className="hover:text-green-300 hover:underline text-white">Home</Link>
                <Link href="#" className="hover:text-green-300 hover:underline text-white">Services</Link>
                <Link href="#" className="hover:text-green-300 hover:underline text-white">About Us</Link>
                <Link href="#" className="hover:text-green-300 hover:underline text-white">Contact Us</Link>
                <div className="relative inline-block text-left">
                    <button onClick={toggleDropdown} type="button" className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-expanded="true" aria-haspopup="true">
                        Terms and Conditions
                        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H4a1 1 0 010-2h10.586l-5.293-5.293A1 1 0 0110 3z" clipRule="evenodd" />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <div className="py-1" role="none">
                                <Link href="restaurant_partnership_agreement" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Restaurant Partnership Agreement</Link>
                                <Link href="delivery_partnership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Delivery Partnership Agreement</Link>
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
