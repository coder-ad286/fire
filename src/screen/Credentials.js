import  { useEffect, useState } from 'react'
import setMessages from '../app/actions/setMessages'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import useFirestore from '../hooks/useFirestore';

const validate = (input, messages,mode) => {
  let error = null;
  if (input.id === '') {
    error = {
      ...error,
      id: 'Id is Required..!'
    }
  }
  if(mode.bool){
    const isExist = messages.find(message => message.id === input.id);
    if (isExist) {
      error = {
        ...error,
        id: 'Id is Already Exist..!'
      }
  
    }
  }

  if (input.title === '') {
    error = {
      ...error,
      title: 'Title is Required..!'
    }

  }

  if (input.para === '') {
    error = {
      ...error,
      para: 'para is Required..!'
    }

  }

  return error;
}

const Credentials = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { messages,loading,mode} = useSelector(state => state.messages)
  const {addDocument,updateDocument,error : err} = useFirestore('messages');
  

  const [input, setInput] = useState({
    title: '',
    para: ''
  })
  const [error, setError] = useState({
    title: null,
    para: null
  });

  useEffect(() => {
    if(!loading && messages){
        if(!mode.bool){
          const editMessage = messages.find(message=>message.id===mode.id)
          setInput(editMessage)
        }
    }
  },[loading,messages,mode])
  const inputHandler = (e) => {
    setInput(
      {
        ...input,
        [e.target.name]: e.target.value
      }
    )
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (validate(input, messages,mode)) {
      setError({ ...validate(input, messages,mode) })
      return;
    }
    if(!mode.bool){
       updateDocument(input.id,input);
    }
    else{
      setMessages(dispatch, input,addDocument)
    }
    if(!err){
      navigate('/')
    }
  }
  return (
    <main className='bg-gray-400 '>
      <section className='container mx-auto py-5'>
        <h1 className='text-2xl font-bold my-3'>{mode.bool ? 'Create Message' : 'Edit Message'}</h1>
        <form className='flex flex-col w-1/2'>
          <input name="title" onChange={inputHandler} value={input.title} className='focus:outline-none font-bold text-gray-800 rounded my-1 p-1' type="text" placeholder='Enter Title ' required />
          {error.title && <p className='text-sm text-red-700'>{error.title}</p>}
          <input name="para" onChange={inputHandler} value={input.para} className='focus:outline-none font-bold text-gray-800 rounded my-1 p-1' type="text" placeholder='Enter Para ' required />
          {error.para && <p className='text-sm text-red-700'>{error.para}</p>}
          
          <button onClick={submitHandler} className='bg-green-600 p-1 my-3 font-bold rounded-xl'>{mode.bool ? 'Add' : 'Update'}</button>
        </form>
      </section>
    </main>
  )
}

export default Credentials