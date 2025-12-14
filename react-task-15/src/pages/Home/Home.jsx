import React from "react";
import Slider from "../../components/Slider/Slider";

export default function Home() {
  const imageData = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  ];

  return (
    <div className='p-10'>
      <h1 className='text-2xl font-bold mb-6 text-center'>Image Slider</h1>
      <Slider images={imageData} />
    </div>
  );
}
