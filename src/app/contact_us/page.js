import React from 'react'
import ContactUs from './ContactUs'

export default function page() {
  return (
    <>
    <ContactUs/>
    </>
  )
}
export function generateMetadata() {
    return {
      title: "FleVo | Contact Us",
      description:
        "Browse menus, place orders, and enjoy doorstep delivery from nearby restaurants with ease. Simplifying food delivery, one meal at a time!",
      keywords:
        "online food delivery restaurant",
    };
  }
