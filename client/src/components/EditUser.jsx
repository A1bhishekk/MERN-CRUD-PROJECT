import { Button, FormControl, FormGroup, Input, InputLabel,styled, Typography } from '@mui/material'
import React,{useEffect, useState} from 'react'
import { useNavigate,useParams } from 'react-router-dom'

import { editUser,getUser } from '../Service/api.js'

const Container=styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  &>div{
    margin-top: 20px;
  }`   

  const initialValue={
    name:"",
    username:"",
    email:"",   
    phone:""
  }
const EditUser = () => {

    const [user, setUser] = useState(initialValue)
    const navigate=useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        loadUserDetails()
    },[])
    const loadUserDetails=async()=>{
        const response=await getUser(id)
        setUser(response.data)
        // console.log(response.data)
    }

    const onValueChange=(e)=>{  
        console.log(e.target.name,e.target.value) 
        setUser({...user,[e.target.name]:e.target.value})
        // console.log(user)
    }

    const editUserDetails=async()=>{
       await editUser(user,id)
        navigate('/all')
    }
  return (
    <>
    <Container>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={onValueChange} name="name" value={user.name}/> 
        </FormControl>

        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={onValueChange} name="username" value={user.username}/> 
        </FormControl>

        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={onValueChange} name="email" value={user.email}/> 
        </FormControl>

        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={onValueChange} name="phone" value={user.phone}/> 
        </FormControl>

        <FormControl>
            <Button onClick={editUserDetails} variant="contained" color="secondary">Edit User</Button>
        </FormControl>

    </Container>
    
    </>
  )
}

export default EditUser