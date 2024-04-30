"use client"
import React from 'react';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

export default function DeliveryPartnerShipAgreement() {
    return (
        <>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-4 bg-black'>
                <Navbar />
                <h1 className="text-2xl font-bold mb-4 mt-10 text-white">Delivery Partner Agreement</h1>
                <p className="mb-4 text-white">
                    This Delivery Partner Agreement (&quot;Agreement&quot;) is entered into as of [Date], by and between [Your Company Name], a company organized and existing under the laws of [Jurisdiction], with its principal place of business at [Address] (&quot;Company&quot;), and [Delivery Partner Name], an individual residing at [Delivery Partner Address] (&quot;Delivery Partner&quot;).
                </p>
                <h2 className="text-xl font-bold mb-2 text-white">Purpose:</h2>
                <p className="mb-4 text-white">
                    The purpose of this Agreement is to establish a relationship between the Company and the Delivery Partner for the provision of delivery services.
                </p>
                <h2 className="text-xl font-bold mb-2 text-white">Term:</h2>
                <p className="mb-4 text-white">
                    This Agreement shall commence on the Effective Date and shall continue until terminated by either party in accordance with the provisions of this Agreement.
                </p>
                <h2 className="text-xl font-bold mb-2 text-white">Responsibilities of the Company:</h2>
                <ul className="list-disc ml-6 mb-4 text-white">
                    <li>Provide delivery orders to the Delivery Partner.</li>
                    <li>Provide necessary training and support to the Delivery Partner.</li>
                    <li>Ensure that the Delivery Partner receives timely payments for completed deliveries.</li>
                    <li>Assign orders based on Delivery Partner availability and location.</li>
                    <li>Handle customer complaints and disputes related to deliveries.</li>
                </ul>
                <h2 className="text-xl font-bold mb-2 text-white">Responsibilities of the Delivery Partner:</h2>
                <ul className="list-disc ml-6 mb-4 text-white">
                    <li>Accept delivery orders assigned by the Company.</li>
                    <li>Deliver orders to customers in a timely and professional manner.</li>
                    <li>Maintain the confidentiality of customer information and delivery details.</li>
                    <li>Provide regular updates on delivery status to the Company.</li>
                    <li>Resolve any disputes or issues related to deliveries promptly and professionally.</li>
                    <li>Ensure that all delivered items are handled with care and delivered intact.</li>
                </ul>
                <h2 className="text-xl font-bold mb-2 text-white">Payment:</h2>
                <p className="mb-4">
                    The Company shall pay the Delivery Partner a fee for each completed delivery, as agreed upon by both parties. Payments shall be made on a [frequency] basis via [payment method].
                </p>
                <h2 className="text-xl font-bold mb-2 text-white">Account Verification:</h2>
                <p className="mb-4">
                    The Delivery Partner&apos;s account shall be verified by the Company prior to commencing deliveries. Verification may include providing identification documents and completing a background check.
                </p>
                <h2 className="text-xl font-bold mb-2 text-white">Termination:</h2>
                <p className="mb-4">
                    Either party may terminate this Agreement upon written notice to the other party. The Company reserves the right to terminate the Delivery Partner&apos;s account for any violation of this Agreement or failure to meet performance standards.
                </p>
                <h2 className="text-xl font-bold mb-2 text-white">Dispute Resolution:</h2>
                <p className="mb-4">
                    In the event of a dispute regarding a delivery, the Delivery Partner and the Company shall work together to resolve the issue. If a resolution cannot be reached, the matter may be escalated to arbitration or mediation.
                </p>
                <h2 className="text-xl font-bold mb-2 text-white">Failure to Deliver:</h2>
                <p className="mb-4">
                    If an order fails to be delivered for any reason, it will be marked as a dispute and investigated by the Company. The Delivery Partner may be required to provide an explanation and evidence regarding the failed delivery.
                </p>
                <p>
                    IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the Effective Date first above written.
                </p>
                <p>
                    [Signature of Company] [Signature of Delivery Partner]
                </p>
                <p>
                    [Printed Name and Title] [Printed Name and Title]
                </p>
                <p>
                    [Date] [Date]
                </p>
                <Footer/>
            </div>
        </>
    );
}
