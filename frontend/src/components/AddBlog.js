import React, { useState } from 'react'
import { Box, Typography, InputLabel, TextField, Button} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useStyles } from "./utils";

const labelStyles = {mb: 1, mt:2, fontSize:"24px", fontWeight: "bold"};

const AddBlog = () => {
//THIS IS WHERE YOUR LOGIC LIVES

const classes = useStyles();
const navigate = useNavigate();



const [inputs, setInputs] = useState({
  title: "",
  description: "",
  imageURL: "",
});

const handleChange =(e) =>{
  setInputs((prevState) => ({
...prevState, 
[e.target.name] : e.target.value
}));
};

const sendAddBlogRequest = async () =>{
  const res = await axios.post("http://localhost:5001/api/blog/add",{
    title: inputs.title,
    description: inputs.description,
    image: inputs.imageURL,
    user: localStorage.getItem("userId")
  }).catch((err) => console.log(err));
  const data = await res.data;
  console.log(data);
  return data;
}


const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(inputs);
  sendAddBlogRequest()
  .then((data) => console.log(data))
  .then(() => navigate("/blogs"));
};

//THIS WHERE YOUR HTML AND JSX LIVES
  return (
    <div>
<form onSubmit = {handleSubmit}>
<Box 
border={3}
borderColor ="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(1,187,239,1) 92%, rgba(0,212,255,1) 100%)"
borderRadius={10}
boxShadow ="10px 10px 20px #ccc"
padding ={3}
margin ={"auto"}
marginTop={3}
display = "flex"
flexDirection={"column"}
width={"60%"}>
    <Typography  className={classes.font} fontWeight={"bold"} padding={3} color="grey" variant='h2' textAlign={'center'} >
      Post Your Blog
      </Typography>
    
    <InputLabel  className={classes.font} sx={labelStyles}>Title</InputLabel>
    
    <TextField 
     className={classes.font}
    value={inputs.title} 
    name="title" 
    onChange ={handleChange} 
    margin ="normal"
     variant='outlined'
     />
    
    <InputLabel  className={classes.font} sx={labelStyles}>Description</InputLabel>
    <TextField 
     className={classes.font}
    value={inputs.description} 
    name="description" 
    onChange ={handleChange} 
    margin ="normal" 
    variant='outlined'/>

    <InputLabel  className={classes.font} sx={labelStyles}>Upload an image</InputLabel>
    <TextField 
     className={classes.font}
    value={inputs.imageURL} 
    name="imageURL" 
    onChange ={handleChange} 
    margin ="normal" 
    variant='outlined'/>

    <Button sx ={{mt:2, borderRadius:4}} variant="contained" color='warning' type='sumbit'>Submit</Button>

</Box>
</form>
</div>
  )
}

export default AddBlog