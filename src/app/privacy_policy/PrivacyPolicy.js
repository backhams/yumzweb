"use client"
import React from 'react';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

export default function PrivacyPolicy() {
    return (
        <>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-4'>
                <Navbar />
                <h1 className="text-2xl font-bold mb-4 mt-10">Privacy Policy</h1>
                <p className="mb-4">
                    This Privacy Policy (&quot;Policy&quot;) explains how [Your Company Name] collects, uses, and discloses personal information collected from users (&quot;User&quot; or &quot;Users&quot;) of the [Your Website or App] website or mobile application (&quot;Service&quot;).
                </p>
                <h2 className="text-xl font-bold mb-2">Information Collection and Use:</h2>
                <p className="mb-4">
                    [Your Company Name] may collect personal information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features, or resources we make available on our Service.
                </p>
                <h2 className="text-xl font-bold mb-2">How We Use Collected Information:</h2>
                <p className="mb-4">
                    [Your Company Name] may collect and use Users&apos; personal information for the following purposes:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
                    <li>To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Service.</li>
                    <li>To improve our Service: We may use feedback you provide to improve our products and services.</li>
                    <li>To process payments: We may use the information Users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
                </ul>
                <h2 className="text-xl font-bold mb-2">Data Security:</h2>
                <p className="mb-4">
                    [Your Company Name] is committed to ensuring that your information is secure. We have implemented appropriate technical and organizational measures to safeguard and secure the information we collect online.
                </p>
                <h2 className="text-xl font-bold mb-2">Payment Transactions:</h2>
                <p className="mb-4">
                    We use secure payment gateways to process payment transactions. Your payment information is encrypted and transmitted securely to our payment processors. We do not store your payment information on our servers.
                </p>
                <h2 className="text-xl font-bold mb-2">Collection and Use of Non-Personal Information:</h2>
                <p className="mb-4">
                    We may collect non-personal information about Users whenever they interact with our Service. Non-personal information may include the browser name, the type of computer, and technical information about Users&apos; means of connection to our Service, such as the operating system and the Internet service providers utilized, and other similar information.
                </p>
                <h2 className="text-xl font-bold mb-2">Changes to this Privacy Policy:</h2>
                <p className="mb-4">
                    [Your Company Name] has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.
                </p>
                <p>
                    This Privacy Policy was last updated on [Date].
                </p>
                <Footer/>
            </div>
        </>
    );
}

