"use client"
import React from 'react';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

export default function RestaurantPartnershipAgreement() {
    return (
        <>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-4 bg-black'>
                <Navbar />
                <h1 className="text-2xl font-bold mb-4 mt-10">Restaurant Partnership Agreement</h1>
                <p className="mb-4">
                    This Restaurant Partnership Agreement (&quot;Agreement&quot;) is entered into as of [Date], by and between [Platform Provider], a company organized and existing under the laws of [Jurisdiction], with its principal place of business at [Address] (&quot;Platform Provider&quot;), and [Restaurant Name], a restaurant located at [Restaurant Address] (&quot;Restaurant&quot;).
                </p>
                <h2 className="text-xl font-bold mb-2">Purpose:</h2>
                <p className="mb-4">
                    The purpose of this Agreement is to establish a partnership between Platform Provider and Restaurant for the provision of restaurant services through the Platform Provider&apos;s platform.
                </p>
                <h2 className="text-xl font-bold mb-2">Term:</h2>
                <p className="mb-4">
                    This Agreement shall commence on the Effective Date and shall continue in full force and effect until terminated by either party in accordance with the provisions of this Agreement.
                </p>
                <h2 className="text-xl font-bold mb-2">Responsibilities of Platform Provider:</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Platform Access: Platform Provider shall provide Restaurant with access to its platform for the purpose of receiving and processing orders.</li>
                    <li>Technical Support: Platform Provider shall provide technical support to Restaurant for any issues related to the use of the platform.</li>
                    <li>Marketing: Platform Provider may, at its discretion, undertake marketing activities to promote the services offered by Restaurant through the platform.</li>
                </ul>
                <h2 className="text-xl font-bold mb-2">Responsibilities of Restaurant:</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Menu Management: Restaurant shall be responsible for managing its menu on the platform, including updating prices, descriptions, and availability of items.</li>
                    <li>Order Fulfillment: Restaurant shall fulfill orders received through the platform in a timely manner and in accordance with the terms specified by Platform Provider.</li>
                    <li>Quality Control: Restaurant shall ensure that the quality of food and service provided to customers through the platform meets the standards set by Restaurant and complies with all applicable laws and regulations.</li>
                </ul>
                <h2 className="text-xl font-bold mb-2">Fees and Payments:</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Commission: Platform Provider shall be entitled to a commission on all orders placed through the platform. The commission rate shall be as agreed upon by both parties and specified in a separate agreement.</li>
                    <li>Payment Terms: Payments for orders received through the platform shall be processed by Platform Provider, and Restaurant shall receive payment from Platform Provider in accordance with the agreed-upon payment terms.</li>
                </ul>
                <h2 className="text-xl font-bold mb-2">Confidentiality:</h2>
                <p className="mb-4">
                    During the term of this Agreement and thereafter, both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed by the other party.
                </p>
                <h2 className="text-xl font-bold mb-2">Termination:</h2>
                <p className="mb-4">
                    Either party may terminate this Agreement upon written notice to the other party in the event of a material breach of any provision of this Agreement by the other party, which breach is not cured within [number] days of written notice thereof.
                </p>
                <h2 className="text-xl font-bold mb-2">Governing Law:</h2>
                <p className="mb-4">
                    This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction].
                </p>
                <h2 className="text-xl font-bold mb-2">Entire Agreement:</h2>
                <p className="mb-4">
                    This Agreement constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior and contemporaneous agreements and understandings, whether written or oral, relating to such subject matter.
                </p>
                <h2 className="text-xl font-bold mb-2">Amendments:</h2>
                <p className="mb-4">
                    This Agreement may be amended or modified only by a written instrument executed by both parties.
                </p>
                <p>
                    IN WITNESS WHEREOF, the parties hereto have executed this Agreement as of the Effective Date first above written.
                </p>
                <p>
                    [Signature of Platform Provider] [Signature of Restaurant]
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

