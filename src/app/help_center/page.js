import React from 'react'
import HelpCenter from './HelpCenter'

export default function page() {
  return (
    <>
    <HelpCenter/>
    </>
  )
}
export function generateMetadata() {
    return {
      title: "Flavo | Help Center",
      description:
        "Browse menus, place orders, and enjoy doorstep delivery from nearby restaurants with ease. Simplifying food delivery, one meal at a time!",
      keywords:
        "Online food delivery restaurant",
    };
  }
