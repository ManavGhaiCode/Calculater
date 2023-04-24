const numberButtons = document.querySelectorAll(".number-button");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("button");
    })
})