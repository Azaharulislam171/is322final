import Link from 'next/link';
import Image from 'next/image';



const Hero = () => {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(/image3.png)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-white">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-secondary">Hello there</h1>
      <p className="mb-5 text-2xl text-white ">We showcase artisans from around the globe...</p>
      <button className="btn btn-secondary">Get Started</button>
    </div>
  </div>
</div>
  )
}

export default Hero