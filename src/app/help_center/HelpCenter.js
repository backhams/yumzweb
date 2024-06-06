"use client"
import React, { useState } from 'react';
import Navbar from '../navbar/page';
import Footer from '../footer/page';

export default function HelpCenter() {
    const [searchQuery, setSearchQuery] = useState('');

    const content = [
        {
            title: "How to Register",
            text: `To register on FleVo, simply follow these steps:
            
            1. Open the FleVo app or website.
            2. Click on the "Sign Up" or "Register" button.
            3. Fill in the required information, such as your name, email address, and password.
            4. Agree to the terms and conditions.
            5. Click on the "Register" or "Sign Up" button to create your account.
            
            That's it! You are now registered on FleVo and can start exploring and enjoying our services.`
        },
        {
            title: "How to Get Verified",
            text: `To get verified on FleVo, follow these steps:
            
            1. Log in to your FleVo account.
            2. Navigate to the verification section in your account settings.
            3. Follow the instructions to provide the necessary documentation for verification, such as your ID or business license.
            4. Submit your documents for review.
            
            Once your documents are reviewed and approved, your account will be verified, and you'll gain access to additional features and benefits on FleVo.`
        },
        {
            title: "How to Cancel an Order",
            text: `To cancel an order on FleVo, follow these steps:
            
            1. Open the FleVo app.
            2. Go to your order history or active orders section.
            3. Find the order you wish to cancel and select it.
            4. Look for the cancellation option and follow the prompts to cancel your order.
            
            Please note that you can only cancel an order before it has been confirmed by the restaurant. Once the restaurant confirms the order, it cannot be canceled.`
        },
        {
            title: "Payment",
            text: `FleVo offers multiple payment options to make your ordering experience convenient and hassle-free. You can pay for your orders using:
            
            1. Credit or Debit Card
            2. Online Wallets
            3. Cash on Delivery
            
            Choose the payment method that suits you best and enjoy delicious meals delivered straight to your doorstep!`
        },
        {
            title: "What is a Dispute Order?",
            text: `A dispute order occurs when there is an issue with the delivery or the quality of the food. Common reasons for disputing an order include:
            
            1. Missing items from the order.
            2. Incorrect items received.
            3. Food delivered late or cold.
            4. Food quality does not meet expectations.
            
            If you encounter any of these issues with your order, you can file a dispute through the FleVo app or contact our customer support team for assistance.`
        },
        {
            title: "Customer Rejects Order or Undeliverable",
            text: `If a customer rejects an order upon delivery or if the delivery is deemed undeliverable, the following steps may be taken:
            
            1. The delivery partner may attempt to contact the customer to resolve the issue.
            2. If the issue cannot be resolved, the order may be canceled, and the customer may be refunded.
            3. In some cases, the restaurant may prepare a new order for delivery, subject to additional charges and availability.
            
            We strive to ensure a smooth and satisfactory experience for both customers and delivery partners in such situations.`
        },
        {
            title: "How to Change Account Settings",
            text: `Need to update your account information? Follow these simple steps:
        
            1. Log in to your FleVo account.
            2. Navigate to the account settings section.
            3. Locate the option to edit your profile or account details.
            4. Make the desired changes, such as updating your email address or password.
            5. Save your changes.
        
            Your account settings are now updated and ready to use!`
        },
        {
            title: "How to Track Your Order",
            text: `Wondering when your delicious meal will arrive? Here's how to track your order:
        
            1. Open the FleVo app.
            2. Go to your order history or active orders section.
            3. Find the order you want to track and select it.
            4. Look for the option to track your order status.
            5. Follow the real-time updates to see the current status of your delivery.
        
            With our tracking feature, you'll never have to wonder about your order's whereabouts again!`
        },
        {
            title: "How to Leave Feedback",
            text: `Have a suggestion or want to share your experience? Leaving feedback is easy:
        
            1. Log in to your FleVo account.
            2. Navigate to the order history or recent orders section.
            3. Find the order you want to leave feedback for and select it.
            4. Look for the option to leave feedback or rate your experience.
            5. Share your thoughts and submit your feedback.
        
            We value your input and use it to improve our service for all users.`
        },
        {
            title: "How to Contact Customer Support",
            text: `Encountered an issue or need assistance? Our customer support team is here to help:
        
            1. Open the FleVo app.
            2. Navigate to the help or support section.
            3. Look for the option to contact customer support.
            4. Choose your preferred method of contact, such as live chat or email.
            5. Describe your issue or query in detail and submit your request.
        
            Our dedicated support team will promptly assist you with any questions or concerns you may have.`
        },
        {
            title: "How to Redeem Promotional Codes",
            text: `Got a promotional code? Here's how to redeem it for discounts or rewards:
        
            1. Log in to your FleVo account.
            2. Proceed to the checkout page when placing your order.
            3. Look for the option to apply a promotional code or voucher.
            4. Enter the code in the designated field.
            5. Click on the apply button to redeem the code and enjoy your discount.
        
            It's that easy to save on your next order with FleVo promotional codes!`
        },
        {
            title: "How to View Order History",
            text: `Want to check your past orders? Here's how to view your order history:
        
            1. Open the FleVo app.
            2. Navigate to your account settings or profile.
            3. Find the option for order history or past orders.
            4. Select the timeframe or specific order you wish to view.
            5. Review your past orders and details such as order status and items purchased.
        
            Keep track of your ordering history for easy reference and reordering!`
        },
        {
            title: "How to Add Items to Your Cart",
            text: `Ready to place an order? Here's how to add items to your cart:
        
            1. Browse through the available menu items on the FleVo app or website.
            2. Select the items you want to order by clicking or tapping on them.
            3. Choose the quantity and any customization options, such as toppings or sides.
            4. Click on the "Add to Cart" button for each item.
            5. Review your cart to ensure all desired items are included before proceeding to checkout.
        
            Adding items to your cart is the first step to enjoying a delicious meal with FleVo!`
        },
        {
            title: "How to Change or Cancel Your Order",
            text: `Need to make changes to your order or cancel it? Follow these steps:
        
            1. Log in to your FleVo account.
            2. Go to your order history or active orders section.
            3. Find the order you wish to modify or cancel and select it.
            4. Look for the options to change items or cancel the order.
            5. Follow the prompts to make the desired changes or cancel the order.
        
            Please note that changes or cancellations may be subject to restaurant policies and order status.`
        },
        {
            title: "How to Provide Feedback on Delivery Experience",
            text: `Had a great delivery experience or want to share feedback? Here's how:
        
            1. Receive your order from the delivery partner.
            2. Review the delivery experience, including timeliness and service quality.
            3. Open the FleVo app and navigate to your order history.
            4. Find the completed order and select it.
            5. Look for the option to rate the delivery experience and provide feedback.
        
            Your feedback helps us improve our delivery services and ensures a better experience for all users.`
        },
        // Add more sections as needed        
        
        
    ];

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredContent = content.filter(item => {
        const lowercaseQuery = searchQuery.toLowerCase();
        const queryWords = lowercaseQuery.split(' ');
        const titleWords = item.title.toLowerCase().split(' ');
        return (
            item.title.toLowerCase().includes(lowercaseQuery) ||
            item.text.toLowerCase().includes(lowercaseQuery) ||
            queryWords.some(word => titleWords.includes(word))
        );
    });
    

    return (
        <>
            <div className='mx-auto px-4 sm:px-6 lg:px-8 pt-4 bg-black mt-48'>
                <Navbar />
                <div className='md:mx-28 mb-16'>
                    <h1 className="text-2xl font-bold mb-4 mt-10 text-white">Help Center</h1>
                    <input
                        type="text"
                        placeholder="Search for answers..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="mb-4 px-4 py-2 w-full bg-white text-black border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    {filteredContent.map((item, index) => (
                        <div key={index} className="mb-4">
                            <h2 className="text-xl font-bold mb-2 text-white">{item.title}</h2>
                            <div className="text-white">{item.text}</div>
                        </div>
                    ))}
                    {filteredContent.length === 0 && (
                        <p className="text-white">No results found.</p>
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
}
