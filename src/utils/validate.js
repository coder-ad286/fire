
const validate = (input) => {
    let error =null;
    if (input.username === '') {
        error = {
            ...error,
            username: 'Username is Required..!'
        }
    }
    
    if (input.password === '') {
        error = {
            ...error,
            password: 'Password is Required..!'
        }

    }
    else if(input.password.length < 6) {
        error = {
            ...error,
            password: 'Password Must be Greater than 6 charcter ..!'
        }

    }
    return error;
}

export default validate