function rollDie() {
    // Generate a random number from 1 to 6
    const randomNumber = Math.floor(Math.random() * 6);
    document.getElementById("result").textContent = randomNumber + 1;

    // Choose a random color for the die
    const colors = [
        "pink",
        "lightblue",
        "lightgreen",
        "orange",
        "purple",
        "gold"
    ];

    const randomColor = Math.floor(Math.random() * colors.length);

    document.getElementById("dice").style.backgroundColor =
        colors[randomColor];
}

// Run the function when the button is clicked
document.getElementById("rollButton").addEventListener("click", rollDie);

// Roll the dice once when the page opens
rollDie();
