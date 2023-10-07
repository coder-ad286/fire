import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { msgAdd, msgFail, msgRequest, msgSuccess } from '../slicers/msgSlicer';
import { db } from '../../firebase/config';

export const getMessages = (dispatch) => {

    dispatch(msgRequest());

    // * USED TO REFER COLLECTION FROM FIRESTORE
    const collectionRef = collection(db, 'messages');

    //* USING COLLECTION MAKE A QUERY REF WHAT WE WANT 
    let queryRef = query(collectionRef, orderBy('title', 'asc'))

    //* USE SNAPSHOT FOR REALTIME DATA
    const unsub = onSnapshot(queryRef, (snapshot) => {
        let results = []
        snapshot.docs.forEach((doc) => {
            results.push({
                ...doc.data(),
                id: doc.id
            })
        })
        /* SNAPSHOT LIKE 
                [
                        {
                            data : function(){
                                return{
                                    title : '',
                                    para : '
                                }
                            },
                            id : created by firestore
                        }
                        .
                        .
                        .
                ]
        */
        dispatch(msgSuccess(results))
    })

}