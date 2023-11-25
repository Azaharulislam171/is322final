import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import Navbar from './components/Navbar'; 
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import Artisansa from './components/Artisansa';

export default function Home() {
  return (

   <main>
    
    <Carousel/>


    <div>
      <h1 className="text-primary font-times" >About The Artisanat</h1>
      <div className="text-container  text-primary font-serif">
        <p>Lorem ipsum dolor sit amet consectetur...</p>
      </div>
    
    </div>
    <Hero/>
    <Link href="/users">Users </Link>
    <ProductCard />
    <Artisansa/>
    </main>
  )
}
