// Ставим constant вместо let, т.к. не изменная переменная.
// Перед promt ставим + , т.к. ответом будет цыфра
const numberOfFilms = +prompt("Сколько фильмов вы уже смотрели?", "");
    // console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
console.log(personalMovieDB);

let a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько оцените его?"),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt("На сколько оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


