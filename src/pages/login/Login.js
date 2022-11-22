import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='flex h-screen w-screen flex-col items-center mt-32'>
      <div className='w-96'>
        <img className='h-20 w-80' src="./assets/icons/full-logo.svg" alt="" />
      </div>

      <div className="mt-10 ml-5 mb-10 w-80">
        <h1 className="font-bold text-3xl  mb-4">Sign in</h1>
      </div>

      <div className='w-80'>
        <form className="">
         
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-base text-gray-700 mb-2" for="grid-first-name">
              Email
            </label>
            <input className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:outline-[#1A6002]"
            type="email" 
            placeholder="Enter your email" />
          </div>

          <div className="w-full px-3 mb-6">
            <label className="block tracking-wide text-base text-gray-700 mb-2">
              Password
            </label>
            <input className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring focus:border-[#1A6002]"
            type="password" 
            placeholder="Create a password" />
            <p className="text-xs italic">Must be at least 8 characters.</p>
          </div>

          <div className="w-full px-3 mb-6 text-center">
            <button className="bg-[#1A6002] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Create account
          </button>
          <small className='block mt-6'>
            No account?
            <Link className="inline-block align-baseline font-bold text-sm text-[#345447] ml-2" to='/signup'>Sign up</Link>
          </small>
          </div>
        </form>
      </div>
    </div>
  )
}
