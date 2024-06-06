import React from 'react'
import RestaurantPartnershipAgreement from './RestaurantPartnershipAgreement'

export default function page() {
  return (
    <>
    <RestaurantPartnershipAgreement/>
    </>
  )
}

export function generateMetadata() {
    return {
      title: "FleVo | Restaurant partnership",
      description:
        "Browse menus, place orders, and enjoy doorstep delivery from nearby restaurants with ease. Simplifying food delivery, one meal at a time!.",
      keywords:
        "Online food delivery restaurant",
    };
  }
