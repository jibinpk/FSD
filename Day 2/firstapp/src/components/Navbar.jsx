import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar position='static'>
            <Toolbar>
                &nbsp;
                <br /><br /><br />
                <Typography sx={{flexGrow:1}} align='left' variant='h6'>App</Typography>
                &nbsp;
                <Button variant='contained' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'blue'}} to='/'>Login</Link>
                </Button>
                &nbsp;
                <Button variant='contained' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'blue'}} to='/count'>Counter</Link>
                </Button>
                &nbsp;
                <Button variant='contained' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'blue'}} to='/sign'>SignUP</Link>
                </Button>
                &nbsp;
                <Button variant='contained' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'blue'}} to='/use'>Useeffect</Link>
                </Button>
                &nbsp;
                <Button variant='contained' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'blue'}} to='/state'>StateBasics</Link>
                </Button>

                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar