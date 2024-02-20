import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  var [counts, setCounts] = useState(0);
  const adder = () => {
    counts++;
    console.log("added");
    setCounts(counts);
  }
  const subbs = () => {
    counts--;
    console.log("subtracted");
    setCounts(counts);
  }


  return (
    <div>
      <Typography variant='h2'>Counter :{counts}</Typography>
      <Button variant='contained' label='+' color='success' onClick={adder}>+</Button>      &nbsp;
      <Button variant='contained' label='-' color='error' onClick={subbs}>-</Button>
    </div>
  )
}

export default Counter