const playPauseBtn = document.getElementById("play_pause")
const resetBtn = document.getElementById("reset")
const swap = document.getElementById("swapPP")
const time = document.getElementById("time")
const markBtn = document.getElementById("mark")
const writeList = document.getElementById("write_list")

let hours = 0, minutes = 0, seconds = 0, counter = 1;
let intervalId;



const triggerTimer = () => {
    seconds++
    if (seconds == 60) {
        seconds = 0;
        minutes++
        if (minutes == 60) {
            minutes = 0;
            hours++
            if (hours == 24) {
                hours = 0
            }
        }
    }
    time.innerText = `${hours < 10 ? "0" + `${hours}` : `${hours}`}:${minutes < 10 ? "0" + `${minutes}` : `${minutes}`}:${seconds < 10 ? "0" + `${seconds}` : `${seconds}`}`
}

playPauseBtn.addEventListener("click", () => {

    swap.classList.contains('bi-play-fill') ? swap.classList.replace('bi-play-fill', 'bi-pause') : swap.classList.replace('bi-pause', 'bi-play-fill');

    if (!intervalId) {
        intervalId = setInterval(triggerTimer, 1000)
    } else {
        clearInterval(intervalId)
        intervalId = null
    }

})

resetBtn.addEventListener('click', () => {
    hours = 0;
    minutes = 0;
    seconds = 0;
    clearInterval(intervalId);
    intervalId = null;
    if (swap.classList.contains('bi-pause')) {
        swap.classList.replace('bi-pause', 'bi-play-fill');
    }
    time.innerText = `${hours < 10 ? "0" + `${hours}` : `${hours}`}:${minutes < 10 ? "0" + `${minutes}` : `${minutes}`}:${seconds < 10 ? "0" + `${seconds}` : `${seconds}`}`
})


markBtn.addEventListener("click", () => {
    const heading = document.createElement("h2")
    heading.innerText = `${counter++}. ${hours}:${minutes}:${seconds}`
    writeList.append(heading)
})