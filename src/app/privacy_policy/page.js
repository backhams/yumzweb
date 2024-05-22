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
        "Browse menus, place orders, and enjoy doorstep delivery from nearby restaurants with ease. Simplifying food delivery, one meal at a time!",
      keywords:
        "Online food delivery restaurant",
    };
  }
