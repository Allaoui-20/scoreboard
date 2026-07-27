let homeScore = document.getElementById("home-score")

let guestScore = document.getElementById("guest-score")

let homecount = 0
let guestcount = 0

function addone(){
    homecount += 1
    homeScore.innerText =homecount 
    updateLeader()
}

function adone(){
    guestcount += 1
    guestScore.innerText =guestcount 
    updateLeader()
}

function addtwo(){
    homecount += 2
    homeScore.innerText =homecount 
    updateLeader()
}
function adtwo(){
    guestcount += 2
    guestScore.innerText =guestcount 
    updateLeader()
}
function addthree(){
    homecount += 3
    homeScore.innerText =homecount
    updateLeader() 
}

function adthree(){
    guestcount += 3
    guestScore.innerText =guestcount 
    updateLeader()
}

function resetScores() {
    homecount = 0;
    guestcount = 0;
    homeScore.innerText = homecount;
    guestScore.innerText = guestcount;
    updateLeader()
    homeFouls = 0
    guestFouls = 0
    homeFoulsEl.innerText = homeFouls
    guestFoulsEl.innerText = guestFouls
}

//hightlight the leader
function updateLeader() {
    let homeBox = document.getElementById("home-score");
    let guestBox = document.getElementById("guest-score");

    if (homecount > guestcount) {
        homeBox.classList.add("leader");
        guestBox.classList.remove("leader");
    } else if (guestcount > homecount) {
        guestBox.classList.add("leader");
        homeBox.classList.remove("leader");
    } else {
        homeBox.classList.remove("leader");
        guestBox.classList.remove("leader");
    }
}

/*counter*/

// --- PERIOD ---
let period = 1;
let periodEl = document.getElementById("period");

function changePeriod(delta) {
    period = Math.min(4, Math.max(1, period + delta));
    periodEl.innerText = period;
}

// --- FOULS ---
let homeFouls = 0;
let guestFouls = 0;
let homeFoulsEl = document.getElementById("home-fouls");
let guestFoulsEl = document.getElementById("guest-fouls");

function addFoul(team) {
    if (team === "home" && homeFouls < 5) {
        homeFouls += 1;
        homeFoulsEl.innerText = homeFouls;
    } else if (team === "guest" && guestFouls < 5) {
        guestFouls += 1;
        guestFoulsEl.innerText = guestFouls;
    }
}

// --- TIMER ---
let timerEl = document.getElementById("timer");
let timeLeft = 600; // 10:00 en secondes
let timerInterval = null;

function formatTime(seconds) {
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval) return; // évite de lancer plusieurs intervalles
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft -= 1;
            timerEl.innerText = formatTime(timeLeft);
        } else {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    pauseTimer();
    timeLeft = 600;
    timerEl.innerText = formatTime(timeLeft);
}