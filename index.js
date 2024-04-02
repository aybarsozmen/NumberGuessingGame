const answer = Math.floor(Math.random() *10 +1);
output = document.getElementById("outPut");


document.getElementById("submitBtn").onclick = function() {
    let guesses = 0;
    let guess = document.getElementById("guessField").value;
    guesses+=1

    console.log(guesses)
    

    if(guess == answer) {
        output.innerHTML=("Congrats! You made it! It took you ", guesses, "for you to find!");
    }

    else if(guess>answer) {
        alert("Too large!");
    }

    else {
        alert("Too small!"); }
    

}