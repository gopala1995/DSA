// const fs = require('fs')

// Write a API call by calling the given API and Populate the data as per the requirement

// https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json
// * List the movies starts with "x"
// * List the movies with  released in year y
// * List the  Movies released between the range of years x and y

const fs = require("fs");

// Sample data to write to the JSON file
const data = {
  name: "Gopala",
  age: 25,
  email: "gopala@example.com",
  address: {
    street: "123 Main St",
    city: "SHC",
    country: "IND",
  },
};

const jsonData = JSON.stringify(data, null, 2);

fs.writeFile("data.text", jsonData, (err) => {
  if (err) {
    console.error("Error writing to file", err);
  } else {
    console.log("JSON file has been saved.");
  }
});

const URL =
  "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json";

fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(
      "====>",
      data.filter((el) => el.title.charAt(0) == "x")
    );
  })
  .catch((err) => {
    console.error(err);
  });

fetch(URL, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
    Authorization: "bearer-token",
  },
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
