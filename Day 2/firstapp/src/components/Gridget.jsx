import { Grid, TextField } from '@mui/material'
import React from 'react'

const Gridget = () => {
  return (
    <div>
        <Grid container spacing = {2}>
            <Grid item xs={12} sm={6} md={4}>
                <br /><br /><br />
                <TextField variant='outlined' label='enter a number'>enter</TextField>
                
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <br /><br /><br />
                <TextField variant='outlined' label='enter a number'>enter</TextField>
                
            </Grid>
        </Grid>
    </div>
  )
}

export default Gridget