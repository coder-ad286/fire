import data from '../../data/message.json';
import { msgFail, msgRequest, msgSuccess } from '../slicers/msgSlicer';

export const getMessage = (dispatch)=>{
    try{
        dispatch(msgRequest());
       
        setTimeout(()=>{
          const   messages = data;
          dispatch(msgSuccess(messages))

        },2000)
    
    }
    catch(error){
        dispatch(msgFail("Fail to fetch messages..!"));
    }
}