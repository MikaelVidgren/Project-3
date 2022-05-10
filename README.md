# Project-3 & 4

Project 3 notes below
For teacher a video is provided where I show functions of this REST API working
I used some online tutorials to come up with the idea of seperate folders and files inside the backend folder to make the code look more neat and trimmed
It clearly is missing all the frontend functions but currently is in working state to GET, POST, PUT and DELETE items


Did not record video as the app would not run anymore... You can check out everything new inside frontend folder (here: https://github.com/MikaelVidgren/Project-3/tree/master/frontend)
Otherwise this Project-4 is coninued from project-3 so it is still named as project 3 in Github.

Project 4 notes below
*******
Read me general information.
*******
I try and I try but simply I cannot get it to work and I am currently running out of time as today is the final day to return this task...

The project 4 was in good shape, I created a form for registeration and Login but as I continued to implement the back and front end it became such a mess and I cannot get it to work no more

So for now I give up and return the assingement as is.

*******
Application is Full stack course Project-4.
The data can be added and delted by the user. Users can be added by registering. Users are unique and show only their own goals. Goals can be everything, for example daily goals, saving goals, to do goals, etc.
*******
To connect database with MongoDB Compass:
mongodb+srv://Mikael:Mikael@project3.vtpna.mongodb.net/Project3
*******
npm i bcryptjs
for password crypting
npm i jsonwebtoken 
for crypting
*******
http://localhost:5000/api/getall/add
For POST
*******
http://localhost:5000/api/getall/delete/
For Delete
*******
http://localhost:5000/api/users/login
For POST user login
*******
http://localhost:5000/api/getall
For GET to get all goals, if user signed in
than get all unique goals
*******
For project 4 I set up on backend:
userModel.js for users, to specifie required info (like name and email cannot be empty)
userRoutes.js for user routes (/login, etc)
userController.js for password encryption, create user, authentication, etc.
Added "JWT_SECRET = Mikael123" for authentication to.env file
*******

*******

*******

*******

*******

*******

*******
"npm i axios react-toastify" installed to show errors (asyncThunk)
*******
Redux was used to help create the front-end
I used "npx create-react-app frontend --template redux" to create react app, frontend folder for frontend stuff and to install redux
*******
MERN stack guide video I used to help with this course and with this assingment:
https://www.youtube.com/watch?v=-0exw-9YJBo&list=PLillGF-RfqbbQeVSccR9PGKHzPJSWqcsm
*******
