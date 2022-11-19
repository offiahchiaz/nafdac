import React from 'react'

export default function SignUp() {
  return (
    <div className='flex h-screen w-screen flex-col items-center mt-10'>
      <div className=''>
        <img className='h-20 w-80' src="./assets/icons/full-logo.svg" alt="" />
      </div>

      <div className="mt-10 ml-5 mb-10 w-80">
        <h1 className="font-bold text-3xl  mb-4">Sign Up</h1>
        <small>Create a free account in 2 minutes and you can also access to the
          <span>user guide here.</span>
        </small>
      </div>

      <div className='w-80'>
        <form class="">
          <div class="w-full px-3 mb-6">
            <label class="block tracking-wide text-base text-gray-700 mb-2" for="grid-first-name">
              Profile Type
            </label>
            <select class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
              <option>Select profile type</option>
              <option>New Mexico</option>
              <option>Missouri</option>
              <option>Texas</option>
            </select>
          </div>

          <div class="w-full px-3 mb-6">
            <label class="block tracking-wide text-base text-gray-700 mb-2">
              Company name
            </label>
            <input class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text" 
            placeholder="Enter your organization name" />
          </div>

          <div class="w-full px-3 mb-6">
            <label class="block tracking-wide text-base text-gray-700 mb-2">
              Contact number
            </label>
            <input class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            type="text" 
            placeholder="Enter your mobile number" />
          </div>

          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-base text-gray-700 mb-2" for="grid-first-name">
              Email
            </label>
            <input class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white hover:outline-[#1A6002]"
            type="email" 
            placeholder="Enter your email" />
          </div>

          <div class="w-full px-3 mb-6">
            <label class="block tracking-wide text-base text-gray-700 mb-2">
              Password
            </label>
            <input class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:ring focus:border-[#1A6002]"
            type="password" 
            placeholder="Create a password" />
            <p class="text-xs italic">Must be at least 8 characters.</p>
          </div>

          <div class="w-full px-3 mb-6">
            <button class="bg-[#1A6002] w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Create account
          </button>
          <small className='block mt-6 content-center'>
            Already have an account?
            <a class="inline-block align-baseline font-bold text-sm text-[#345447] ml-2" href="/login">
              Sign in
            </a>
          </small>
          </div>
        </form>
      </div>
    </div>
  )
}
