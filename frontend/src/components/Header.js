import { useState } from 'react'
import {AppBar, Typography, Toolbar, Box, Button, Tabs, Tab} from '@mui/material' //app bar provides content and actions related to the current screen. It’s used for branding, screen titles, navigation, and actions. It can transform into a contextual action bar.
import {Link } from "react-router-dom"
import { useSelector, useDispatch} from 'react-redux'
import { authActions } from '../store'
import { useStyles } from "./utils";

//this libary contians all the UI components such as Navbars, Buttons & Modals
//link: https://mui.com/material-ui/getting-started/supported-components/

const Header = () => {
//Logic live here

const classes = useStyles();
const dispatch = useDispatch();
const isLoggedIn = useSelector((state) => state.isLoggedIn);

const [value, setValue] = useState();

//JSX or HTML lives here
  return (
   <AppBar
   position='sticky'
   sx={{
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(1,187,239,1) 92%, rgba(0,212,255,1) 100%)"
}}>
    <Toolbar > 
       <Typography className={classes.font} variant='h4'>BlogsApp</Typography>
       {isLoggedIn && <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
        <Tabs
        textColor='inherit'
        value={value} 
        onChange={(e,val) => setValue(val)}
        >
            <Tab className={classes.font} LinkComponent={Link} to="/blogs" label="All Blogs"/>
            <Tab className={classes.font} LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
            <Tab className={classes.font} LinkComponent={Link} to="/blogs/add" label="Add Blog"/>
            
        </Tabs>
       </Box>}

       <Box display ="flex" marginLeft="auto">
       
      {!isLoggedIn && <> <Button 
       LinkComponent={Link} to="/auth"
       variant ="contained"
       sx ={{margin:1, borderRadius: 10}}
       color ="warning"
       >LogIn</Button>

        <Button 
        LinkComponent={Link} to="/auth"
       variant ="contained"
       sx ={{margin:1, borderRadius: 10}}
       color ="warning"
       >SignUp</Button> </>}

       {/* //we put the two button in the same logic with the <></>, because of the 1 parent rule of JSX */}
       {/* //When you are not logged in, the SignUp, LogOut buttons, show up */}

      {isLoggedIn && <Button 
       onClick={()=>dispatch(authActions.logout())}
       LinkComponent={Link} to="/auth"
       variant ="contained"
       sx ={{margin:1, borderRadius: 10}}
       color ="warning"
       >LogOut</Button>}



       </Box>
    </Toolbar>
 </AppBar>
  )
}

export default Header

//The Material UI COMPONTENMTS import {AppBar, Typography, Toolbar, Box, Button} 
//have a styles like bootstrap to the component them selves. 
//Box is like a div
//variant = is for styling, for buttons by default it is text, other styling is outline, contained, string
//button acts like the links
//sx = The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.

//onChange = function(event: React.SyntheticEvent, value: any) => void
//event: The event source of the callback. Warning: This is a generic event not a change event.
//value: We default to the index of the child (number)
//value in tab = The value of the currently selected Tab. If you don't want any selected Tab, you can set this prop to false.
//for the tabs we have in the code now the tab have a value of a link component that goes (to="/blogs") this is the value, and it setValue
