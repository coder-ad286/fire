import { useState } from 'react'
import validate from '../utils/validate'

const useLogin = () => {

     const initialInput = {
          username: '',
          password: ''
     }
     const initialError = {
          username: null,
          password: null,
          custom: null
     }

     const [input, setInput] = useState(initialInput)
     const [error, setError] = useState(initialError)


     const inputHandler = (e) => {
          const { name, value } = e.target;
          setInput({
               ...input,
               [name]: value
          })
     }
     const submitHandler = (e) => {
          e.preventDefault();
          const isError = validate(input);

          if (isError) {
               setError(isError);
               return;
          }
          setError(initialError);

     }
     return { input, error, inputHandler, submitHandler }
}

export default useLogin