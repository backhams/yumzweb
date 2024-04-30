import React from 'react'
import PrivacyPolicy from './PrivacyPolicy'

export default function page() {
  return (
    <>
    <PrivacyPolicy/>
    </>
  )
}


export function generateMetadata() {
    return {
      title: "Privacy Policy",
      description:
        "Embark on a global shopping journey without boundaries at xfery, where you can access a world of premium products and exclusive offers, all with the added advantage of FREE worldwide shipping. Your ultimate e-commerce affiliate destination for seamless international shopping experiences.",
      keywords:
        "Online Shopping, E-commerce Deals, Best Products,Affiliate Marketing,Discount Offers,Quality Products,Fashion Trends,Electronics Deals,Shopping Guide,Trusted Retailers,Product Reviews,Top Brands,Home Essentials,Shopping Experience",
    };
  }