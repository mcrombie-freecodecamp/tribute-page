var quotes = ["\"It is hard to fail, but it is worse never to have tried to succeed.\"", 
"\"Believe you can and you're halfway there.\"",
"\"When you're at the end of your rope, tie a knot and hold on.\"",
"\"People don't care how much you know until they know how much you care.\"",
"\"The only man who never makes mistakes is the man who never does anything.\"",
"\"To educate a person in the mind but not in morals is to educate a menace to society.\"",
"\"Knowing what's right doesn't mean much unless you do what's right.\"",
"\"Keep your eyes on the stars, and your feet on the ground.\"",
"\"Speak softly and carry a big stick; you will go far.\"",
"\"I am a part of everything that I have read.\"",
"\"When you play, play hard; when you work, don't play at all.\""
]
console.log("Hey I am the javaScript file working over here")

/*MAKE IT SO THE QUOTES HAVE A TRANSITION EFFECT*/
var quote = document.getElementById('quote');

var changeQuote = function(){
    
    var num = Math.floor((Math.random() * quotes.length));

    quote.textContent = quotes[num];
}

window.setInterval(changeQuote, 1000);
