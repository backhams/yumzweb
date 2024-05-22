import React from 'react'
import AboutUs from './AboutUs'

export default function page() {
  return (
    <>
    <AboutUs/>
    </>
  )
}

export function generateMetadata() {
    return {
      title: "Flavo | About Us",
      description:
        "Browse menus, place orders, and enjoy doorstep delivery from nearby restaurants with ease. Simplifying food delivery, one meal at a time!",
      keywords:
        "Online food delivery restaurnant",
    };
  }