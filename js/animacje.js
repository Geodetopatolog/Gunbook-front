function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function animation_ar() {

    document.getElementById("ar").style.cssText = "transition: transform 50ms; transform: rotate(-22deg);";
    await sleep(50);
    document.getElementById("ar").style.cssText = "transition: transform 180ms; transform: rotate(-22deg) scale(90%);";
    await sleep(180);
    document.getElementById("ar").style.cssText = "transition: transform 180ms; transform: rotate(-22deg) scale(100%);";
     await sleep(180);
    document.getElementById("ar").style.cssText = "transition: transform 50ms; transform: rotate(0deg);";
}

async function animation_ak() {

    document.getElementById("ak").style.cssText = "transition: transform 50ms; transform: rotate(26deg);";
    await sleep(50);
    document.getElementById("ak").style.cssText = "transition: transform 180ms; transform: rotate(26deg) scale(90%);";
    await sleep(180);
    document.getElementById("ak").style.cssText = "transition: transform 180ms; transform: rotate(26deg) scale(100%);";
    await sleep(180);
    document.getElementById("ak").style.cssText = "transition: transform 50ms; transform: rotate(0deg);";

}

function randomAnimation() {
    if (Math.random()>0.5) {
        animation_ar()
    } else {
        animation_ak()
    }
}
