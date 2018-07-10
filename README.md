# MEAN-TODO
A todo app with everything you'd need for a working full-stack web app with the MEAN stack.

M -> Mongo

E -> Express

A -> Angular

N -> Node

This could be the start(ing point) of something big.

## Setup to access the Back-End
The usual: 

`$ git clone` this repo

`$ npm install`

`$ nodemon app.js`

or if you don't roll with that:

`$ node app.js` and have fun refreshing

## Setup the Front-End
The express server will run the files in the public folder, which will contain 
all the front-end side of the app. The front-end can be written with any 
framework, just create a directory inside public. If you want to run the Angular
setup already here, just do:

`$ cd public/angular`

`$ npm install`

The static content is pointing to the app's build. You'll need to change this if
you'd like your server to serve a different front-end.

`app.use('/assets', express.static(__dirname + '/public/angular/build'));`

### How it works
For the moment, running the node app simply make the API urls available to the
front-end. The front-end just uses the available API. 

All front-end scripts work as usual, and can be run independently from the 
backend. Node and Angular are currently setup to run in different ports.
