/* Create an array to hold the quotes */
/* Arrays start at 0 */
const quotes = [
    "The kids had a ball and didn't want to leave.",
    "The archery was brilliant, but not as good as axe throwing, I never thought we'd be allowed to do that! I got one of my axes right in the middle of the target.",
    "I would definitely come back."
];

/* Create an array to hold the citations */
/* Arrays start at 0 */
const cites = [
    "― Mr Evans, PE teacher",
    "― Scott, aged 13",
    "―  Kelly, aged 9."
];

/* create a constant called quoteElement that returns the position */
/* of the element with the ID of quote */
const quoteElement = document.getElementById("quote");

/* create a constant called citeElement that returns the position */
/* of the element with the ID of cite */    
const citeElement = document.getElementById("cite");

/* Create a variable called currentIndex with the value of 0 */
let currentIndex = 0;

/* Create a variable called interValid, this will be used with mouseover */
let intervalValid = null;

/* Create a function called changeQuote() */
function changeQuote(){
    /* Check to see if the quoteElement contains a value */
    /* if not skip */
    if(quoteElement){
        /* Change the text with the quoteElement to the index value */
        /* of currentIndex */
        quoteElement.textContent=quotes[currentIndex];

        /* Change the text with the citeElement to the index value */
        /* of currentIndex */
        citeElement.textContent=cites[currentIndex];

        /* Set the new calue of currentIndex */
        currentIndex = (currentIndex + 1) % quotes.length;
    }
}

/* Create a function called startInterval() */
function startInterval(){
    /* if the variable interValid is null */
    if(!intervalValid){
        /* Call the function setInterval() */
        /* So the every 5 seconds the changeQuote function will be called */        
        intervalValid = setInterval(changeQuote, 5000);
    }
}

/* Create a function called pauseInterval() */
function pauseInterval(){
    /* if the variable interValid has setInterval set */
    if(intervalValid){
        /* Call the clearInterval function to stop the looping */
        /* of the quotes */
        clearInterval(intervalValid);
        /* set intervalValid to null */
        intervalValid = null;
    }
}

/* Create an event listener which will call the function changeQuote */
/* Once all the html elements have been loaded */
document.addEventListener("DOMContentLoaded", ()=>{
    changeQuote();
    startInterval();
});

quoteElement.addEventListener("mouseover", (event)=>{
    pauseInterval();
    const utter = new SpeechSynthesisUtterance(quoteElement.textContent);
    speechSynthesis.speak(utter);
    console.log("over");
});

quoteElement.addEventListener("mouseleave", (event)=>{
    startInterval();
    console.log("leave");
});