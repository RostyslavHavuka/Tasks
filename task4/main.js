function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
async function main() {
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(randomInteger(1, 5)), 3000)
    });

    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve(randomInteger(6, 10)), 5000)
    });

    try {
        let num1 = await promise1
        let num2 = await promise2
        let sum = num1 + num2

        console.log(`${num1} + ${num2} = ${sum}`);
    } catch (error) {

    }
    finally {
        // main()
    }
}
main()

