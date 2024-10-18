let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeCount = 0;
let guestCount = 0;

function homePlus1() {
    homeCount += 1;
    homeScore.innerText = homeCount;
}
function homePlus2() {
     homeCount += 2;
    homeScore.innerText = homeCount;
}
function homePlus3() {
    homeCount += 3;
    homeScore.innerText = homeCount;
}

function guestPlus1() {
    guestCount += 1;
    guestScore.innerText = guestCount;
}
function guestPlus2() {
     guestCount += 2;
    guestScore.innerText = guestCount;
}
function guestPlus3() {
    guestCount += 3;
    guestScore.innerText = guestCount;
}