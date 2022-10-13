import axios from "axios"
import { GETUSERS,GETUSER, TOGGLESHOW } from "../types"

export const getAllUsers=()=>async(dispatch)=>{
try {
    const res = await axios.get('/api/users/allusers')
    dispatch({
        type:GETUSERS,
        payload:res.data
       
    })
    console.log(res.message)
} catch (error) {
    console.log(error)
}
}

export const addUser=(data)=>async(dispatch)=>{
    try {
      const res=  await axios.post('/api/users/adduser',data)
       
        dispatch(getAllUsers())
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/users/deleteuser/${id}`)
        dispatch(getAllUsers())
    } catch (error) {
        console.log(error) 
    }
}
export const getOneUser=(id)=>async(dispatch)=>{
    try {
        const res=await axios.get(`/api/users/user/${id}`)
        dispatch({
            type:GETUSER,
            payload:res.data
        })
    } catch (error) {
        console.log(error) 
    }
}
export const updateUser=(id,data)=>async(dispatch)=>{
    try {
    await axios.put(`/api/users/updateuser/${id}`,data)
    dispatch(getAllUsers())
       
    } catch (error) {
        console.log(error) 
    }
}
export const toggleShow=()=>{
    return {
        type:TOGGLESHOW
    }
}