import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='flex h-full w-full flex-col items-center mt-10'>
      <div className='w-96'>
        <img className='h-20 w-80' src="./assets/icons/full-logo.svg" alt="" />
      </div>

      <div className="mt-10 ml-5 mb-10 w-80">
        <h1 className="font-bold text-3xl  mb-4">Sign up</h1>
        <small>Create a free account in 2 minutes and you can also access to the
          <span>user guide here.</span>
        </small>
      </div>

      <div className='w-80'>
        <form className="">
          <div className="w-full px-3 mb-6">
            <label className="block tracking-wide text-base text-gray-700 mb-2" for="grid-first-name">
              Profile Type
            </label>
            <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
              <option>Select profile type</option>
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
          </div>

          <div className="w-full px-3 mb-6">
            <label className="block tracking-wide text-base text-gray-700 mb-2">
              Company name
            </label>
            <input className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text" 
            placeholder="Enter your organization name" />
          </div>

          <div className="w-full px-3 mb-6">
            <label className="block tracking-wide text-base text-gray-700 mb-2">
              Contact number
            </label>
            <input className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text" 
            placeholder="Enter your mobile number" />
          </div>

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
            Already have an account?
            <Link className="inline-block align-baseline font-bold text-sm text-[#345447] ml-2" to='/login'>Sign in</Link>
          </small>
          </div>
        </form>
      </div>

   
    </div>
  )
}
