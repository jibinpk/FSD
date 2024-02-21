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
                <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/'>Login</Link>
                </Button>
                &nbsp;
                <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/count'>Counter</Link>
                </Button>
                &nbsp;
                <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/sign'>SignUP</Link>
                </Button>
                &nbsp;
                <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/use'>Useeffect</Link>
                </Button>
                &nbsp;
                <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/state'>StateBasics</Link>
                </Button>
                &nbsp;
                <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/map'>Mapping</Link>
                </Button>
                &nbsp;
                <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/list'>List</Link>
                </Button>
                &nbsp;
                <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/api'>API</Link>
                </Button>
                &nbsp;
                <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/grid'>Grid</Link>
                </Button>
                &nbsp;
                <Button variant='outlined' style={{color:'white'}} color='inherit'>
                    <Link style={{color:'white'}} to='/card'>Card</Link>
                </Button>

                
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar