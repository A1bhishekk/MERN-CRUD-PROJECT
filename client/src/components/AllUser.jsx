import React, { useEffect,useState } from 'react'
import { Table, TableHead, TableRow, TableCell,TableBody,styled,Button } from '@mui/material'
import { getUsers,deleteUser } from '../service/api.js'
import {Link} from 'react-router-dom'

const StyledTable=styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto  ;`

const Thead=styled(TableRow)`
  & >th{
    color: #fff;
    font-size: 20px;
    background-color: #000;
  }
  `
  const TRow=styled(TableRow)`
  & >td{
    font-size: 18px;
  }`

const AllUser = () => {
  const [user, setUser] = useState([])
  // console.log("user is",user)
  useEffect(()=>{
    getAllUsers()
  },[])
  const getAllUsers=async()=>{
    const response=await getUsers()
    setUser(response.data)
    // console.log(response.data)
  }

  const deleteUserDetails=async(id)=>{
    await deleteUser(id);
    getAllUsers();
  }
  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Operation</TableCell>
        </Thead>
      </TableHead>
      <TableBody>
      {
        user.map((user)=>(
          <TRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="contained" color="secondary" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
              <Button variant="contained" style={{backgroundColor:"red"}} onClick={()=>deleteUserDetails(user._id)} >Delete</Button>
            </TableCell>
          </TRow>
        ))
      }
      </TableBody>
    </StyledTable>
  )
}
   

export default AllUser