let timer = document.querySelector('.timer');
let stopBtn= document.getElementById('stopBtn');
let startBtn= document.getElementById('startBtn');
let resetBtn= document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);

});
stopBtn.addEventListener('click', function(){
        clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timer.innerHTML = '00 : 00 : 00';
    // msec = secs = mins = 0;
});


function startTimer(){
    msec++;
    if(msec === 100){
        msec = 0;
        // secs =  secs +1
        secs++;
        if(secs === 60){
            secs = 0;
            mins++;

        }
    }
    // let msecStr;

    // if(msec < 10){
    //     msecStr = '0' + msec;
    // }else{
    //     msecStr = msec;
    // }

    let msecStr = msec < 10 ? '0' + msec : msec;
    let secsStr = secs < 10 ? '0' + secs : secs;
    let minsStr = mins < 10 ? '0' + mins : mins;

    timer.innerHTML = minsStr + ' : ' + secsStr + ' : ' + msecStr;

}