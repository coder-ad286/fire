import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMessage } from '../app/actions/getMessage';


const Home = () => {
  const {messages,loading} = useSelector(state=>state.messages);
  const dispatch = useDispatch();
  useEffect(()=>{
      getMessage(dispatch)
  },[dispatch])

  const navigate = useNavigate();
  return (
    <main className='bg-gray-400 '>
      <section className='container mx-auto py-2'>
        <button onClick={()=>{
          navigate(`/credentials`)
        }} className='bg-white rounded m-5 font-bold p-2'>Create +</button>
        {!loading && messages ?<div className="grid grid-cols-2 gap-2">
          {
            messages.map((message) => {
              return (
                <div key={message.id} className='bg-white text-black  font-bold p-3 rounded-xl'>
                  <h1 className='capitalize text-2xl'>{message.title}</h1>
                  <p className='text-gray-600'>{message.para}</p>
                  <button onClick={()=>{
                     navigate(`/details/${message.id}`)
                  }} className='bg-black text-white p-2 m-3 rounded-xl'>More</button>
                </div>
              )
            })
          }
        </div> : <h1>Loading...</h1>}
      </section>
    </main>
  )
}


export default Home