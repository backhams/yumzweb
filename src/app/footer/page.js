import React from 'react';
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa6";
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">About Us</h4>
            <p className="text-gray-300">Short description about your website goes here.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
            <ul>
              <li><Link href="/about" className="text-gray-300 hover:text-blue-500">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-500">Contact Us</Link></li>
              <li><Link href="privacy_policy" className="text-gray-300 hover:text-blue-500">Privacy Policy</Link></li>
              <li><Link href="/restaurant_partnership_agreement" className="text-gray-300 hover:text-blue-500">Restaurant Partnership</Link></li>
              <li><Link href="delivery_partnership" className="text-gray-300 hover:text-blue-500">Delivery Partnership</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-blue-500">FAQ</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <ul className="flex">
              <li className="mr-4"><Link href="https://twitter.com/YourTwitter" className="text-gray-300 hover:text-blue-500"><i className="fab fa-twitter"></i></Link></li>
              <li className="mr-4"><Link href="https://facebook.com/YourFacebook" className="text-gray-300 hover:text-blue-500"><i className="fab fa-facebook-f"><FaFacebook /></i></Link></li>
              <li className="mr-4"><Link href="https://instagram.com/YourInstagram" className="text-gray-300 hover:text-blue-500"><i className="fab fa-instagram"><SiInstagram /></i></Link></li>
              <li><Link href="https://linkedin.com/company/YourLinkedIn" className="text-gray-300 hover:text-blue-500"><i className="fab fa-linkedin-in"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-600">
        &copy; {new Date().getFullYear()} Yumz. All Rights Reserved. Made with ❤️ by <Link href="https://xfery.com" className="text-blue-500">xfery.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
