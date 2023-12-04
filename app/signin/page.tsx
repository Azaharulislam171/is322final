import React from 'react'
import styles from '../signup/signup.module.css';
import Link from 'next/link';

const Signin = () => {
  return (
    <div className="flex flex-1 flex-col h- justify-center lg:ml-96 lg:w-2/4 ">
       <div className={styles.myPageContainer}>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Sign in to your account
          </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="../signup" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 bg-transparent ring-1 ring-inset ring-lime-500 "
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
              Password
            </label>
            <div className="text-sm">
              <a href="#" className="font-semibold text-lime-400 hover:text-emerald-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 bg-transparent ring-1 ring-inset ring-lime-500 "
            />
          </div>
        </div>

        <div>
          <Link href='http://localhost:3000/'> <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-lime-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button></Link>
          
        </div>
      </form>

      <p className="mt-48 text-center text-sm text-gray-500">
        Not a member?{' '}
        <a href="signup" className="font-semibold leading-6 text-lime-400 ">
          Sign Up
        </a>
      </p>
    </div>
       </div>
    

    
  </div>
  )
}

export default Signin