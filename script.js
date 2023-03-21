'use strict';

let numberOfFilms

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просомтренных фильмов?'),
              b = prompt('На сколько оцените его?')
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b
            console.log('done')
        } else {
            console.log('error')
            i--
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('просмотрено мало фильмов')
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('классический зритель')
    } else {
        console.log('Вы киноман')
    }
}

function showMyDb() {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB)
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}?`))
    }
}

// start()
// rememberMyFilms()
// detectPersonalLevel()
showMyDb()
writeYourGenres()