import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-primary text-white p-4">
      <div className="grid grid-cols-3 gap-4 content-end">
        {/* Left section - Logo */}
        <div>
          <Image
            src="/logoai.png"
            alt="Your Image Description"
            width={80}
            height={50}
          />
          <p className=' font-extralight hover:text-secondary italic font-timesnewroman'> &quot; Bringing imagination to reality &quot;</p>
        </div>

        {/* Middle section - Page links */}
        <div className="flex flex-end ">
         <h1>Hi</h1>
        </div>
      </div>
    </div>
  )
}

export default Footer;
