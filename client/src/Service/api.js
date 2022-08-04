import axios from 'axios';

const API_URL = "http://localhost:8000";
export const addUser=async (user)=>{
    try {
    return await axios.post(`${API_URL}/add`,user);
    } catch (error) {
        console.log("Error while calling add user api",error);
    }
} 


export const getUsers=async ()=>{
    try {
    return await axios.get(`${API_URL}/all`);
    } catch (error) {
        console.log("Error while calling get users api",error);
    }
}

export const getUser=async (id)=>{
    try {
    return await axios.get(`${API_URL}/${id}`);
    } catch (error) {
        console.log("Error while calling get user api",error);
    }
}

export const editUser=async (user,id)=>{
    try {
    return await axios.put(`${API_URL}/${id}`,user);
    } catch (error) {
        console.log("Error while calling edit user api",error);
    }
}  

export const deleteUser=async (id)=>{
    try {
    return await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.log("Error while calling delete user api",error);
    }
}