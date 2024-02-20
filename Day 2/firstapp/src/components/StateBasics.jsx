import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname, setFname] = useState("Ram");
    var [value,setVal] = useState();
    const handleInput = (e) => {
        // console.log(e.target.value);
        setVal(e.target.value);
        console.log(value);
    }
    const submitHandler = (a) => {
        setFname(value);
    }
    // var [carname, setCarname] = useState("Benz");
  return (
    <div>
        <Typography variant='h3'>Welcome {fname}</Typography>
        <br /><br />
        <TextField variant='outlined' color='secondary' onChange={handleInput} label='Type your name'/>
        <br /><br />
        <Button variant='outlined' color='inherit' onClick={submitHandler} style={{color:'blue'}}>Submit</Button>

    </div>
  )
}

export default StateBasics