// const doSomething = (callback) => {
//   setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS"];
//     callback();
//   }, 2000);
// };

// const callback = (err, result) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// };

// doSomething(callback);

// const url = "https://restcountries.com/v2/all"; // countries api
// fetch(url)
//   .then((response) => response.json()) // accessing the API data as JSON
//   .then((data) => {
//     // getting the data
//     console.log(data);
//   })
//   .catch((error) => console.error(error));

const allTitles = document.getElementsByTagName("h1");

console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each elements in the HTMLCollection
}

const allTitles1 = document.getElementsByClassName("title");

console.log(allTitles1); //HTMLCollections
console.log(allTitles1.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // prints each elements in the HTMLCollection
}

let firstTitle = document.getElementById("first-title");
console.log(firstTitle);
