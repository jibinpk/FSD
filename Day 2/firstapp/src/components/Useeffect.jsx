import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    var [lang,setLang] = useState();
    const inputHandler = (e) => {
        console.log("changed");    
        setLang(e.target.name);


    }
    useEffect(()=>{
        setLang("Angular");
    },[])
  return (
    <div>
        <Typography variant='h3'>Welcome to {lang}</Typography>
        <br /><br /><br />
        <Button variant='contained' color='primary' name='React' onClick={inputHandler}>React</Button>
        &nbsp;
        <Button variant='contained' color='secondary' name='Angular' onClick={inputHandler}>Angular</Button>
        &nbsp;
        <Button variant='contained' color='success' name='Next' onClick={inputHandler}>Next</Button>


    </div>
  )
}

export default Useeffect