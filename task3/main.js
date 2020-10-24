
  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

let randomInt = randomInteger(1, 5)
async function main() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(randomInteger(1, 5)), 3000)
      });

      try {
        let result = await promise;
        console.log(Math.pow(result, 2));
      } catch (error) {
          
      }
      finally {
        // main()
      }
}
main()