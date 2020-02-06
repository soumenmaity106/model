import {FATCH_POSTS,LOD_POST_LODING,POST_ERROR} from '../actions/actionType';
const initialState = {
    data:[],
    loading:false,
    error:''
}

export default function(state=initialState,action){
    switch(action.type){
        case LOD_POST_LODING:
            return{
                ...state,
                loading:true,
                error:''
            }
        case FATCH_POSTS:
            return{
                ...state,
                loading:false,
                post:action.data,
                error:''
            }
        case POST_ERROR:
            return{
                 ...state,
                loading:false,
                post:action.data,
                error:''
            }
        default:
            return state
    }
}