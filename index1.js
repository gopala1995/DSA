const URL =
  "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json";

// fetch(URL)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
