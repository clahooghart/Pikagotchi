// JavaScript Document

//variabelen aanmaken
var normalPikachu = document.querySelector('#normalpikachu')
var keukenKnop = document.querySelector('#keuken')
var slaapkamerKnop = document.querySelector('#slaapkamer')
var badkamerKnop = document.querySelector('#badkamer')
var playmodeKnop = document.querySelector('button')
var meter = document.querySelector('#vriendschapmeter')

//array list van emoties 
var emoties = ["boos","normaal", "slaap", "eet", "schoon"]
var huidigeEmotie = emoties[1]

//timer start

var timer = setInterval(bozePikachu, 6000)

//if else string
function bozePikachu () {
    if (huidigeEmotie == emoties [1]) {
        normalPikachu.src = 'images/angry-pikachu.png'
        huidigeEmotie = emoties [0]
    } else if (huidigeEmotie == emoties [2],[3],[4]) {
        normalPikachu.src = 'images/normal-pikachu.png'
        huidigeEmotie = [1]
    }


function resetTimer() {
        clearInterval(timer)
        timer = setInterval(bozePikachu, 6000)
    } 

// Reset de timer voor boze emotie
    resetTimer()
}

//Interacties met de knop
keukenKnop.addEventListener('click', eten);
slaapkamerKnop.addEventListener('click',slapen);
badkamerKnop.addEventListener('click', wassen);
normalPikachu.addEventListener('click', aaien );

//hier veranderd het plaatje van normale pikachu naar eten

function eten() {
    normalPikachu.src = 'images/eating-pikachu.png'

//geluid
    var audio = new Audio('audio/eating.mp3');
    audio.play();
//console log geeft updates over pikachu's gedachtes
    console.log('Pikachu houdt van lollys!')
    
//achtergrond word verranderd met classlist
    document.body.classList.remove( 'slaapkamerbg','badkamerbg');
	document.body.classList.add('keukenbg');
}

function slapen() {
    normalPikachu.src = 'images/sleepy-pikachu.png'
    var audio = new Audio('audio/sleepy.mp3');
    audio.play();
    console.log('Pikachu ziet er slaperig uit.')

    document.body.classList.remove( 'keukenbg','badkamerbg');
	document.body.classList.add('slaapkamerbg');
}

function wassen() {
    normalPikachu.src = 'images/clean-pikachu.png'
    var audio = new Audio('audio/wash.mp3');
    audio.play();
    console.log('Pikachu houdt van in bad gaan.')
    document.body.classList.remove( 'slaapkamerbg','keukenbg');
	document.body.classList.add('badkamerbg');
}

// Door op default pikachu te klikken kan je hem aaien

function aaien() {
    normalPikachu.src = 'images/pet-pikachu.png'
    var audio = new Audio('audio/pet.mp3');
    audio.play();
    console.log('Pikachu vind het erg leuk om met jou te spelen')
}

//Bronnen Pikachu plaatjes komen van PNG find geupload door Explora Travels

