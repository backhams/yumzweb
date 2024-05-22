import React from 'react'
import DeliveryPartnerShipAgreement from './DeliveryPartnerShipAgreement'

export default function page() {
  return (
   <>
   <DeliveryPartnerShipAgreement/>
   </>
  )
}

export function generateMetadata() {
    return {
      title: "Yumz | Delivery Partnership",
      description:
        "Browse menus, place orders, and enjoy doorstep delivery from nearby restaurants with ease. Simplifying food delivery, one meal at a time!",
      keywords:
        "Online food delivery restaurant",
    };
  }

