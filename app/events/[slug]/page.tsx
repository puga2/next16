import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const EventDetailsPage = async({params}:{params:Promise<{slug:string}>}) => {
  const {slug} = await params;
  const request = await fetch(`${BASE_URL}/api/events/${slug}`);
  const {event:{description,image}} = await request.json();
  
  if(!description) return notFound();
  return (
   <section id='event'>
   <div className="header">
     <h1>Event Description</h1>
    <p className='mt-2'>{description}</p>
   </div>
   <div className="details">
    {/* left side - Event Content  */}
    {/* right side - Booking Form */}
    <div className="content">
    <Image src={image} alt="Event Banner" width={800} height={800} className='banner'></Image>
    </div>
   </div>
   </section>
  )
}

export default EventDetailsPage