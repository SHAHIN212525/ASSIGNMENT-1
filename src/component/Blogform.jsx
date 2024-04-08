import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Blogform = () => {
    var[inputs,setInputs]=useState({
        ename:"",
        edes:"",
        eauthor:"",
    })
    const inputHandler =(e) =>{
        const {name,value}=e.target
        setInputs((prevData) =>({...prevData,[name]:value}))
        console.log(inputs)
    }
    const addHandler =() =>{
        axios.post("https://jsonplaceholder.typicode.com/posts")
        .then((response) =>{
            alert(response.data)
        })
        .catch((err) => console.log(err))
    }
  return (
    <div
        style={{paddingTop:"75px"}}>
            <Typography variant='h3'color={'blue'}>BLOG FORM</Typography><br />
            <TextField label='Blog Name'variant='outlined'name='ename' onChange={inputHandler}/> <br /><br />
            <TextField label='description'variant='outlined' name='edes' onChange={inputHandler}/> <br /><br />
            <TextField label='autor name'variant='outlined' name='eauthor' onChange={inputHandler}/> <br /><br />
            <Button variant='contained' color='secondary'onClick={addHandler}>ADD</Button>

    </div>
  )
}

export default Blogform