import React from 'react'

const Loginform = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-200 flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className='mb-4'> 
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
          <input className="shadow appearance- border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username" type="text" placeholder="Username"/>
          </div>
          <div className='mb-6'>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="Password" />
          </div>
          <button className='shadow appearance-none border rounded w-full bg-blue-500 text-white px-4 py-2 roundedd-md hover:bg-blue-600 focus:outline-none focus:bg-blue 600'
          type='submit'>
          Login
          </button>
        </form>
      
    </div>
    </div>
    </div>
  )
}

export default Loginform
