
document.getElementById("randomButton").addEventListener("click", function() {
    
    const chance = Math.random(); //0-1
    

    let randomText = "";
    if (chance < 0.7) {
        randomText = "pass!";
    } 
    else {
        randomText = "missed;(";
    }
    
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You ${randomText}`;

    
    if (randomText === "pass!") {
        resultElement.style.color = "green";
    } else {
        resultElement.style.color = "red";
    }

    resultElement.classList.remove("bounce-in");
    void resultElement.offsetWidth;
    resultElement.classList.add("bounce-in");
});
