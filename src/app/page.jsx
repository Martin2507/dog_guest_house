'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() 
{
  const [dogGallery] = useState
  (
    [
      '/image_1.jpeg',
      '/image_2.jpeg',
      '/image_3.jpeg',
      '/image_4.jpeg',
      '/image_5.jpeg',
      '/image_6.jpeg',
      '/image_7.jpeg',
      '/image_8.jpeg',
    ]
  );

  const [houseGallery] = useState
  (
    [
      "/Outside_Photo_2.jpeg",
      "/Outside_Photo_3.jpeg",
      "/Outside_Photo_4.jpeg",
      "/Outside_Photo_5.jpeg",
      "/Outside_Photo_6.jpeg",
    ]
  )

  return (
    <main className="font-[Verdana] text-lg min-h-screen bg-gradient-to-b from-[#fffbed] via-[#F4C18A] to-[#B97E5A]">
      
      {/* Header */}
      <header className="w-full">
        <div className="w-full relative">
          <Image
            src="/Logo.png"
            alt="Dog Guest House Banner"
            width={1920}
            height={500}
            className="w-full h-auto object-contain mx-auto md:max-w-[600px]"
            priority
          />
        </div>
      </header>

      {/* About Section */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <div className="md:order-1">
            <Image
              src="/Outside_Photo_1.jpeg"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-xl mx-auto"
            />
          </div>
          <div className="text-gray-800 bg-gray-200/40 bg-opacity-70 p-6 rounded-xl shadow-md">
            <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">About Us</h2>
            <p>
              We are a small, family-run dog boarding service offering a home-from-home experience for your furry friends.
              Dogs stay inside our family home, where they enjoy comfort, companionship, and individual attention in a relaxed, safe environment.
              We welcome only a limited number of dogs at a time to ensure each one receives plenty of love, care, and at least three walks daily in our secure private field.
              Our setup blends the warmth and familiarity of home-style boarding with the structure and routine dogs thrive on.
              Your dog will enjoy lots of interaction, playtime, and personal care—so their holiday is just as enjoyable as yours.
              Because we dedicate significant time and attention to every dog, we charge per day rather than per night to reflect the quality of care we provide.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-14 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center">
          <div className="text-gray-800 bg-gray-200/40 bg-opacity-70 p-6 rounded-xl shadow-md md:order-1">
            <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">Why Choose Us?</h2>
            <p>
              With a warm and loving environment and a large running space, your furry friend is sure to be loved and well taken care of in our family run business.
              With little to no disturbances, and 24/7 care, we can assure your furry friend to have a peaceful and welcoming stay while you relax on your holiday.
              We also make sure to keep you updated by sending videos and/or pictures of your furry friend so you are aware of their wellbeing at all times.
            </p>
          </div>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {houseGallery.map((img, idx) => (
              <div key={idx}>
                <Image src={img} alt={`House Image: ${idx + 1}`} width={600} height={400} className="mx-auto rounded-xl"/>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Our Happy Clients</h2>
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {dogGallery.map((img, idx) => (
              <div key={idx}>
                <Image src={img} alt={`Dog ${idx + 1}`} width={800} height={500} className="mx-auto rounded-xl"/>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Pricing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-2">Pet Boarding</h3>
              <p className="text-gray-700 mb-4">
                Supervised care 24/7, including walks, playtime, rest, and overnight monitoring in a safe, loving environment.
              </p>
              <p className="text-2xl font-semibold">€25/Day</p>
            </div>
            <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-2">Public Holiday</h3>
              <p className="text-gray-700 mb-4">
                Care services available on public holidays for your convenience (limited availability, book early).
              </p>
              <p className="text-2xl font-semibold">€30/Day</p>
            </div>
            <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-2">Uber Pets</h3>
              <p className="text-gray-700 mb-4">
                If you're unable to drop off your furry companion, we can collect them for you within 50km of Newcastle West.
              </p>
              <p className="text-2xl font-semibold">€30</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">Requirements</h2>
          <div className="text-gray-800 bg-gray-200/40 bg-opacity-70 p-6 rounded-xl shadow-md text-lg space-y-4 max-w-xl mx-auto">
            <p>To help your furry friend in better accumulating in our care, we advise you to bring their bed, favourite toy and their usual nourishment. 
              If not possible we do have beds and toys available, and we can provide a kibble certified by a vet. 
              We also require to know of any possible allergies or health conditions to ensure your furry friend is safe in our care. 
              If you are unsure of any requirements or have further questions please feel free to contact us..</p>
          </div>
        </div>
      </section>
            
      {/* Footer */}
      <footer className="py-10 px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2 text-lg">What's App: 089 416 7901</p>
          <p className="mb-2 text-lg">Email: dogguesthousencw@gmail.com</p>
          <p className="text-lg">Address: Newcastle West Area Co.Limerick</p>
        </div>
        <div className="text-center mt-6 text-sm pt-4">
          <p>&copy; 2025 Dog Guest Hotel. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
