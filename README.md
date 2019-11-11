# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Rolinda Strijker

## Overview.

In this web app you will see a list of movies. This list is filled with a movie api from The Movie Database. In order for this web app to work you will need an API key from The Movie Database. When clicking on a movie you will see some more information about the movie (plot, reviews and similar movies). You can edit and delete a movie and you can also add a movie.

### Features

- Discover movies
- Edit movie
- Delete movie
- Add movie
- See more info of a movie
- See movie reviews
- See similar movies
- Filter movies in movie list

## Setup.

If you cloned the repo you need to run the command **npm install** (in a cmd in the project root folder) to install all the necessary node modules for this web app.
In order to let this web app work with The Movie Database you will need an API key. This API key needs to be added to a .env file. This .env file needs to be created in the root of the web app. If you created the .env file add the following: **REACT_APP_TMD_API_KEY=<THE_API_KEY>**.

After the above steps you can use the command **npm start** to see the whole web app or use the command **npx start-storybook -p 9001 -c .storybook** to start storybook and see all components apart.

## Data Model Design.

![][model]

Below a sample of the JSON code used for example storybook.

~~~
sample = {
  popularity: 457.734,
  vote_count: 4850,
  video: false,
  poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  id: 475557,
  adult : false,
  backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
  original_language: "en",
  original_title: "Joker",
  genre_ids: [
    80,
    18,
    53
  ],
  title: "Joker",
  vote_average: 8.5,
  overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
  release_date: "2019-10-04"
}
~~~
## UI Design.

Below you see some screenshots of the web app and their use.

![][main]

>> Shows a card for each movie in the datastore. This movie list can be filtered by title and genre. A movie can be edited or deleted. 

![][addMovie]

>> When you click on the button **Add new movie** a new div will appear. In this div you can add a new movie.

![][detail]

>> This is the detail page of a movie. In this detail view, reviews are shown too. These reviews are collected from the The Movie Database API too just like the movie itself. When clicking on read more you will be send to a new page where you can read the whole review.

![][detailSimilar]

>> On the detail page of a movie you also have a private part. When you click on the button **See Private Data** a list of similar movies will appear. This is just like reviews and movies collected with The Movie Database API.

## Routing.

- /movies (public)- displays all movies.
- /movies/:id (private) - detail view of a particular movie.

## Storybook.

![][stories]

## Backend (Optional).

Wanted to use a JSON-server from https://my-json-server.typicode.com/. But my json file has to much content and I didn't have enough time to look for another option.

## Independent learning.

I needed to figure all the stuff out for the API of The Movie Database.

[model]: ./img/model.png
[main]: ./img/main.png
[addMovie]: ./img/addMovie.PNG
[detail]: ./img/detail.png
[detailSimilar]: ./img/detailSimilar.png
[stories]: ./img/stories.png
