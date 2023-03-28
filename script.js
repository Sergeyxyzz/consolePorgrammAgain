'use strict';

let numberOfFilms
let answer
let arr = []

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('просмотрено мало фильмов')
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('классический зритель')
        } else {
            console.log('Вы киноман')
        }
    },
    showMyDb: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB)
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            answer = prompt(`Ваш любимый жанр под номером ${i}?`)
            if (answer === null || answer === '') {
                i--
            } else {
                arr.push(answer)
            }
        }
        personalMovieDB.genres = arr
        arr.forEach((genre, i) => {
            console.log(`Любимый жанр ${++i} это ${genre}`)
        })
    },
    toggleVisibleMyDB: function() {
        if (!this.privat) {
            this.privat = true
        } else {
            this.privat = false
        }
    }
}


personalMovieDB.writeYourGenres()
// personalMovieDB.toggleVisibleMyDB()
personalMovieDB.showMyDb()
// console.log(personalMovieDB.privat)

// personalMovieDB.start()
// personalMovieDB.rememberMyFilms()
// personalMovieDB.detectPersonalLevel()
// personalMovieDB.showMyDb()
// personalMovieDB.writeYourGenres()