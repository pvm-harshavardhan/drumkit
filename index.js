
var noOfDrums=document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonClicked = this.innerHTML;
        sound(buttonClicked);
        buttonAnimation(buttonClicked);
     } 
     
    
)
    
}

document.addEventListener("keypress",function(event){
    sound(event.key);
    buttonAnimation(event.key);

    // the parameter event is not at all any key word it will work with anything

})


function sound(keyPressed){
    switch (keyPressed) {
        case "w":
            var audio=new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio=new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "k":
            var audio=new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio=new Audio('sounds/snare.mp3');
            audio.play();
            break;
    }
}

function buttonAnimation(button){
    var clickedButton = document.querySelector("."+button);
    clickedButton.classList.add("pressed");
    setTimeout(function(){
        clickedButton.classList.remove("pressed")
    },100);
}
