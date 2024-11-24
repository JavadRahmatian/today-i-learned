// const initialFacts = [
//    {
//       id: 1,
//       text: "React is being developed by Meta (formerly facebook)",
//       source: "https://opensource.fb.com/",
//       category: "technology",
//       votesInteresting: 24,
//       votesMindblowing: 9,
//       votesFalse: 4,
//       createdIn: 2021,
//    },
//    {
//       id: 2,
//       text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//       source:
//          "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//       category: "society",
//       votesInteresting: 11,
//       votesMindblowing: 2,
//       votesFalse: 0,
//       createdIn: 2019,
//    },
//    {
//       id: 3,
//       text: "Lisbon is the capital of Portugal",
//       source: "https://en.wikipedia.org/wiki/Lisbon",
//       category: "society",
//       votesInteresting: 8,
//       votesMindblowing: 3,
//       votesFalse: 1,
//       createdIn: 2015,
//    },
// ];

const CATEGORIES = [
   { name: "technology", color: "#3b82f6" },
   { name: "science", color: "#16a34a" },
   { name: "finance", color: "#ef4444" },
   { name: "society", color: "#eab308" },
   { name: "entertainment", color: "#db2777" },
   { name: "health", color: "#14b8a6" },
   { name: "history", color: "#f97316" },
   { name: "news", color: "#8b5cf6" },
];

//Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");
// console.dir(factsList);

// Create DOM elements: Render facts in list
factsList.innerHTML = "";

// factsList.insertAdjacentHTML("afterbegin", "<li>Jonas</li>");
// factsList.insertAdjacentHTML("afterbegin", "<li>javad</li>");

// const htmlArr = initialFacts.map(
//    (fact) => `<li class="fact">${fact.text}</li>`
// );

// Load data from supabase
loadFacts();
async function loadFacts() {
   const res = await fetch(
      "https://capfamvnkxdfepqmtcni.supabase.co/rest/v1/facts",
      {
         headers: {
            apikey:
               "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhcGZhbXZua3hkZmVwcW10Y25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MTU4MTEsImV4cCI6MjA0NzE5MTgxMX0.xEIF-rJZXXRrngxwcGIWNZwyl73KSFqQ7H21QlzUlPA",
            authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhcGZhbXZua3hkZmVwcW10Y25pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2MTU4MTEsImV4cCI6MjA0NzE5MTgxMX0.xEIF-rJZXXRrngxwcGIWNZwyl73KSFqQ7H21QlzUlPA",
         },
      }
   );

   const data = await res.json();
   console.log(data);
   // const filteredData = data.filter((fact) => fact.category === "technology");
   // const filteredData = data.filter(
   //    (fact) => fact.category?.toLowerCase() === "technology"
   // );

   // console.log(res);
   // console.log(data[1]);
   createFactsList(data);
}

// createFactsList(initialFacts);
// createFactsList([{ text: "jonas" }]);

function createFactsList(dataArray) {
   const htmlArr = dataArray.map(
      (fact) => `    <li class="fact">
                     <p>
                       ${fact.text}
                        <a
                           class="source"
                           href="${fact.source}"
                           target="_blank"
                           >(Source)</a
                        >
                     </p>
                     <span class="tag" style="background-color: ${
                        CATEGORIES.find((cat) => cat.name === fact.category)
                           .color
                     }">${fact.category}</span>
                     <div class="vote-buttons">
                        <button>👍 ${fact.votesInteresting}</button>
                        <button>🤯 ${fact.votesMindblowing}</button>
                        <button>⛔️ ${fact.votesFalse}</button>
                     </div>
                  </li>`
   );

   console.log(htmlArr);

   const html = htmlArr.join("");

   factsList.insertAdjacentHTML("afterbegin", html);
}

// Toggle form visibility
btn.addEventListener("click", function () {
   if (form.classList.contains("hidden")) {
      form.classList.remove("hidden");
      btn.textContent = "Close";
   } else {
      form.classList.add("hidden");
      btn.textContent = "Share a fact";
   }
});
// console.log(btn);

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));

// its filter first child
console.log([7, 64, 6, -23, 11].find((el) => el > 10));

/* 
function calcAge(year) {
   const currentYear = new Date().getFullYear();
   const age = currentYear - year;
   return age;
}

const age1 = calcAge(2008);
console.log(age1);
console.log(calcAge(2006)); 

let votesInteresting = 20;
let votesMindblowing = 20;

if (votesInteresting === votesMindblowing) {
   console.log("this fact is equally interestin and mindblowing");
} else {
   console.log("something else");
}

let votesFalse = 7;
const totalUpvotes = votesInteresting + votesMindblowing;

const message =
   totalUpvotes > votesFalse
      ? "The fact is true"
      : "Might be false, check more souces...";
console.log(message);

const text = "Lisbon is the capital of Porugal";

const upperText = text.toUpperCase();
console.log(upperText);

const str = `The current fact "${text}". It is ${calcAge(
   2015
)} years old. It is probably ${
   totalUpvotes > votesFalse ? "correct" : "not true"
}.`;

console.log(str);
 */

/* const calcFactAge2 = (year) => new Date().getFullYear() - year;

const calcFactAge3 = (year) =>
   year <= new Date().getFullYear()
      ? new Date().getFullYear - year
      : `asdaImpossible year. Year needs to be less or equal ${new Date().getFullYear()}`;

console.log(calcFactAge2(2006));
console.log(calcFactAge3(2006));
 */
/* 
const fact = ["lisbon is the capital of Portugal", 2015, true];

// console.log(fact);
const [text, createdIn, isCorrect] = fact;
console.log(text);

const newFact = [...fact, "society"];
console.log(newFact);

const factObj = {
   text: "Lisbon is the capital of Portugal",
   createdIn: 2015,
   isCorrect: true,
   category: "society",
   createSummary: function () {
      return `The fact "${
         this.text
      }" is from the category ${this.category.toUpperCase()}`;
   },
};

console.log(factObj.text);
console.log(factObj["text"]);

const { category } = factObj;

console.log(category);
console.log(factObj.createSummary());

[2, 4, 6, 8].forEach(function (el) {
   console.log(el);
});

// const times10 = [2, 4, 6, 8].map(function (el) {
//    return el * 10;
// });

const times10 = [2, 4, 6, 8].map((el) => el * 10);

console.log(times10);

const CATEGORIES = [
   { name: "technology", color: "#3b82f6" },
   { name: "science", color: "#16a34a" },
   { name: "finance", color: "#ef4444" },
   { name: "society", color: "#eab308" },
   { name: "entertainment", color: "#db2777" },
   { name: "health", color: "#14b8a6" },
   { name: "history", color: "#f97316" },
   { name: "news", color: "#8b5cf6" },
];

const allCategories = CATEGORIES.map((el) => el.name);
// let allCategories = CATEGORIES.forEach(function (element) {
//    return element.name;
//    // console.log("helo");
// });

console.log(allCategories);

const initialFacts = [
   {
      id: 1,
      text: "React is being developed by Meta (formerly facebook)",
      source: "https://opensource.fb.com/",
      category: "technology",
      votesInteresting: 24,
      votesMindblowing: 9,
      votesFalse: 4,
      createdIn: 2021,
   },
   {
      id: 2,
      text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
      source:
         "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
      category: "society",
      votesInteresting: 11,
      votesMindblowing: 2,
      votesFalse: 0,
      createdIn: 2019,
   },
   {
      id: 3,
      text: "Lisbon is the capital of Portugal",
      source: "https://en.wikipedia.org/wiki/Lisbon",
      category: "society",
      votesInteresting: 8,
      votesMindblowing: 3,
      votesFalse: 1,
      createdIn: 2015,
   },
];

let currentYear = new Date().getFullYear();
const calcFactAge3 = (year) =>
   year <= currentYear
      ? currentYear - year
      : `asdaImpossible year. Year needs to be less or equal ${new Date().getFullYear()}`;

const factAges = initialFacts.map((el) => calcFactAge3(el.createdIn));
// const factAges = initialFacts.map(
//    (el) => new Date().getFullYear() - el.createdIn
// );
console.log(factAges);

console.log(factAges.join("/"));
 */

console.log(`${CATEGORIES.find((cat) => cat.name === fact.category).color}`);
