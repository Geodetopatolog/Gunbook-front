function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animation_ar() {

    document.getElementById("ar").style.transform = "rotate(-22deg) scale(90%)";
    await sleep(200);
    document.getElementById("ar").style.transform = "rotate(0deg) scale(100%)";

}

async function animation_ak() {

    document.getElementById("ak").style.transform = "rotate(26deg) scale(90%)";
    await sleep(200);
    document.getElementById("ak").style.transform = "rotate(0deg) scale(100%)";

}

function randomAnimation() {
    if (Math.random()>0.5) {
        animation_ar()
    } else {
        animation_ak()
    }
}
