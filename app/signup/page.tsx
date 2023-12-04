import Image from 'next/image'
import styles from '../signup/signup.module.css';
import Link from 'next/link'
import { UserCircleIcon, AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid'

export default function Signup() {
  return ( 
    <div className='lg:max-w-xl md:max-w-1/2 rounded-xl mx-auto container-fluid justify-center bg-dark'>
          <div className={styles.myPageContainer}>
        <form className='h-screen p-12 my-4 rounded-xl'>
              <h1 className='text-3xl pt-4 pb-4'> Sign Up</h1>
              <p className='pb-20'>Please sign up  to continue</p>
                <div className="mt-2 p-3"> 
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-lime-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-400 sm:max-w-10/12 p-2">
                  <span><UserCircleIcon className="h-6 w-6 text-white" /></span> <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-white focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="First Name"
                    />
                  </div>
                </div>

                <div className="mt-2 p-3">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-lime-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-400 sm:max-w-10/12 p-2">
                  <span><UserCircleIcon className="h-6 w-6 text-white" /></span> <input
                      type="text"
                      name="lusername"
                      id="lusername"
                      autoComplete="lusername"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-white focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="mt-2 p-3">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-lime-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-400 sm:max-w-10/12 p-2">
                  <span><AtSymbolIcon className="h-6 w-6 text-white" /></span> <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-white focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="mt-2 p-3">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-lime-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-400 sm:max-w-10/12 p-2">
                  <span><LockClosedIcon className="h-6 w-6 text-white" /></span> <input
                      type="text"
                      name="pass"
                      id="pass"
                      autoComplete="pass"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-white focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="mt-2 p-3">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-lime-500 focus-within:ring-2 focus-within:ring-inset focus-within:ring-lime-400 sm:max-w-10/12 p-2">
                  <span><LockClosedIcon className="h-6 w-6 text-white" /></span> <input
                      type="text"
                      name="pass2"
                      id="passw"
                      autoComplete="pass2"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-white focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>


                <div className=' flex justify-center m-9 w-full'>
                  <button
                    type="submit"
                    className=" w-1/2 rounded-md bg-lime-400 px-3 py-1.5 text-sm font-semibold  text-black shadow-sm hover:bg-emerald-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign Up
                  </button>
                  
                </div>
                
                  <p className="text-white text-center">
                    Already have an account? <a href="/signin" className="text-lime-400 hover:text-green-100 font-bold">Sign In</a>
                  </p>
                
        </form>
          </div>
       
 
    </div>
  )
}