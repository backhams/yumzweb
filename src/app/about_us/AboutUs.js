import React from 'react';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

export default function AboutUs() {
    return (
        <>
            <div className='mx-auto px-4 sm:px-6 lg:px-8 pt-4 bg-black mt-48'>
                <Navbar />
                <div className='md:mx-28 mb-16'>
                    <h1 className="text-2xl font-bold mb-4 mt-10 text-white">About Us</h1>
                    <p className="mb-4 text-white">
                        Welcome to Flavo, powered by xfery.com – your all-in-one platform revolutionizing the food industry!
                    </p>
                    <p className="mb-4 text-white">
                        At Flavo, we&apos;ve crafted a seamless experience where customers can indulge in their favorite dishes with just a few taps. Our innovative food delivery app connects customers with a diverse range of restaurants, ensuring that cravings are satisfied with ease.
                    </p>
                    <p className="mb-4 text-white">
                        For restaurant owners, we offer a powerful platform to showcase their menus and attract hungry customers. By listing their offerings on our app, restaurants can expand their reach and grow their business in the digital age.
                    </p>
                    <p className="mb-4 text-white">
                        But that&apos;s not all. We understand the importance of efficient delivery services, which is why we empower delivery partners to thrive on our platform. Delivery partners can seamlessly accept orders, ensuring that delicious meals reach customers&apos; doorsteps promptly and professionally.
                    </p>
                    <p className="mb-4 text-white">
                        Our commitment doesn&apos;t stop there. We prioritize the success of our partners by providing necessary training, support, and timely payments for completed deliveries. Whether it&apos;s resolving disputes or handling customer complaints, we&apos;ve got you covered every step of the way.
                    </p>
                    <p className="mb-4 text-white">
                        With Flavo, it&apos;s more than just food delivery—it&apos;s a partnership built on trust, reliability, and excellence. Join us in redefining the food delivery experience for customers, restaurants, and delivery partners alike.
                    </p>
                    <p className="mb-4 text-white">
                        Experience the future of food delivery with Flavo. Welcome to a world where convenience meets culinary delight.
                    </p>
                </div>
                <Footer />
            </div>
        </>
    );
}
