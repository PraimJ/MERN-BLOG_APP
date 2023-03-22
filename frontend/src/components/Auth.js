import {useState} from 'react'
import { Box, TextField, Typography,Button } from '@mui/material'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { authActions } from '../store'


const Auth = () => {
  //LOGIC LIVES HERE
const navigate = useNavigate();
const dispatch = useDispatch();

const [inputs, setInputs] = useState({
  name:"", email:"", password:""
})

const [isSignUp, setIsSignUp] = useState(false)

const handleChange =(e) =>{
  setInputs((prevState) => ({
...prevState, 
[e.target.name] : e.target.value
}));
};

//How to handleChange works
//With each handleChange it has a parameter of prevState, so it spreads the previous State
//If Changed the [e.target.name] e = event, the target is the of name permater name = email
//this is used because depending on which e.target.name it will change that e.target.value
//the handleChange is on all inputs, so the handleChange does not happen to all inputs at the same time, it does one at a time. 

const sendAuthRequest = async(type="login") =>{
  const res = await axios.post(`http://localhost:5001/api/user/${type}`, {
    name: inputs.name,
    email: inputs.email,
    password: inputs.password
  }).catch(err => console.log(err));


  const data = await res.data;
  console.log(data)
  return data;
}

const handleSubmit = async (e) =>{
  e.preventDefault();
  console.log(inputs);
  if (isSignUp) {
 sendAuthRequest("signup")
 .then((data) => localStorage.setItem("userId", data.user._id)) 
 // this gives us the user object and we parse the userID, set item in the localstorage to the userID, 
 //then it will save even if you refresh the page
 .then(() => dispatch(authActions.login()))
 .then(() => navigate("/blogs"))
 .then(data => console.log(data));
  } else {
  sendAuthRequest()
  .then((data) => localStorage.setItem("userId", data.user._id))
  .then(() => dispatch(authActions.login()))
  .then(() => navigate("/blogs"))
  .then(data=> console.log(data))
  }
};

//first the handleSumbit function works when you press the sumbmit button
//if the screen is on signup then use the sendAuthRequest function (type of signup(this takes all feilds name, email, password))
//then sendAuthRequest does the work inside the function
// with the sendAuthRequest it is using axois to post response to the backend with defaulkt paramter of type login
//which takes an email and a password, then catch the error
//save to data in a const data 
//then we we get the data and console.log it




//JSX, HTML LIVES HERE
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
        maxWidth={400}
        display ="flex" 
        flexDirection={'column'} 
        alignItems={'center'} 
        justifyContent={'center'}
        boxShadow={"10px 10px 20px #ccc"}
        padding={3}
        margin={'auto'}
        marginTop={5}
        borderRadius={5}>

          <Typography variant='h2' padding={3} textAlign ={'center'}>
          {isSignUp ? "Signup" : "Login"}
          </Typography>


         {isSignUp && <TextField onChange={handleChange} name="name" value={inputs.name} type={'text'} placeholder="Name" margin='normal'/>}
          <TextField onChange={handleChange} name="email" value={inputs.email}  type={'Email'} placeholder="Email" margin='normal'/>
          <TextField onChange={handleChange} name="password" value={inputs.password}  type={'password'} placeholder="Password" margin='normal'/>
         
          <Button
          type = "submit"
          variant='contained'
          sx={{borderRadius: 3, marginTop: 3}}
          color = 'warning'>
             Submit
            </Button>
            
          <Button 
          onClick={()=> setIsSignUp(!isSignUp)} 
          variant='contained'
          sx = {{borderRadius: 3, marginTop: 3}}
         >
            Change To {isSignUp ? "Login" : "Signup"}
            </Button>

        </Box>
      </form>
      </div>
  )
}

export default Auth

//This is a React functional component that defines an authentication form with logic and JSX elements.
//The component starts by importing the useState hook and some UI components from the Material-UI library 
//(Box, TextField, Typography, and Button).
//Inside the component, the useState hook is used to create state variables that manage whether the form is 
//for signing up or logging in (isSignUp) and to store the user's input values for name, email, and password (inputs).
//Two functions are defined inside the component: handleChange and handleSubmit. handleChange is used to update the 
//inputs state when the user types in the form fields. handleSubmit is called when the user clicks the submit button 
//and logs the current values of the inputs state to the console.
//The JSX part of the component defines the form using Material-UI components. The form has a title (Typography),
// three input fields (TextField), and two buttons (Button). The first button is a submit button, which triggers 
//the handleSubmit function. The second button toggles the isSignUp state variable and changes the form between 
//sign up and login mode depending on its current value.
//Overall, this component provides a basic authentication form with user input validation that can be used as a 
//starting point for more complex authentication systems in a React application.


//CORS Error = Cross-Origin Resource Sharing (CORS) is a standard that allows a server to relax the same-origin policy. 
//This is used to explicitly allow some cross-origin requests while rejecting others. For example, if a site offers an 
//embeddable service, it may be necessary to relax certain restrictions. Setting up such a CORS configuration isn't necessarily 
//easy and may present some challenges. In these pages, we'll look into some common CORS error messages and how to resolve them.


