# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Rolinda Strijker

## Overview.

In this web app you will see a list of movies. This list is filled with a movie api from The Movie Database. In order for this web app to work you will need an API key from The Movie Database. When clicking on a movie you will see some more information about the movie (plot, reviews and similar movies). You can edit and delete a movie and you can also add a movie.

Features:

- Discover movies
- Edit movie
- Delete movie
- Add movie
- See more info of a movie
- See movie reviews
- See similar movies
- Filter movies in movie list

## Setup.

If you cloned the repo you need to run the command npm install (in a cmd in the project root folder) to install all the necessary node modules for this web app.
In order to let this web app work with The Movie Database you will need an API key. This API key needs to be added to a .env file. This .env file needs to be created in the root of the web app. If you created the .env file add the following: REACT_APP_TMD_API_KEY=<THE_API_KEY>.

After the above steps you can use the command npm start to see the whole web app or use the command npx start-storybook -p 9001 -c .storybook to start storybook and see all components apart.

## Data Model Design.

. . . . . A diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][model]

. . . Briefly explain any non-trivial aspects of the model . . . . .

~~~
place code snippets, e.g. JSON, inside these fence delimiters and they will appear in a block-like structure.
~~~
## UI Design.

. . . . . Screenshots of the app's views with brief statements of their use (see examples below) . . . . . . .

![][main]

>> Shows a card for each contact in the datastore. This contact list can be filtered by name and gender. A contact can be edited or deleted a contact. 

![][detail]

>> . . . bla bla bla . . . . . 

## Routing.

. . . . List each route supported by the app. For each one state the associated view and whether it's public/private (requires authentication) . . . . .

- /articles (public)- displays all published articles - title and author only.
- /articles/:id (private) - detail view of a particular article.
+ /articles/:author:id - display all articles by a specific author.
- etc
- etc

## Storybook.

. . . . . Include a screenshot of the fully expanded list of stories from the tool's UI (see below). Group the stories appropriately (e.g. Contact page group) . . . .

![][stories]

. . . . (Optional) State any non-standard Storybook add-ons used and include a screenshot(s) to illustrate.

## Backend (Optional).

. . . . . Briefly explain any backend used by the app (e.g. JSON-server, Open API) . . . . . .  

## Authentication (Optional).

. . . . Briefly explain the authentication method used by your app (e.g. JWT, Firebase) ). If user registration is not supported, mention test username/password pairs available . . . . . .

## Independent learning.

. . . . . State any non-standard aspects of React or other related technologies that you researched and applied in this assignment, other than those covered by the two previous sections . . . . .

[model]: ./img/model.png
[main]: ./img/main.png
[detail]: ./img/detail.png
[stories]: ./img/stories.png
