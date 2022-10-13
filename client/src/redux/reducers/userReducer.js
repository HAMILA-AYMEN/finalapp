import { GETUSER, GETUSERS ,TOGGLESHOW} from "../types"


const initialState={
    users:[],
    user:null,
    showAlert:false
}
function userReducer(state=initialState,{type,payload}){
switch(type){
case GETUSERS:
    return {...state,users:payload}
case GETUSER:
    return {...state,user:payload}
case TOGGLESHOW:
    return {...state,showAlert:!state.showAlert}
default:
    return state
}
}
export default userReducer