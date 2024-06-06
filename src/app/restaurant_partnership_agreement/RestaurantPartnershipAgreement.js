"use client"
import React from 'react';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

export default function RestaurantTermsAndConditions() {
    return (
        <>
            <div className='mx-auto px-4 sm:px-6 lg:px-8 pt-4 bg-black mt-48'>
                <Navbar />
                <div className='md:mx-28 mb-16'>
                    <h1 className="text-2xl font-bold mb-4 mt-10 text-white">Terms and Conditions for Restaurants</h1>
                    <p className="mb-4 text-white">
                        These Terms and Conditions (&quot;Terms&quot;) govern your use of the FleVo platform (&quot;Platform&quot;) as a restaurant partner. By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Platform.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Registration and Account</h2>
                    <p className="mb-4 text-white">
                        1.1 To register as a restaurant partner on the Platform, you must provide accurate and complete information about your restaurant, including but not limited to business name, contact details, menu, and necessary documentation for verification.<br />
                        1.2 You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account. You agree to accept responsibility for all activities that occur under your account.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Listing and Menu</h2>
                    <p className="mb-4 text-white">
                        2.1 By listing your restaurant on the Platform, you agree to provide accurate and up-to-date information about your menu, pricing, availability, and any other relevant details.<br />
                        2.2 You have the sole responsibility for ensuring the quality, accuracy, and legality of the food items listed on the Platform.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Orders and Commission</h2>
                    <p className="mb-4 text-white">
                        3.1 You agree to pay a commission of 27% per order (the &quot;Commission&quot;) to FleVo for orders placed through the Platform.<br />
                        3.2 The Commission covers the use of the Platform, payment processing, marketing, and other associated costs.<br />
                        3.3 FleVo reserves the right to adjust the Commission percentage with prior notice to restaurant partners.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Payment</h2>
                    <p className="mb-4 text-white">
                        4.1 FleVo will remit the payment for orders, minus the Commission, to the restaurant partner on a regular basis, as agreed upon between FleVo and the restaurant partner.<br />
                        4.2 Payments will be made through the preferred payment method specified by the restaurant partner.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Delivery and Fulfillment</h2>
                    <p className="mb-4 text-white">
                        5.1 You are responsible for timely and accurate fulfillment of orders placed through the Platform.<br />
                        5.2 If an order is not delivered within 2 hours of the customer placing the order, the order will be placed in the dispute order list. You must resolve the dispute promptly to bring your restaurant back online.<br />
                        5.3 If you accept an order and the delivery partner fails to accept the order or does not reach the restaurant location, the order will be placed in the dispute list. Repeat occurrences may lead to termination of your account.<br />
                        5.4 You should not come online unless you are ready to fulfill orders. Failure to fulfill orders may result in account termination.<br />
                        5.5 In case of any delays or issues with order fulfillment, you are required to promptly notify the customer and FleVo.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Cancellation and Refunds</h2>
                    <p className="mb-4 text-white">
                        6.1 You may cancel an order if it cannot be fulfilled due to reasons such as unavailability of ingredients or unforeseen circumstances. However, you must inform FleVo and the customer promptly.<br />
                        6.2 Refunds for canceled orders will be handled in accordance with the FleVo refund policy.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Quality Assurance</h2>
                    <p className="mb-4 text-white">
                        7.1 You agree to maintain high standards of food quality, hygiene, and safety in the preparation and delivery of food items listed on the Platform.<br />
                        7.2 FleVo reserves the right to conduct periodic inspections or audits of your restaurant premises to ensure compliance with quality standards.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Customer Service</h2>
                    <p className="mb-4 text-white">
                        8.1 You are responsible for providing prompt and courteous customer service to users of the Platform, including addressing inquiries, complaints, and feedback in a timely manner.<br />
                        8.2 Any disputes or complaints from customers should be resolved professionally and amicably, with the aim of maintaining customer satisfaction.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Advertising and Promotions</h2>
                    <p className="mb-4 text-white">
                        9.1 FleVo may feature your restaurant and menu items in promotional campaigns, advertisements, or marketing materials to promote the Platform.<br />
                        9.2 You agree to cooperate with FleVo in promotional activities and provide any necessary assistance or materials as requested.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Legal Compliance</h2>
                    <p className="mb-4 text-white">
                        10.1 You agree to comply with all applicable laws, regulations, and industry standards governing the operation of restaurants and the sale of food products.<br />
                        10.2 You are responsible for obtaining any necessary licenses, permits, or certifications required for operating your restaurant and selling food items through the Platform.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Data Privacy</h2>
                    <p className="mb-4 text-white">
                        11.1 You acknowledge and agree that FleVo may collect, store, and process personal data provided by you or generated through your use of the Platform in accordance with the FleVo Privacy Policy.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Intellectual Property</h2>
                    <p className="mb-4 text-white">
                        12.1 You retain all rights to the intellectual property associated with your restaurant, including but not limited to trademarks, logos, and menu items.<br />
                        12.2 By listing your restaurant on the Platform, you grant FleVo a non-exclusive, worldwide, royalty-free license to use, display, and promote your restaurant name, logo, and menu for the purposes of operating and promoting the Platform.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Indemnification</h2>
                    <p className="mb-4 text-white">
                        13.1 You agree to indemnify and hold harmless FleVo, its affiliates, officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, or expenses arising out of or related to your use of the Platform or any breach of these Terms.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Termination</h2>
                    <p className="mb-4 text-white">
                        14.1 FleVo reserves the right to terminate or suspend your access to the Platform at any time, with or without cause, and without prior notice.<br />
                        14.2 Upon termination, all rights and obligations under these Terms will cease, except those that by their nature should survive termination.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Changes to Terms</h2>
                    <p className="mb-4 text-white">
                        15.1 FleVo reserves the right to update or modify these Terms at any time, and any changes will be effective upon posting the revised Terms on the Platform. Your continued use of the Platform after the posting of changes constitutes your acceptance of such changes.
                    </p>
                    <h2 className="text-xl font-bold mb-2 text-white">Contact Information</h2>
                    <p className="mb-4 text-white">
                        16.1 If you have any questions, concerns, or requests regarding these Terms or our services, please contact us at yumz.contact@gmail.com.
                    </p>
                </div>
                <Footer/>
            </div>
        </>
    );
}

