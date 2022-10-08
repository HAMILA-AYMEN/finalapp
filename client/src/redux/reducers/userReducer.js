import { GETUSER, GETUSERS } from "../types"


const initialState={
    users:[],
    user:null
}
function userReducer(state=initialState,{type,payload}){
switch(type){
case GETUSERS:
    return {...state,users:payload}
case GETUSER:
    return {...state,users:payload}
default:
    return state
}
}
export default userReducer