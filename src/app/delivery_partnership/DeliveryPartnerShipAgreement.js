"use client";

import React from 'react';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

export default function DeliveryPartnerShipAgreement() {
    return (
        <>
            <div className='mx-auto px-4 sm:px-6 lg:px-8 pt-4 bg-black mt-48'>
                <Navbar />
                <div className='md:mx-28 mb-16'>
                    <h1 className="text-2xl font-bold mb-4 mt-10 text-white">Delivery Partner Agreement</h1>
                    <p className="mb-4 text-white">
                        These Terms and Conditions (&quot;Terms&quot;) govern your participation as a delivery partner (&quot;Delivery Partner&quot;) with FleVo (&quot;Platform&quot;). By signing up or using the Platform, you agree to these Terms. If you do not agree, do not use the Platform.
                    </p>
                    
                    <h2 className="text-xl font-bold mb-2 text-white">Eligibility</h2>
                    <p className="mb-4 text-white">
                        1.1 You must be at least 18 years old to become a delivery partner.<br />
                        1.2 You must possess a valid driving license if using a motor vehicle for deliveries.<br />
                        1.3 You must have access to a vehicle (bike, motorbike, car, etc.) that is in good working condition.<br />
                        1.4 You must have valid vehicle insurance as per local laws.<br />
                        1.5 You must possess a smartphone with the FleVo app installed to receive orders and updates.
                    </p>

                    <h2 className="text-xl font-bold mb-2 text-white">Registration and Account</h2>
                    <p className="mb-4 text-white">
                        2.1 To register as a delivery partner, you must provide accurate and complete information, including personal details, vehicle information, and any required documentation for verification.<br />
                        2.2 You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.
                    </p>

                    <h2 className="text-xl font-bold mb-2 text-white">Delivery Obligations</h2>
                    <p className="mb-4 text-white">
                        3.1 You agree to accept and complete delivery orders in a timely and professional manner.<br />
                        3.2 You must follow the instructions provided for each delivery and ensure safe handling of items.<br />
                        3.3 You must comply with all traffic laws and regulations while performing deliveries.<br />
                        3.4 You should not accept deliveries if you are not in a position to fulfill them promptly.
                    </p>

                    <h2 className="text-xl font-bold mb-2 text-white">Payment</h2>
                    <p className="mb-4 text-white">
                        4.1 You will receive payment for each completed delivery, as agreed upon by you and FleVo.<br />
                        4.2 Payments will be made on a regular basis through the preferred payment method specified by you.<br />
                        4.3 No commission or fees will be deducted from your earnings for completed deliveries.
                    </p>

                    <h2 className="text-xl font-bold mb-2 text-white">Order Acceptance and Termination</h2>
                    <p className="mb-4 text-white">
                        5.1 You are expected to accept and complete the delivery orders assigned to you. Consistently rejecting or not accepting orders may impact your account status.<br />
                        5.2 If you fail to deliver an order after pickup within one hour, it will be marked as a dispute. You must resolve any dispute orders to come online and accept new orders again.<br />
                        5.3 You will not have an option to reject or mark orders as undelivered directly; all such orders will automatically go into the dispute order list for resolution.
                    </p>

                    <h2 className="text-xl font-bold mb-2 text-white">Dispute Resolution</h2>
                    <p className="mb-4 text-white">
                        6.1 If an order is not delivered within one hour after pickup, it will be marked as a dispute.<br />
                        6.2 To resolve a dispute, you must update the order status in the dispute order list.<br />
                        6.3 If the order was delivered but not updated due to some reason, you can mark it as delivered in the dispute order list.<br />
                        6.4 If the order was not delivered due to any reason, you must use the resolve button in the dispute section, which will redirect you to WhatsApp to discuss the issue with our support team. You need to explain why the order was not delivered. Our team will then update the order status accordingly.
                    </p>

                    <h2 className="text-xl font-bold mb-2 text-white">Safety and Conduct</h2>
                    <p className="mb-4 text-white">
                        7.1 You must adhere to all safety protocols, including wearing helmets if riding a bike or motorbike.<br />
                        7.2 You must conduct yourself in a professional and courteous manner at all times.<br />
                        7.3 Any form of misconduct, including theft or damage to items, may result in termination of your account.
                    </p>

                    <h2 className="text-xl font-bold mb-2 text-white">Termination</h2>
                    <p className="mb-4 text-white">
                        8.1 FleVo reserves the right to terminate or suspend your access to the Platform at any time, with or without cause, and without prior notice.<br />
                        8.2 Upon termination, all rights and obligations under these Terms will cease, except those that by their nature should survive termination.
                    </p>

                    <h2 className="text-xl font-bold mb-2 text-white">Changes to Terms</h2>
                    <p className="mb-4 text-white">
                        9.1 FleVo reserves the right to update or modify these Terms at any time. Changes will be effective upon posting the revised Terms on the Platform. Your continued use of the Platform after changes are posted constitutes acceptance of the changes.
                    </p>

                    <h2 className="text-xl font-bold mb-2 text-white">Contact Information</h2>
                    <p className="mb-4 text-white">
                        10.1 If you have any questions, concerns, or requests regarding these Terms or our services, please contact us at yumz.contact@gmail.com.
                    </p>
                </div>
                <Footer/>
            </div>
        </>
    );
}
