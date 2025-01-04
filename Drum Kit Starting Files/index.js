// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

//Datecting Button Press
var numberofdrum = document.querySelectorAll(".drum").length;

for(var i =0; i < numberofdrum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // 1) alert("i got clicked")
        // 2) var audio = new Audio('sounds/tom-1.mp3');
        // audio.play();

        // console.log(this.innerHTML);

        // console.log(this.style.color = "white");
        // this.style.color = "white";
        var  buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

       
    });
}
// Detecting Keyboard press

document.addEventListener("keypress", function(event){
    // alert("key was pressed...");
    // console.log(event);
    makeSound(event.key);
    buttonAnimation(event.key);
});  

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

    
        default:
            console.log(buttonInnerHTML);
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
        }, 100);
}