

// define veriables
const buttons = document.querySelectorAll(".time-controls_button");
const mainButton = document.getElementById("clicker-input_button");
const timerDisplay = document.getElementById("timer-display");
const timeControls = document.getElementById("time-controls");
var time = 8;
var clicks = 0

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
    if (clicks === 0) {
        clicks = 1;
        timerDisplay.classList.remove("hidden");
        timerDisplay.innerHTML = `<p>${time}.00</p>`;
    
        timeControls.classList.add("hidden");
        UpdateButtonText(clicks);
        StartTimer(time);
    } else {
        clicks += 1;
        UpdateButtonText(clicks);
    }

});

function UpdateButtonText(value) {
    mainButton.innerHTML = `<h1 id="button-text">${value}</h1>`;
}

function StartTimer(duration) {
    let remainingTime = duration;

    timerDisplay.innerHTML = `<p>${remainingTime}</p>`;

    const timerInterval = setInterval(() => {
        remainingTime -= 1;

        if (remainingTime <= 0) {
            remainingTime = 0;
            clearInterval(timerInterval);
        }

        timerDisplay.innerHTML = `<p>${remainingTime}</p>`;
    }, 1000);
}