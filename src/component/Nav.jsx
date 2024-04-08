import { AppBar, Button,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <br /><br />
        <AppBar>
            <Toolbar>
            <Typography variant='h4'>HOME  </Typography>  &nbsp; &nbsp;

            <Button variant='contained' color='error'>
            <Link to={'/b'} style={{textDecoration:'none',color:'white'}}>  blog form </Link>  </Button>
                &nbsp; 
            <Button variant='contained'color='success'>
            <Link to={'/add'} style={{textDecoration:'none',color:'white'}}> Dashboard </Link>
            </Button>
            
            
            </Toolbar>
            </AppBar>
        
    </div>
  )
}

export default Nav