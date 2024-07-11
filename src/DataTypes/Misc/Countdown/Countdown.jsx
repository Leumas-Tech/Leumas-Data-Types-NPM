class Countdown {
    constructor(seconds, onComplete) {
        this.totalSeconds = seconds;
        this.remainingSeconds = seconds;
        this.onComplete = onComplete;
        this.intervalId = null;
    }

    start() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                this.remainingSeconds -= 1;
                if (this.remainingSeconds <= 0) {
                    this.stop();
                    if (this.onComplete) {
                        this.onComplete();
                    }
                }
            }, 1000);
        }
    }

    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    reset(seconds) {
        this.stop();
        this.totalSeconds = seconds || this.totalSeconds;
        this.remainingSeconds = this.totalSeconds;
    }

    getRemainingTime() {
        return this.remainingSeconds;
    }
}

export default Countdown