let allButtons = document.querySelectorAll(".drum"); 

for (let i = 0; i <= allButtons.length; i++){
    allButtons[i].addEventListener("click", function (){
        let buttonInnerHTML = this.innerHTML;
        createSound(buttonInnerHTML);
        buttonAnim(buttonInnerHTML);
    });

    document.addEventListener("keydown", function(keyboard){
            createSound(keyboard.key);
            buttonAnim(keyboard.key);
    })
}

function createSound(event){
    switch(event){
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;
        
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "r":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
                
        case "t":
            let kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        
        case "y":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
    }
}




function buttonAnim (key){
   
    let activeKey = document.querySelector("." + key);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed");
    }, 100);
}
