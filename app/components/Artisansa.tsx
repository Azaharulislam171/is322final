import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Artisansa = () => {
  return (


  <div className="grid pt-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    <div className=" text-white"><div className="card ">
  <figure >
  <div style={{ width: '100%', height: 'auto', position: 'relative' }}>
  <Image
            src="/hero.png"
            alt="Descriptive text for the image"
            width={800} // The width of the image in pixels
            height={475} // The height of the image in pixels
            />
  </div>
  </figure>
  <div className="card-body bg-primary-focus">
    <h2 className="card-title">Bags!</h2>
    <p>Meet Artisanat, who creates beautifully crafted bags from denim jeans.</p>
    <div className="card-actions justify-end">
   
     <button className="btn btn-outline btn-secondary"> <Link href="/artisanat">Learn More </Link></button>
    </div>
  </div>
</div> </div>
    <div className="bg-primary text-white">3</div>
    <div className="bg-primary text-white">4</div>
    <div className="bg-primary text-white p-4">5</div>
    <div className="bg-info text-white p-4">6</div>
  </div>
  

    
  )
}

export default Artisansa