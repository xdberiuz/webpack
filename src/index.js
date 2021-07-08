import "./style.css"

let timer = document.querySelector('.timer');

let reset = document.querySelector('.reset');
let wait = document.querySelector('.wait');
let startTime = document.querySelector('.start');
let StartAll;

let h = '00';
let m = '00';
let s = 0;
let set = 0;

function tick() {
    set++;
    s = set;
    if (s < 10) s = '0' + s;
    if (s >= 60) {
        set = 0;
        m++;
        if (m < 10) m = '0' + m;
    }
    if (m >= 60) {
        m = '00';
        h++;
        if (h < 10) h = '0' + h;
    }

    if (h > 24) {
        h = '00';
    }

    let correctTime = h + ':' + m + ':' + s;
    timer.textContent = correctTime;
}

function resetTime() {
    clearInterval(startTime);
    timer.textContent = '00:00:00';
    set = 0;
    h = '00';
    m = '00';
    s = 0;
    set = 0;

}

function waitAll() {
    clearInterval(startTime);
}

reset.addEventListener('click', resetTime);
startTime.addEventListener('click', function() {
    if (!StartAll) {
        StartAll = setInterval(tick, 1000);
    } else {
        StartAll = clearInterval(StartAll);
    }
})
wait.addEventListener('click', function() {
    StartAll = clearInterval(StartAll);
});