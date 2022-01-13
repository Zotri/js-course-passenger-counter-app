import "./styles.css";

var count = document.getElementById("count-el");

count.innerHTML = 0;

var incrementBtn = document.createElement("button");

incrementBtn.innerHTML = "INCREMENT";
incrementBtn.type = "submit";
incrementBtn.setAttribute("id", "increment-btn");
document.body.appendChild(incrementBtn);

incrementBtn.addEventListener("click", () => {
  count.innerHTML++;
});

var countDownBtn = document.createElement("button");
countDownBtn.innerHTML = "Race on 5!";
countDownBtn.setAttribute("id", "count-down-btn");

document.body.appendChild(countDownBtn);

// create event

// const event = new CustomEvent("race");

const countDown = () => {
  var raceCounter = document.createElement("h2");
  raceCounter.setAttribute("id", "race-counter-txt");
  document.body.appendChild(raceCounter);

  var i = 5;
  var id = setInterval(function () {
    raceCounter.innerHTML = i;
    console.log(i);
    i--;

    if (i === -1) {
      raceCounter.innerHTML = "GO! 🏁";
      raceCounter.style.fontWeight = "bold";
      raceCounter.style.color = "red";
      clearInterval(id);
      return;
    }
  }, 1000);
};

// countDownBtn.dispatchEvent(event);

//form.addEventListener('awesome', e => console.log(e.detail.text()));
countDownBtn.addEventListener("click", () => {
  countDown();
});

const save = () => {
  let countStr = count.innerText + " - ";
  var saveEl = document.getElementById("save-el");
  saveEl.textContent += " " + countStr;
  count.innerHTML = 0;
};

document.getElementById("save-btn").addEventListener("click", () => {
  save();
});
