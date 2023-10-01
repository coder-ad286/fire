import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import msgs from '../data/message.json';

const RootLayout = () => {
  const [messages,setMessages] = useState([...msgs])

  return (
    <>
        <Navbar/>
        <Outlet messages={messages}/>
    </>
  )
}

export default RootLayout