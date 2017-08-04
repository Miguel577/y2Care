# Dev #

Trello: https://trello.com/b/JxGTgiQV/y2care

## Key Points to tackle ##
- Create interactive website that has a landing page, user login, search function, and history of searches
- Search function:
  y Algebra: returns Algebra package
- Package function:
  Contains:
    Brief summary of concept (very brief since we assume the user has a rough understanding)

    Blob that helps users make the mental leap from basic definition to cool use cases

    Relevant links to info websites, use cases, and tangents

    How to build learning from there  

## Outline ##
- Create landing page with basic search bar
- Create user login page
- Backend database for user and search storage
- API.AI for returning search query
- Method of webscraping info based on API.AI search query return
  for now, we can hard code values
-UI/UX

## Timeline ##
- 8/4/17 -M
  Create landing page and basic search bar


# y2Care
Helping you figure out why to care

## Overview ##
This application, in its Alpha stage, helps users get motivated about concepts learned in school or from external resources.

Currently prototyping a model, let us know if you have any feedback!

## Running ##

Install dependencies: $ npm install or $ yarn

Fire up a development server: $ npm run dev

Once the server is running, you can visit http://localhost:3000/

## File layout ##

Frontend React
The top level application Container is in frontend/containers/AppContainer.js
CSS styles are in frontend/assets/stylesheets/base.scss
Backend Express
Entry point is server.js
API routes are under backend/routes.js
API routes are served under http://localhost:3000/api
Production Build

To build your production assets and run the server:

$ npm start
Deploying to Heroku

This app is set up for deployment to Heroku!

This assumes you have already have a Heroku account and have the Heroku CLI installed

$ heroku login
$ heroku create -a name-of-your-app
$ git push heroku master
$ heroku open
Heroku will follow the build command in your package.json and compile assets with webpack.prod.config.js. It runs the Express web server in server.js.

If you're unfamiliar with Heroku deployment (or just need a refresher), they have a really great walkthrough here.
