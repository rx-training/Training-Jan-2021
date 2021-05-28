function function1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const error = false;
            if (!error) {
                // document.writeln("promise has been resoled"+"<br>");
                resolve();
            }
            else {
                // document.writeln("promise has not been resolved"+"<br>");
                reject();
            }
        }, 500)
    })
}
function1().then(function () {
    document.writeln("thanks for resolving");
}).catch(function () {
    document.writeln("not Resolving");
})
