function createTimeButtons(values) {
    const container = document.getElementById("time-controls");
    container.innerHTML = "";

    values.forEach(seconds => {
        const button = document.createElement("button");
        button.classList.add("time-controls_button");

        button.dataset.level = seconds; // SET FIRST

        if (seconds === 8) {
            button.classList.add("time-controls_button--active");
        }

        button.innerHTML = `
            <img src="/static/icons/alarm-clock-regular-full.svg" alt="" class="icon-img">
            <p>${String(seconds).padStart(2, "0")}s</p>
        `;

        container.appendChild(button);
    });
}

createTimeButtons([1, 2, 5, 8, 10, 15, 20]);
