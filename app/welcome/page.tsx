import Image from 'next/image'
import styles from '../signup/signup.module.css';
import Link from 'next/link'
import { UserCircleIcon, AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid'

export default function Welcome() {
  return ( 
    <div className='max-w-4xl rounded-xl mx-auto container-fluid justify-center '>
          <div className={styles.myPageContainer}>
          <div className='h-screen p-12 md:my-5  rounded-xl'>
            <div className='flex justify-center'>
              <div className='m-24'> <Link href="http://localhost:3000/">  <Image
                src="/logouni.png"
                alt="Your Image Description" // Provide a descriptive alt text
                width={320} // Specify the width
                height={200} // Specify the height 
                /> </Link>
              </div>
            </div>
            <div className='flex mt-32 justify-center '>
              <Link href="http://localhost:3000/signup">  <button className="bg-transparent hover:bg-lime-500 text-lime-400 font-semibold hover:text-black py-2 px-16 border border-lime-500 hover:border-transparent rounded">
                  Sign In
                </button> 
              </Link>
            </div>
            <div className='flex mt-5 mb-5 justify-center '>
              <Link href="http://localhost:3000/signin">  <button className="bg-transparent hover:bg-lime-500 text-lime-400 font-semibold hover:text-black py-2 px-16 border border-lime-500 hover:border-transparent rounded">
                  Sign Up
                </button> 
              </Link>
            </div>
          </div>
          </div>
       
 
    </div>
  )
}