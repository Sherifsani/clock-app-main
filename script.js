const btn = document.querySelector(".more-less-btn");
const btnimg = document.querySelector(".more-less-btn img");
const btntext = document.querySelector(".more-less-btn span");
const mainsect = document.querySelector(".main-sect");
const overlay = document.querySelector(".overlay");
const main = document.querySelector("main");
const refresh = document.querySelector(".refresh");

btn.addEventListener("click", () => {
  btnimg.classList.toggle("rotate");
  if (btntext.innerText == "MORE") {
    btntext.innerText = "LESS";
  } else {
    btntext.innerText = "MORE";
  }
  main.classList.toggle("shift");
  console.log(33);
});

const quote = document.querySelector("q");
const author = document.querySelector(".author");
async function fetchQuote() {
  let response = await fetch("https://api.quotable.io/random");
  let data = await response.json();
  //   console.log(data);
  quote.textContent = data.content;
  author.textContent = data.author;
}

fetchQuote();
refresh.addEventListener("click", () => {
  refresh.classList.toggle("refreshe");
  fetchQuote();
});

const time = document.querySelector("#time");
const timezone = document.querySelector("#timezone");
const weekday = document.querySelector("#weekday");
const yearday = document.querySelector("#yearday");
const weekno = document.querySelector("#weekno");
const abbr = document.querySelector("#abbr");

async function fetchTime() {
  let response = await fetch("http://worldtimeapi.org/api/ip");
  let data = await response.json();
  console.log(data);
  abbr.textContent = data["abbreviation"];
  timezone.textContent = data["timezone"];
  weekday.textContent = data["day_of_week"];
  yearday.textContent = data["day_of_year"];
  weekno.textContent = data["week_number"];
  // time.textContent = data[]
  // time.textContent = data[]
}
// item = fetchTime();
// console.log(item);
fetchTime();

const city = document.querySelector("#city");
const country = document.querySelector("#country");
async function fetcher() {
  let response = await fetch(
    "https://api.ipbase.com/v2/info?apikey=MkgdGR7HjgPY4Qu3P95L5WmrFTKHnAhao1aebxO0&ip=1.1.1.1"
  );
  let data = await response.json();
  console.log(data);
  city.textContent = data.data.location.city.name;
  country.textContent = data.data.location.country.alpha3;
}
fetcher();

function timingIt() {
  const hr = document.querySelector(".hr");
  const min = document.querySelector(".min");
  let hours;
  let minutes;

  var date = new Date();

  hours = date.getHours();
  minutes = date.getMinutes();

  hr.textContent = hours;
  min.textContent = minutes;

  const greeting = document.querySelector("#gretings");
  const bod = document.querySelector("body");
  const icon = document.querySelector("#icc");
  let greet = "";
  if (hours >= 5 && hours <= 11) {
    greet = "GOOD MORNING";
  } else if (hours >= 12 && hours <= 17) {
    greet = "GOOD AFTERNOON";
  } else {
    greet = "GOOD EVENING";
    bod.classList.add("night");
    icon.src = "assets/desktop/icon-moon.svg";
  }
  greeting.textContent = greet;
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let interval = (60 - new Date().getSeconds()) * 1000 + 5;
  setTimeout(timingIt, interval);
}
timingIt();
