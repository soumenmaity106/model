import { FATCH_POSTS,LOD_POST_LODING,POST_ERROR } from './actionType';
import axios from 'axios';

export const fatch_post = (data) => {
    return {
        type: FATCH_POSTS,
        data
    }
}
export const loadPost = () => dispatch =>{
    dispatch({type: LOD_POST_LODING})
}
export const post_error = (error) =>{
    return{
        type:POST_ERROR,
        error
    }
}
export const fatch_data_post =  () => {
    return async dispatch =>{
        try{
            const respnse = await axios('https://jsonplaceholder.typicode.com/posts')
            dispatch(fatch_post(respnse.data))
        }catch(e){
            dispatch(post_error(e))
        }
    }
}