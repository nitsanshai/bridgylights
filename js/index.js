$(document).ready(function() {
    var gn = new GyroNorm();
    var alphas = [0,0,0,0,0,0,0,0,0,0];
    var windowSize = 10;
    gn.init().then(function() {
        gn.start(function(data) {
            alphas.push(data.do.alpha);
            alphas.shift();
            var sum = alphas.reduce(function(a,b) { return a+b; }, 0);
            $('#alpha').text(Math.floor(sum/windowSize));
        });
    }).catch(function(e) {

    });
});
