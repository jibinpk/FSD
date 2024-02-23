import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Homes = (props) => {
  var [stu,setStu] = useState([]);
  var [datas,setData] = useState({
    id: props.data.id,
    name: props.data.name,
    age: props.data.age,
    department: props.data.department,

});
  const inputHandler = (e) => {
    console.log("on");
    setData({...datas,[e.target.name]:e.target.value});
    // console.log(datas);
  };
  const submitHandler = ()=>{
    console.log("entered");
    setStu([...stu,{...datas}]); 
    axios
      .post("http://localhost:4000/students",{
      name: datas.names,
      age: datas.age,
      department: datas.department,
  })
  .then(()=>{
    alert("Saved succesfuly");
  })
  .catch(() => {
    alert("Error in data");
  });
  };
  useEffect (() => {
    console.log(stu);
  },[stu]);
  return (
    <div>
        <br /><br /><br />
        <TextField variant='outlined' value={datas.name} label='Name' name='names' onChange={inputHandler}></TextField>
        <br /><br />
        <TextField variant='outlined' value={datas.age} label='Age' name='age' onChange={inputHandler}></TextField>
        <br /><br />
        <TextField variant='outlined' value={datas.department} label='Department' name='department' onChange={inputHandler}></TextField>
        <br /><br />
        <Button variant='outlined' label='submit' onClick={submitHandler}>submit</Button>
    </div>
  )
}

export default Homes