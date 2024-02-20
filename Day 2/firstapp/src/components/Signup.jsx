import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    var [data,setData] = useState();
    const inputHandler = (e) => {
        console.log("on");
        setData({...data,[e.target.name]:e.target.value});
        console.log(data);
    }
    
  return (
    <div>
        <Typography variant='h4'>Sign Up Form</Typography>
        <br /><br />
        <TextField variant='outlined' color='secondary' label='enter email' name='email' onChange={inputHandler}>email:</TextField>
        <br /><br />
        <TextField variant='outlined' color='secondary' label='enter username' name='username' onChange={inputHandler}>username:</TextField>
        <br /><br />
        <TextField variant='outlined' color='secondary' label='enter password' name='pwd' onChange={inputHandler}>password:</TextField>
        <br /><br />
        <Button variant='outlined' color='inherit' style={{color:'blue'}}>SignUp</Button>
    </div>
  )
}

export default Signup