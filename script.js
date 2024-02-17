const startTimerButton = document.getElementById("starttimer");

const activeTimersDisplay = document.getElementById("active-timers-display")

const audioAlert = document.getElementById("audioAlert");



startTimerButton.addEventListener("click", startNewTimer)


const paragra = document.getElementById("paragra")

let timers = [];


function startNewTimer(secondss) {
    
    const hours = parseInt(document.getElementById("hours").value) || 0;
    const minutes = parseInt(document.getElementById("minutes").value) || 0;
    const second = parseInt(document.getElementById("second").value) || 0;
    const totalTime = hours * 3600 + minutes*60 + second;

    if (totalTime !== 0) {
        paragra.classList.add("nonedisplay")
        // hours.value = "";
        // minutes.value = "";
        // second.value = "";
    }
   
    
    if (totalTime === 0) return;
  

    const timer = {
        totalTime,
        timeLeft: totalTime,
        displayElement: document.createElement("div"),
        intervalId: null
    };
    
    const timerDisplay = document.createElement("div");
    timerDisplay.classList.add("container3");
    const spantag = document.createElement("span")
    spantag.innerText=("Time Left :")
    timerDisplay.appendChild(spantag)
    const timerCountdown = document.createElement("div");
    timerCountdown.classList.add("belowcontest");
    timerCountdown.textContent = formatTime(timer.timeLeft);
    const stopTimerBtn = document.createElement("button");
    stopTimerBtn.classList.add("buttttttnnn")
    stopTimerBtn.textContent = "Delete";
    stopTimerBtn.addEventListener("click", () => stopTimer(timer));
    timerDisplay.appendChild(timerCountdown);
    timerDisplay.appendChild(stopTimerBtn);
    activeTimersDisplay.appendChild(timerDisplay);

    timer.displayElement = timerDisplay;

    timer.intervalId = setInterval(() => {
        timer.timeLeft--;
        timerCountdown.textContent = formatTime(timer.timeLeft);

        if (timer.timeLeft === 0) {
        
            timerDisplay.classList.remove("container3");
            timerDisplay.classList.add("nonedisplay");
            const newdiv = document.createElement("div")
            newdiv.innerText=("Timer Is Up !");
            newdiv.classList.add("container4");
            const newbtn = document.createElement("button");
            newbtn.innerText=("Stop")
            newdiv.appendChild(newbtn)
            activeTimersDisplay.appendChild(newdiv)
            timerCountdown.textContent = "00:00:00";
            timerDisplay.classList.add("timer-ended");
            audioAlert.play();
            newbtn.addEventListener("click", ()=> {
                audioAlert.pause();
                newdiv.classList.remove("container4")
                newdiv.classList.add("nonedisplay")
            })
        }
    }, 1000);

    timers.push(timer);  
}

function stopTimer(timer) {
    clearInterval(timer.intervalId);
    timer.displayElement.remove();
    timers = timers.filter(t => t !== timer);
}



function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// const buttttttnnn = document.getElementById("buttttttnnn")

// buttttttnnn.addEventListener("click", (stopmusic)=> {
//     audioAlert.pause();
// })





