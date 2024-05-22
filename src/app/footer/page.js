import React from 'react';
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-white">About Us</h4>
            <p className="text-gray-300">At Flavo, we&apos;re more than just a food delivery platform – we&apos;re a comprehensive solution for all, including delivery partners and restaurants, powered by xfery.com. Through our innovative app, we facilitate seamless connections between food enthusiasts, eateries, and delivery partners, ensuring convenience and satisfaction for everyone involved. Join us in reshaping the food industry landscape, together</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-white">Useful Links</h4>
            <ul>
              <li><Link href="about_us" className="text-gray-300 hover:text-orange-500">About Us</Link></li>
              <li><Link href="contact_us" className="text-gray-300 hover:text-orange-500">Contact Us</Link></li>
              <li><Link href="privacy_policy" className="text-gray-300 hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link href="/restaurant_partnership_agreement" className="text-gray-300 hover:text-orange-500">Restaurant Partnership</Link></li>
              <li><Link href="delivery_partnership" className="text-gray-300 hover:text-orange-500">Delivery Partnership</Link></li>
              <li><Link href="/faq" className="text-gray-300 hover:text-orange-500">FAQ</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2 text-white">Follow Us</h4>
            <ul className="flex">
              <li className="mr-4"><Link href="https://twitter.com/YourTwitter" className="text-gray-300 hover:text-orange-500"><i className="fab fa-twitter"></i></Link></li>
              <li className="mr-4"><a href="https://facebook.com/YourFacebook" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500"><i className="fab fa-facebook-f"><FaFacebook /></i></a></li>
              <li className="mr-4"><a href="https://www.instagram.com/Flavo968" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500"><i className="fab fa-instagram"><SiInstagram /></i></a></li>
              <li><Link href="https://linkedin.com/company/YourLinkedIn" className="text-gray-300 hover:text-orange-500"><i className="fab fa-linkedin-in"></i></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-white">
        &copy; {new Date().getFullYear()} Flavo. All Rights Reserved. Made with ❤️ by <Link href="https://xfery.com" className="text-blue-500">xfery.com</Link>
      </div>
    </footer>
  );
};

export default Footer;
