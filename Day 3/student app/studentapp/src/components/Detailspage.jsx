import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Detailspage = () => {
    var [students,setStudents] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/students")
        .then((response) => {
            console.log(response.data);
            setStudents(response.data);
        });
    });
   
  return (
    <div>
        &nbsp;&nbsp;
        <Grid container spacing={2}>
            {students.map((val,i)=>{
                return(
                    <Grid item xs={12} sm={6} md={4} sx={{ justifyContent: 'space-between' }}>
                        <br /><br />
                        <Card sx={{padding:'2', borderColor: 'grey', borderStyle: 'solid', borderWidth: 2 ,maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image="https://t4.ftcdn.net/jpg/05/91/40/47/360_F_591404733_XI6dw0OZMfxCsZLqzmY8BcWbzf2QwZdK.jpg"
                                title={val.title}
                            />
                            <hr style={{ borderTopStyle: 'solid', borderTopWidth: '2px', borderTopColor: 'black' }}/>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {val.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Age:{val.age} &nbsp;
                                Department : {val.department}
                            </Typography>
                            </CardContent>
                         </Card>
            
                    </Grid>
                )
                })}
        </Grid>
    </div>
  )
}

export default Detailspage