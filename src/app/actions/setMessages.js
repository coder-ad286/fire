import { msgFail} from "../slicers/msgSlicer"

const setMessages = async (dispatch, data,addDocument) => {

    try {
        addDocument(data);  
    }
    catch (error) {
        dispatch(msgFail("Error while set messages..!"))
    }

}

export default setMessages