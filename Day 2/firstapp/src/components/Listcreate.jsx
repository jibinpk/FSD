import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listcreate = () => {
    var [news,setNew] = useState([]);
    var [data,setData] = useState();
    const inputHandler = (e) => {
        setData(e.target.value);
    }
    const submitHandler = () => {
        console.log(news);
        setNew([...news, data]);
        
        
    }
  return (
    <div>
        <br /><br /><br />
        <TextField variant='outlined' label='enter a number' onChange={inputHandler} ></TextField>
        <br /><br />
        <Button variant='outlined' onClick={submitHandler}>Add</Button>
        <br /><br />
        <ol>
        {news.map((val,i)=> {
                return(
                    
                <li key={i}>{val}</li>
                
                )
            })}
            <br />
        </ol>
        
    </div>
  )
}

export default Listcreate