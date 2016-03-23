## Assignment 1 - AngularJS App
======
**Name:** Michelle McCausland
**Student Number:** 20046556

------

###Overview
As part of my college assignment I have created a smart goal tracker application to keep track of smart goals. SMART Goals refer to projects or goals which are specific, measurable, achievable, relevant and time sensitive. The application contains the ability to create and track these smart goals by individual users.

This application is connected to a firebase system in order to manage the application data relating to users and to smart goals.

Once a user has registered and logged in to this application they can create, edit or delete smart goals as well as look at their own user information and update it accordingly.

------

###Features
+ Create smart goals which are specific to a logged in user
+ Delete smart goals which are specific to a logged in user
+ Profile section which allows you to view your personal data
+ Search feature built in to allow you to search for smart goals
+ Firebase back end to hold application data

------

###Installation Requirements
+ ionic 1.2.4
+ cordova
+ angular
+ firebase
+ scss
+ gulp

To get this project working simply download the project, ensure you have all of above installed on your machine.
Ensure you change the FIREBASE_URL constant to your own firebase URL
From the command line navigate to the root of the project and type the following:


```javascript
ionic serve
```

This should automatically open up the app in your default web browser where you can start using the application!

------

###Data Model Design
![alt text](https://github.com/mishacreatrix/smartgoalproject/blob/master/projectFiles/smartgoaldiagram.png "Data Model Design")
------

###App Design
![alt text](https://github.com/mishacreatrix/smartgoalproject/blob/master/projectFiles/Diagram.png "App Design")

------

###UI Design

![alt text](https://github.com/mishacreatrix/smartgoalproject/blob/master/projectFiles/home.PNG "Home Screen")
![alt text](https://github.com/mishacreatrix/smartgoalproject/blob/master/projectFiles/login.PNG "Login Screen")
![alt text](https://github.com/mishacreatrix/smartgoalproject/blob/master/projectFiles/profile.PNG "Profile Screen")
![alt text](https://github.com/mishacreatrix/smartgoalproject/blob/master/projectFiles/register.PNG "Register Screen")
![alt text](https://github.com/mishacreatrix/smartgoalproject/blob/master/projectFiles/smartgoals.PNG "Smartgoals Screen")
![alt text](https://github.com/mishacreatrix/smartgoalproject/blob/master/projectFiles/individsmartgoal.PNG "Individual Smart Goal Screen")


------

###Routing

+ /home - This is the home page that you will be shown when using this application
+ /smartgoal - This displays a list of smart goals relating to the logged in user
+ /smartgoal/:sgId - This displays the detail related to an individual smartgoal
+ /createsg - This page brings you to a form where you can create new smart goals
+ /register - This brings you to a page where you can register to begin using the app
+ /profile - This will display the user's information based on logged in user.
+ /login - This is the login screen which allows the user to log in and interact with the application

------

###Extra features
+ Login & Authentication
+ User Registration
+ Bootstrap grid system built in for responsiveness

###Independant Learning
+ Learning how to utilize firebase as a backend and combine it with the project - Implementing CRUD methodologies with the ionic app proved a challenging experience
+ Learning how to work with the ionic framework in order to create this project
+ Learning how to utilize the bootstrap responsive grid system in order to create a responsive UI - Having worked with bootstrap and foundation frameworks before this was a good addition to my knowledge