console.log("This PC has been hacked, please continue scrolling!");

const startBtn = document.getElementById("start-progress");
const progFun = document.getElementById("prog-fun");

if (startBtn) {
    startBtn.onclick = () => {
        const tempinterval = setInterval(() => {
            if (progFun.value < 100) {
                progFun.value++;
            } else {
                setTimeout(() => {
                    progFun.value = 0;
                }, 2000);
                clearInterval(tempinterval);
            }
        }, 100);
    };
}