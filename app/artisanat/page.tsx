import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'


const MeetArtisanat = () => {
  const aspectRatio = (9 / 16) * 100;
  return (
    <div className='mobile-container'>
      <div>
      <h1 className=' p-5 text-primary text-decoration-line: underline text-center text-4xl'>Artisanat by Jasmin</h1>
      <div className='container-fluid mx-4 text-primary '>
        <div className="relative">
      <div className="float-left mr-4">
        <Image
          src="/artisanat.png" // The path to your image
          alt="Descriptive text for image"
          width={320} // The width of the image in pixels
          height={180} // The height of the image in pixels
          layout="intrinsic" // This layout allows the image to maintain its aspect ratio
        />
      </div>
        <p className="font-serif">Meet Jasmin, the creative force behind 'Artisan by Jasmin', a unique line of handcrafted bags born from a fusion of artistry and sustainability. With a passion for eco-friendly fashion and a discerning eye for design, Jasmin transforms reclaimed jeans and denim into chic, durable bags that carry more than just essentials—they carry a story. Each piece is a testament to Jasmin's belief in repurposing with a purpose, meticulously crafted to showcase the rugged elegance of denim. From the texture of well-loved jeans to the distinctive stitch that once held them together, Jasmin's creations are imbued with character and designed for those who value style and substance in equal measure. In her workshop, denim is not just a fabric—it's a canvas for expression, and every bag is an invitation to join a movement that's as stylish as it is conscientious. Meet Jasmin, the creative force behind 'Artisan by Jasmin ', a unique line of handcrafted bags born from a fusion of artistry and sustainability. With a passion for eco-friendly fashion and a discerning eye for design, Jasmin transforms reclaimed jeans and denim into chic, durable bags that carry more than just essentials—they carry a story. Each piece is a testament to Jasmin's belief in repurposing with a purpose, meticulously crafted to showcase the rugged elegance of denim. From the texture of well-loved jeans to the distinctive stitch that once held them together, Jasmin's creations are imbued with character and designed for those who value style and substance in equal measure. In her workshop, denim is not just a fabric—it's a canvas for expression, and every bag is an invitation to join a movement that's as stylish as it is conscientious.</p>
    </div>

    <div  className="relative w-100" style={{ paddingTop: `${aspectRatio}%` }}>
      <iframe
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%'
        }}
        src="https://www.youtube.com/embed/4CAYa6miOJw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>

      
      </div>
    </div>
    </div>
    
  )
}

export default MeetArtisanat