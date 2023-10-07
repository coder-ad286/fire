import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeMode } from '../app/slicers/msgSlicer';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config'
import { getMessages } from '../app/actions/getMessages';

const Home = () => {
  const { messages, loading } = useSelector(state => state.messages);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getMessages(dispatch)
  }, [dispatch])
  const createHandler = () => {
    dispatch(changeMode({
      bool: true,
      id: null
    }))
    navigate('/credentials')
  }
  return (
    <main className='bg-gray-400 '>
      <section className='container mx-auto py-2'>
        <button onClick={createHandler} className='bg-white rounded m-5 font-bold p-2'>Create +</button>
        {!loading && messages ? messages.length > 0 ? <div className="grid grid-cols-2 gap-2">
          {
            messages.map((message) => {
              return (
                <div key={message.id} className='bg-white text-black  font-bold p-3 rounded-xl'>
                  <h1 className='capitalize text-2xl'>{message.title}</h1>
                  <p className='text-gray-600'>{message.para}</p>
                  <button onClick={() => {
                    navigate(`/details/${message.id}`)
                  }} className='bg-black text-white p-2 m-3 rounded-xl'>More</button>
                </div>
              )
            })
          }
        </div> : <h1>No Data Found</h1> : <h1>Loading...</h1>}
      </section>
    </main>
  )
}


export default Home