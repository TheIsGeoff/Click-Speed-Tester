
// define veriables
const buttons = document.querySelectorAll(".time-controls_button");
var time = 8;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    console.log("Clicked score:", button.dataset.level);
    time = button.dataset.score;

    // Remove the active class from all buttons
    buttons.forEach(btn => btn.classList.remove("time-controls_button--active"));

    // Add the active class to the clicked button
    button.classList.add("time-controls_button--active");
  });
});
