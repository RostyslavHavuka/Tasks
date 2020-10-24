function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}
let time = randomInt(1, 5)
let time2 = randomInt(1, 5)
let time3 = randomInt(1, 5)

let promise1 = (ms) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log(time);
    }, ms);
})}

let promise2 = (ms) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log(time2);
    }, ms);
})}

let promise3 = (ms) => {
    return new Promise((resolve) => {
    setTimeout(() => {
        console.log(time3);
    }, ms);
})}

Promise.all([promise1(time * 1000), promise2(time2 * 1000), promise3(time3 * 1000)])