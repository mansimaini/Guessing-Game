let maximum = parseInt(prompt("Enter your maximum number"));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid number"));
}


let randomNo = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your guess here"));
let attempts = 1;

while(guess !== randomNo) {
if(guess == 'q') break;
attempts++;
    if(guess > randomNo)
    {
        guess = prompt("TOO HIGH");
    }
    else
    {
        guess = prompt("TOO LOW");
    }
}
if(guess == 'q'){
    console.log("You're quitting");
}

else{
    console.log(`You did it. It took you ${attempts} guesses`);
}


