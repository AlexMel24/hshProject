function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function Hsh () {

    hsh = {};
    maxPairs = 100;
    maxElements = 3;
    currentPairs = 0;
    this.out = '';

    this.newHashElement = function (count) {
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


    this.checkForMaxpairs = function () {
        if (currentPairs < maxPairs)
            return true;
        else
            return false;
    }


    this.createHash = function (thsh) {
        if (this.checkForMaxpairs()) {
            var tempHsh = thsh;
            for (var key in tempHsh) {
//                alert (tempHsh[key]);
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

    this.showHash = function (varhsh, newLine) {
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

    var randName = function(n) {
        var s = '', abd = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_', aL = abd.length;
        while (s.length < n)
            s += abd[Math.random() * aL | 0];
        return s;
    }
}
displayHash = function() {
    var hs = new Hsh();
    var t = hs.newHashElement(3);
    var h = hs.createHash(t);
    hs.showHash(h,'');

    var pre = document.getElementsByTagName('pre');

    pre[0].innerHTML = hs.out;
}
window.onload = function() {

    but = document.getElementById('button1');
    but.addEventListener('click',displayHash,true);
}
