import React from 'react'
import useSignup from '../hooks/useSignup';

const Signup = () => {
  const { input, error, inputHandler, submitHandler } = useSignup();

  return (
    <main className='bg-gray-400 '>
      <section className='container mx-auto py-5'>
        <h1 className='text-2xl font-bold my-3'>Create Message</h1>
        <form className='flex flex-col w-1/2'>
          {/*USERNAME */}
          <input name="username" onChange={inputHandler} value={input.username} className='focus:outline-none font-bold text-gray-800 rounded my-1 p-1' type="text" placeholder='Enter Username ' required />
          {error.username && <p className='text-sm text-red-700'>{error.username}</p>}
          {/* PASSWORD */}
          <input name="password" onChange={inputHandler} value={input.password} className='focus:outline-none font-bold text-gray-800 rounded my-1 p-1' type="password" placeholder='Enter Password ' required />
          {error.password && <p className='text-sm text-red-700'>{error.password}</p>}
          {/* CUSTOM ERROR */}
          {error.para && <p className='text-sm mt-3 text-red-700'>{error.para}</p>}
          <button onClick={submitHandler} className='bg-green-600 p-1 my-3 font-bold rounded-xl'>Add</button>
        </form>
      </section>
    </main>
  )
}

export default Signup