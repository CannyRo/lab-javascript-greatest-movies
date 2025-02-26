// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movie) => movie.director);
  return directorsArray.filter(
    (director, index) => directorsArray.indexOf(director) === index
  );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const categoryMoviesArray = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  const directorMoviesArray = categoryMoviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  return directorMoviesArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sumOfAverage = moviesArray.reduce((acc, movie) => {
    if (movie.score) {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  const rawAverage = sumOfAverage / moviesArray.length;
  return Math.round(rawAverage * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMoviesArray = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMoviesArray.length === 0) {
    return 0;
  }
  const sumOfAverage = dramaMoviesArray.reduce((acc, movie) => {
    if (movie.score) {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  const rawAverage = sumOfAverage / dramaMoviesArray.length;
  return Math.round(rawAverage * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.toSorted((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMoviesArray = moviesArray.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });
  const titlesArray = sortedMoviesArray.map((movie) => movie.title);
  return titlesArray.length > 20 ? titlesArray.slice(0, 20) : titlesArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const deepCopy = JSON.parse(JSON.stringify(moviesArray));
  const formatedTimeMoviesArray = deepCopy.map((movie) => {
    const durationArray = movie.duration.split(" ");
    const hours = parseInt(durationArray[0]);
    const minutes = durationArray[1] ? parseInt(durationArray[1]) : 0;
    const totalDurationMinute = ( hours * 60 ) + minutes;
    movie.duration = totalDurationMinute;
    return movie;
  });
  // console.warn("--- formatedTimeMoviesArray ---");
  // console.log(formatedTimeMoviesArray);
  // console.warn("--- ORIGINAL ---");
  // console.log(moviesArray);
  return formatedTimeMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if(moviesArray.length === 0){
    return null;
  }
  const yearsArray = moviesArray.map(movie => movie.year);
  const uniqueYearsArray = yearsArray.filter((year,index) => yearsArray.indexOf(year) === index);
  const sortedUniqueYearsArray = uniqueYearsArray.sort((a,b)=> a-b);
  let bestYear = 0;
  let bestRate = 0;
  sortedUniqueYearsArray.forEach( year => {
    let filteredYearMoviesArray = moviesArray.filter(movie => movie.year === year);
    let thisAverageScore = scoresAverage(filteredYearMoviesArray);
    if(thisAverageScore > bestRate) {
      bestYear = year;
      bestRate = thisAverageScore;
    }
  })
  return `The best year was ${bestYear} with an average score of ${bestRate}`;
  
}
