import { Button, FormControl, FormGroup, Input, InputLabel,styled, Typography } from '@mui/material'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { addUser } from '../Service/api.js'

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
const AddUser = () => {

    const [user, setUser] = useState(initialValue)
    const navigate=useNavigate();

    const onValueChange=(e)=>{  
        console.log(e.target.name,e.target.value) 
        setUser({...user,[e.target.name]:e.target.value})
        // console.log(user)
    }

    const addUserDetails=async()=>{
       await addUser(user)
        navigate('/all')
    }
  return (
    <>
    <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input onChange={onValueChange} name="name"/> 
        </FormControl>

        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={onValueChange} name="username"/> 
        </FormControl>

        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input onChange={onValueChange} name="email"/> 
        </FormControl>

        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input onChange={onValueChange} name="phone"/> 
        </FormControl>

        <FormControl>
            <Button onClick={addUserDetails} variant="contained" style={{backgroundColor:"#D61C4E"}}>Add User</Button>
        </FormControl>

    </Container>
    
    </>
  )
}

export default AddUser