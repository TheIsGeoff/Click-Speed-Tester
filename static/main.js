

// define veriables
const buttons = document.querySelectorAll(".time-controls_button");
const mainButton = document.getElementById("clicker-input_button");
const timerDisplay = document.getElementById("timer-display");
const timeControls = document.getElementById("time-controls");
const resetButton = document.getElementById("reset_button");
var time = 8;
var clicks = 0
var gameActive = 1

buttons.forEach(button => {
  button.addEventListener("click", () => {
    console.log("Clicked score:", button.dataset.level);
    time = button.dataset.level;

    // Remove the active class from all buttons
    buttons.forEach(btn => btn.classList.remove("time-controls_button--active"));

    // Add the active class to the clicked button
    button.classList.add("time-controls_button--active");
  });
});

mainButton.addEventListener("click", () => {
    if (clicks === 0 & gameActive === 1) {
        clicks = 1;
        timerDisplay.classList.remove("hidden");
        timerDisplay.innerHTML = `<p>${time}.00</p>`;
    
        timeControls.classList.add("hidden");
        UpdateButtonText(clicks);
        StartTimer(time);
    } else if (gameActive === 1) {
        clicks += 1;
        UpdateButtonText(clicks);
    }
});

function StartTimer(duration) {
    let remainingTime = duration;

    timerDisplay.innerHTML = `<img src="/static/icons/alarm-clock-regular-full.svg" alt="" class="icon-img"><p>${remainingTime}</p>`;

    const timerInterval = setInterval(() => {
        remainingTime -= 1;

        if (remainingTime <= 0) {
            remainingTime = 0;
            clearInterval(timerInterval);
            gameActive = 0;
            endGame();
        }

        timerDisplay.innerHTML = `<img src="/static/icons/alarm-clock-regular-full.svg" alt="" class="icon-img"><p>${remainingTime}</p>`;
    }, 1000);
}

resetButton.addEventListener("click", () => {
    // Reset variables
    clicks = 0;
    gameActive = 1;

    // Reset UI elements
    timerDisplay.classList.add("hidden");
    timeControls.classList.remove("hidden");
    resetButton.classList.add("hidden");
    UpdateButtonText("CLICK TO BEGIN!");
});

function endGame() {
    timerDisplay.innerHTML = `<img src="/static/icons/alarm-clock-regular-full.svg" alt="" class="icon-img"><p>${time} second test:</p>`;
    UpdateButtonText(`Your CPS Is ${ (clicks / parseInt(time)).toFixed(2) }`);
    resetButton.classList.remove("hidden");
};

function UpdateButtonText(value) {
    mainButton.innerHTML = `<h1 id="button-text">${value}</h1>`;
}