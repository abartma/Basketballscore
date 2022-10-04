let screenHomePoints = document.getElementById('home-points');let screenGuestPoints = document.getElementById('guest-points');let homeFrame = document.getElementById('screen-home');
let guestFrame = document.getElementById('screen-guest');
function add(number,screen) {
    console.log('pressed');
    console.log(screenHomePoints);
    let scr = screen == 'home' ? screenHomePoints : screenGuestPoints;
    scr.textContent = parseInt(scr.textContent) + parseInt(number);
    let homePoints = parseInt(screenHomePoints.textContent)
    let guestPoints = parseInt(screenGuestPoints.textContent)
    scr = homePoints > guestPoints ? homeFrame : guestFrame;
    if (homePoints != guestPoints) {
        if (homePoints > guestPoints) {
            guestFrame.style.border = "thin solid black"
        } else  {
            homeFrame.style.border = "thin solid black"
        }
        scr.style.border = "thick solid white";
    } else {
        guestFrame.style.border = "thin solid black"
        homeFrame.style.border = "thin solid black"
    }


}


function newGame() {
    screenHomePoints.textContent = '0';
    screenGuestPoints.textContent = '0';
    let homeFrame = document.getElementById('screen-home');
    let guestFrame = document.getElementById('screen-guest');
    guestFrame.style.border = 'thin solid none';
    homeFrame.style.border = 'thin solid none';
    console.log('newgame button pressed');
}