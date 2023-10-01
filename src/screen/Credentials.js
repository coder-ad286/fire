import React from 'react'

const Credentials = () => {
  return (
    <main className='bg-gray-400 '>
      <section className='container mx-auto py-5'>
            <h1 className='text-2xl font-bold my-3'>Create Message</h1>
            <form className='flex flex-col w-1/2'>

                <input className='focus:outline-none font-bold text-gray-800 rounded my-1 p-1' type="text" placeholder='Enter Title ' required/>
                <p className='text-sm text-red-700'>Title Is Required !</p>
                <input className='focus:outline-none font-bold text-gray-800 rounded my-1 p-1' type="text" placeholder='Enter Para ' required/>
                <p className='text-sm text-red-700'>Title Is Required !</p>
                <button className='bg-green-600 p-1 my-3 font-bold rounded-xl'>Add</button>
            </form>
      </section>
    </main>
  )
}

export default Credentials