const app = {};

const typingText = ["Web Developer", "Dancer", "Welcome"]
let thisWordIndex = 0 //index number of word in typing array
let i = 0 //represent letter in string
let direction = true //true = writing false = deleting



app.typeWriter = () => {
    setInterval(function() {
        if (direction) {
            i++ //when direction is true print the next letter
        } else {
            i-- //when direction is false delete the prvious letter
        }
        if (i >= typingText[thisWordIndex].length) {
            let pause = setInterval(function(){
                direction = false
                clearInterval(pause)
            },700)
        }  if(i <= 0) {
            direction = true
            thisWordIndex = thisWordIndex + 1;
            if (thisWordIndex >= typingText.length){
                thisWordIndex = 0;
            }
        }
        let text = typingText[thisWordIndex].slice(0, i);
        document.getElementById("typeWriter").innerHTML = text;
    }, 150);
}



app.init = () => {
    app.typeWriter();
}

$(document).ready(function() {
    app.init();
});
