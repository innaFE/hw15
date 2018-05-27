class Timer {
    constructor(startTime, stopTime, interval) {
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.interval = interval;
    }
    start() {
        this.startTime = new Date().getTime();
    };
    stop() {
        this.stopTime = new Date().getTime();
        this.interval = this.stopTime - this.startTime;
    };
    getTime() {
        console.log(`Interval: ${this.interval} ms`);
    };
    static timeToNY() {
    	const TODAY = new Date();
		const NEXT_YEAR = TODAY.getFullYear();
		const END_YEAR = new Date(NEXT_YEAR, 11, 31, 23, 59, 59, 999);
    	let days = Math.floor((END_YEAR.getTime() - TODAY.getTime())/(1000*60*60*24));
	    let res = `Left until New Year ${days} days`;
	    return res;
	}
}

let timer1 = new Timer('00:00', '01:00', 5);
let timer2 = new Timer('11:00', '13:00', 50);
let timer3 = new Timer('15:00', '17:30', 15);
let stopWatch = new Timer();

console.log(timer1);
console.log(timer2);
console.log(timer3);
console.log(Timer.timeToNY());

document.addEventListener('click', () => {
    if (event.target === document.querySelector('#js-start-timer')) {
        stopWatch.start();
    } else if (event.target === document.querySelector('#js-stop-timer')) {
        stopWatch.stop();
        stopWatch.getTime();
    }
})