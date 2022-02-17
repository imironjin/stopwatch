const btnStart = document.getElementById("button-start");
const btnStop = document.getElementById("button-stop");
const btnReset = document.getElementById("button-reset");
const btnLap = document.getElementById("button-lap");
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const lapList = document.getElementById("laps");

let lapCounter = 1;
let seconds = 00;
let tens = 00;
let Interval;
btnStart.onclick = function() {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

function startTimer() {
    tens++;

    if(tens < 9) {
        appendTens.innerText = "0" + tens;
    }
    
    if(tens > 9) {
        appendTens.innerText = tens;
    }

    if(tens > 99) {
        seconds++;
        appendSeconds.innerText = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if(seconds > 9) {
        appendSeconds.innerText = seconds;
    }
}

btnStop.onclick = function() {
    clearInterval(Interval);
}

btnReset.onclick = function() {
    clearInterval(Interval);
    tens= "00";
    seconds = "00";

    appendTens.innerText = tens;
    appendSeconds.innerText = seconds;
    lapList.innerText = "";
    lapCounter = 1;
    storeLaps();
}

btnLap.onclick = function() {
    lapList.innerHTML += `<li><span class="lap-seconds">${appendSeconds.innerText}</span>
    <span class="lap-tens">${appendTens.innerText}</span>--Lap ${lapCounter}</li>`

    lapCounter++;
    storeLaps();
}

function storeLaps() {
    window.localStorage.myLaps = lapList.innerText;
}

function getLaps() {
    lapList.innerTexx = window.localStorage.myLaps;
}
getLaps();