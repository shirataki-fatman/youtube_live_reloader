let watchWaiting = false
let waitStartTime = null;
const patienceTime = 1000;

const main = () => {
    const video = document.querySelector('.html5-main-video')
    video.addEventListener("waiting", () => {
        console.log("wait start")
        watchWaiting = true
        waitStartTime = new Date().getTime()
    })
    video.addEventListener("canplay", () => {
        console.log("wait canceled")
        watchWaiting = false
        waitStartTime = null
    })
    setInterval(() => {
        if (watchWaiting && new Date().getTime() - waitStartTime > patienceTime) {
            window.location.reload()            
        }
    }, 1000)
}

window.addEventListener("load", main, false)