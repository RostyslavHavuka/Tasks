let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(2), 2000);
});

promise.then(function (result) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(Math.pow(result, 2))
        }, 2000);
    })
}).then(function (result) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(Math.pow(result, 2))
            alert(result)
        }, 2000);
    })
}).then(function (result) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(Math.pow(result, 2))
            alert(result)
        }, 2000);
    })
});


