# MERN-BLOG_APP
A simple blog application that uses the MERN Stack. 

APP PLAN:

I have Created a Blog application with the MERN stack.
The folloing is the plan for the app. 
I have a login screen and once I will just click on the submit so the ID of the user will be then stored inside the local storage 
and then it will have some blogs onto the page like I have created all of the blogs from this user only so I can see that delete options 
as well so once you click on the edit then you can edit this blog as well and once you will just delete so the blog would be deleted and 
once you move on to the all blogs then you can see all of the blogs which are available inside the database of the multiple users same like
Instagram or the Facebook as well and then you can just move on to the add blog and then you can just add the blog from there as well and 
then you have the login and the logout functionality as well.


Using the Redux for handling the authentication States and then I used the mongodb to handle the database operations then I used the Mongoose 
to handle the relations between the multiple Collections and I have the multiple collections inside the application
I have the user's collection where I will store all of the users and then I have the blog collection where I store the blogs of the users so each 
user have different blogs and one blog Belongs to Only One user this is a relation between all of the collections and then I used all of the things
here and then I have the login and the sign of functionality as well so this is the application.

What is the MERN Stack?
It is the a combination of MongoDB, ExpressJS, ReactJS, NodeJS.
MongoDB handles the database operations.
ExpressJS & NodeJS handles the server side tasks of sending responses to the front-end
ReactJS handles the front-end

Mongodb it is like a no SQL database which stores documents in the collections instead of the 
record festivals as in the SQL database so if you are coming from the SQL background so you can 
refer the record as the documents what is the note

NodeJS: A javaScript engine originally built for browser, now can work without a browser and having some extra APIs. 
Allows us to run the JS outside of the browser.

ExpressJS: A framework for NodeJS which helps to ease the process. 

ReactJS: A JS Library to build fast and scalable UI's. It's the View Part in MERN Stack. 



Backend Set-Up:

Frontend Set-Up:

FRONT-END SET-UP
1. CD to the highest. level folder for the app
2. npx create-react-app (frontend)- This is your frontend foldername
3. CD into the frotend folder
4. Go into App.js, delete everything in the div
5. go to index.js, take out web report import
6. App.css, take out all styles
7. index.css, take out all styles replace withe *{margin =0;}
8. npm start
9. To test the app put <HELLO WORLD> into the divs of App.js
10. Add component folder, with your components
11. If you have the Es7 +react/Redux/React-Native snippets Extension - this allows you to create your components with ease by using rface command

ROUTES, NAVIGATION & HEADER  
12. npm install @mui/material @emotion/react @emotion/styled - Material UI offers a package of ready built ui components for your react app
13. npm i react-router-dom, this is to control routes, import BrowerRouter in index.js and wrap the App with it
14. In App.js import React,nesteverything with fragments
15. Add all routes, on App.js
16. Add link of routes in Header.js a component
 

STATE MANAGEMENT: 
17. install redux = npm i react-redux @reduxjs/toolkit

18. make store folder

19. Add index.js to the store - this is a file that has the whole data store, import configurestore, createslice, export store

20. On index.js in frontend folder, impot Provider from 'react-redux', import store from store directory. Wrap the Provider around app component, and give store as a prop to the Provider. 

CONNECTING FRONTEND WITH THE BACKEND: 

21. To connect the backend to the frontend, we use axios, cd .. into the backend (cd./backend, npm start. then cd back into the frontend, cd./frontend 
npm i axios.
import axios to the component you are sending a request from. to import axois from "axois".

22. Since we are sending 1 req from server( localhost:3000) to server (localhost:5001), we get a CORS error that restricts us from sharing info across servers. You can disable this by installing (npm i cors) to the backend. 
Import cor from "cors" in App.js in the backend, then do app.use(cors()); before any midlleware in App.js in the backend. 

23. Other packages to install =
install npm i @mui/icons-materials to get icons
instal npm i @mui/styles - this package allows to to put class styles to mui components (Box, TYpography)
  
























