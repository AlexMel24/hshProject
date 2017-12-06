function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function randName(n) {
    var s = '', abd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_', aL = abd.length;
    while (s.length < n)
        s += abd[Math.random() * aL | 0];
    return s;
}


function Hsh () {

    hsh = {};
    maxPairs = 100;
    maxElements = 3;
    currentPairs = 0;
    this.out = '';

}
Hsh.prototype.checkForMaxpairs = function () {
    if (currentPairs < maxPairs)
        return true;
    else
        return false;
}

Hsh.prototype.createHash = function (thsh) {
    if (this.checkForMaxpairs()) {
        var tempHsh = thsh;
        for (var key in tempHsh) {
            if (typeof (tempHsh[key]) !== 'object') {
                switch (tempHsh[key]) {
                    case 0:
                        tempHsh[key] = 'nil';
                        break;
                    case 1:
                        tempHsh[key] = 3 + getRandomInt(0, maxElements);
                        break;
                    case 2:
                        if (this.checkForMaxpairs()) {
                            tempHsh[key] = {};
                            tempHsh[key] = this.newHashElement(1 + getRandomInt(0, maxElements));
                            this.createHash(tempHsh[key]);
                            break;
                        }
                        else
                        {
                            tempHsh[key] = getRandomInt(0, maxElements);
                            break;
                        }


                }
                continue
            }

        }
        return tempHsh;
    }

}

Hsh.prototype.newHashElement = function (count) {
    var i = 0;
    if (this.checkForMaxpairs()) {
        var tempHsh = {};
        while (i < count && this.checkForMaxpairs()) {
            var r = getRandomInt(0, 3);
            var name = randName(8) + i + r;
            tempHsh[name] = r;

            currentPairs += 1;
            i += 1;
        }
        return tempHsh;
    }
}
Hsh.prototype.showHash = function (varhsh, newLine) {
    var tempHsh = varhsh;
    var key
    for (key in tempHsh) {
        this.out = this.out + "\r\n" + newLine + key + '=>';
        if (typeof (tempHsh[key]) !== 'object') {
            this.out = this.out + tempHsh[key];
        }
        else
        {
            this.showHash(tempHsh[key],newLine +"            ");
        }
    }


}


function Arr () {


}

Arr.prototype = new Hsh();

displayHash = function() {
    var hs = new Arr();

    var t = hs.newHashElement(3);
    var h = hs.createHash(t);
    hs.showHash(h,'');
    var pre = document.getElementById('init');
    pre.innerHTML = hs.out;
}

window.onload = function() {
    displayHash();
    but = document.getElementById('button1');
    but.addEventListener('click',displayHash,true);
}
