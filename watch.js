let watchWaiting = false
let waitStartTime = null;
const patienceTime = 1000;

const main = () => {
    var isLive = false;
    var liveButton = document.querySelector('.ytp-live-badge');
    if (liveButton && !liveButton.getAttribute("disabled")) {
        isLive = true;
    }

    if (isLive) {
        const video = document.querySelector('.html5-main-video')
        video.addEventListener("waiting", () => {
            watchWaiting = true
            waitStartTime = new Date().getTime()
        })
        video.addEventListener("canplay", () => {
            if (watchWaiting) {
                watchWaiting = false
                waitStartTime = null
            }
        })
        setInterval(() => {
            if (watchWaiting && new Date().getTime() - waitStartTime > patienceTime) {
                window.location.reload()            
            }
        }, 1000)
    }
}

window.addEventListener("load", main, false)