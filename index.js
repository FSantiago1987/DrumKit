var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    var keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnimation(keyPressed);

})

function makeSound(key){
    switch (key){
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a": 
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s": 
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "d": 
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j": 
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "k": 
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l": 
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;  
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

/* var houseKeeper1 = {
    yearsOfExperience: 12,
    name: "Jane",
    cleaningRepertoire: ["bathroom", "lobby", "bedroom"]
}

function HouseKeeper(yearOfExperience, name, cleaningRepertoire){
    this.yearOfExperience = yearOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function() {
        alert("Cleaning in progress...");
    }
}

var houseKeeper1 = new HouseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);
houseKeeper1.clean(); */


