var doomMechanism = function () {
    var randomNumber = Math.floor(Math.random() * 2);
    if(randomNumber == 0)
        throw new Error("Doom!!!");
    return "Word is safe";
}

new Promise(function(resolve, reject) {
    setTimeout(function() {
        try {
            var isArmaggeddonSkiped = doomMechanism();
            resolve(isArmaggeddonSkiped);
        } catch (err) {
            reject(err);
        }
    }, 1000);
})
.catch(console.log)
.then(console.log);