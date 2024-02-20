import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br />
        <Typography variant='h2'>Login Page</Typography>
        <br />
        <TextField variant='filled' label='enter username' focused color='secondary' />
        <br /><br />
        <TextField variant='outlined' label='Enter password' focused color='primary' />
        <br /><br />
        <TextField label='hello' color='secondary' focused />

       
        <br />
        <br />
        <Button variant='outlined'>Submit</Button>
        <br /><br /><br /><br />
        

    </div>
  )
}

export default Login