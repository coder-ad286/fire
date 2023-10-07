import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '../firebase/config';

const useFirestore = (fbcollection) => {
    
    const [document,setDocument]=useState(null);
    const [error,setError]=useState(null)
    const collectionRef = collection(db,fbcollection);

    const addDocument =async(doc)=>{
        try{
          const document =  await addDoc(collectionRef,doc)
          setDocument(document)
        }
        catch(error){
            setError(error.message)
        }
    }

    const deleteDocument = async(id)=>{
        const docRef = doc(db,fbcollection,id);
        try{
            await deleteDoc(docRef);
        }
        catch(error){
            setError(error.message);
        }
    }

    const updateDocument=async(id,updatedDoc)=>{
        const docRef = doc(db,fbcollection,id);
        try{
            await updateDoc(docRef,updatedDoc)
        }
        catch(error){
            setError(error.message)
        }
    }

    return {
        document,
        error,
        addDocument,
        deleteDocument,
        updateDocument
    }
}

export default useFirestore