// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hiHatSound = new Audio('sounds/hi-hat.mp3');
const kickDrumSound = new Audio('sounds/kick-drum.mp3');
const snareDrumSound = new Audio('sounds/snare-drum.mp3');


tickCount = 0;

// This function is called every 600ms
function update() {  
    const metronomeCount = document.querySelector('.metronomeCount');
    const metronomeCount2 = (tickCount % 4) + 1;
    const hiHat = document.querySelector('#hi-hat');
    const snareDrum = document.querySelector('#snare-drum');
    const kickDrum = document.querySelector('#kick-drum');
    const boxContainer = document.querySelector('.boxContainer');

    tickCount++;
    metronomeCount.innerText = tickCount;
    if(metronomeCount.innerText >= 4){
        tickCount = 0;
    }
    if(metronome.checked){
        if(tickCount % 4 === 0){
            tock.play();
        }else{
            tick.play();
        }    
    }

    if(hiHat.checked || snareDrum.checked || kickDrum.checked || metronome.checked){
        boxContainer.style.opacity = 1;
    }else{
        boxContainer.style.opacity = 0;
    }
    if (hiHat.checked){
        const timingInput = document.querySelector('#hi-hat-timing')
        if (Number(timingInput.value) === metronomeCount2) {
            
            hiHatSound.play();
        }
    }

    if (snareDrum.checked){
        const timingInput = document.querySelector('#snare-drum-timing')
        if (Number(timingInput.value) === metronomeCount2) {
            snareDrumSound.play();
        }
    }

    if (kickDrum.checked){
        const timingInput = document.querySelector('#kick-drum-timing')
        if (Number(timingInput.value) === metronomeCount2) {
            kickDrumSound.play();
        }
    }  
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
