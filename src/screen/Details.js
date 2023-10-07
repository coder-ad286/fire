import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../app/slicers/msgSlicer";
import useFirestore from "../hooks/useFirestore";
import { getMessages } from "../app/actions/getMessages";

const Details = () => {
  const { deleteDocument, error: err } = useFirestore('messages');
  const { messages, loading } = useSelector(state => state.messages);
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    getMessages(dispatch);
  }, [dispatch])
  const { id } = useParams();
  useEffect(() => {
    if (!loading && messages.length) {
      if (messages.find(msg => msg.id === id)) {
        setMessage(messages.find(msg => msg.id === id))
      }
      else {
        setError('Message Not Avilable For Given Id..!')
      }
    }
  }, [loading, messages, id, dispatch])

  const handleDelete = (id) => {
    deleteDocument(id)
    if (!err) {
      naviagte('/')
    }
  }

  const handleEdit = (id) => {
    dispatch(changeMode({
      bool: false,
      id: id
    }))
    naviagte('/credentials')
  }

  return (
    <main className="bg-gray-400 h-screen p-5">
      {!loading && messages && message ? !error ? (<section className="container mx-auto bg-white font-bold p-5 rounded-lg">
        <h1 className="capitalize text-2xl">{message.title}</h1>
        <p className="text-gray-600">
          {message.para}
        </p>
        <div className="flex items-center justify-end">
          {err && <p className="text-red-600">{err}</p>}
          <button onClick={() => { handleDelete(message.id) }} className=" text-white p-2 m-3 rounded-xl px-3 py-0.5  bg-red-800">
            Delete
          </button>
          <button onClick={() => { handleEdit(message.id) }} className=" text-white p-2 m-3 rounded-xl px-3 py-0.5  bg-blue-800">
            Edit
          </button>
        </div>
      </section>) : <h1>{error}</h1> : <h1>Loading...</h1>}
    </main>
  );
};

export default Details;
