import React from 'react';
import Home from './home/Home';

export default function page() {
  return (
    <main>
      <Home />
    </main>
  );
}


export function generateMetadata() {
  return {
    title: "Flavo",
    description:
      "Browse menus, place orders, and enjoy doorstep delivery from nearby restaurants with ease. Simplifying food delivery, one meal at a time!",
    keywords:
      "Online food delivery restaurant",
  };
}