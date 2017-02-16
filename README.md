# liri-node-app
Liri comes with 4 built in commands:

## 1) 'my-tweets'
`node liri.js my-tweets` will return the 20 most recent tweets made by myself.

## 2) 'spotify-this-song'
`node liri.js spotify-this-song [song title]` will return:
* Artist(s)
* The song's name
* A preview link of the song from Spotify
* The album that the song is from

## 3) 'movie-this'
`node liri.js movie-this [movie title]` will return: 
* Movie title 
* Release year
* Average rating
* Original language
* Plot 

**Please be aware that I am using the moviedb npm package in place of OMBD as that service is currently down, the data returned may differ slightly** 

## 4) 'do-what-it-says'
`node liri.js do-what-it-says` will return whatever command is placed in random.txt.  **Go Wild**.   
