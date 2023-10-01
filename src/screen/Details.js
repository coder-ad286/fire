import React, { useEffect } from "react";
import data from '../data/message.json'
import { useParams } from "react-router-dom";

const Details = () => {
  useEffect(()=>{
     window.scrollTo(0,0);
  },[])
  const {id} = useParams();
  console.log(id);
  const message =  data.find(msg=>msg.id===Number(id))
  return (
    <main className="bg-gray-400 h-screen p-5">
      <section className="container mx-auto bg-white font-bold p-5 rounded-lg">
        <h1 className="capitalize text-2xl">{message.title}</h1>
        <p className="text-gray-600">
          {message.para}
        </p>
        <div className="flex  justify-end">
          <button className=" text-white p-2 m-3 rounded-xl px-3 py-0.5  bg-red-800">
            Delete
          </button>
          <button className=" text-white p-2 m-3 rounded-xl px-3 py-0.5  bg-blue-800">
            Edit
          </button>
        </div>
      </section>
    </main>
  );
};

export default Details;
