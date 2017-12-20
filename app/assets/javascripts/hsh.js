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

    ar = [];
    arNonil = [];
    this.getArr = function (varhsh) {
        var tempHsh = varhsh;
        var key;
        for (key in tempHsh) {
            if (typeof tempHsh[key] !== 'object')
            {
                var tHsh = {};
                tHsh[key] = tempHsh[key];

                    if (tempHsh[key] != 'nil')
                    {
                        arNonil.push(tHsh);
                    }
                ar.push(tHsh);
            }
            else
            {
                this.getArr(tempHsh[key])
            }
        }
    }

    this.returnAr = function () {
        return ar;
    }
    this.returnArNonil = function () {
        return arNonil;
    }

    this.getMax = function () {
        var arOfMax = [];
        var maxVal = -1;
        var i;
        for (i in arNonil)
        {
            var key;
            for (key in arNonil[i])
            {
                if (arNonil[i][key] > maxVal)
                {
                    maxVal = arNonil[i][key];
                }
            }
        }

        i = 0;
        for (i in arNonil)
        {
            key = '';
            for (key in arNonil[i])
            {
                if (arNonil[i][key] == maxVal)
                {
                    arOfMax.push(arNonil[i]);
                }
            }
        }
        return arOfMax;
    }


}
var printAr = function (array) {
    var i;
    var res = '';
    for (i in array)
    {

        var key;
        for (key in array[i])
        {
            res += '"' + key.toString() + '"=>';
            res += array[i][key].toString() + ',';
        }
    }
    return res.slice(0, -1);
}


Arr.prototype = new Hsh();

displayHash = function() {

    hs = new Arr();

    t = hs.newHashElement(3);
    h = hs.createHash(t);
    hs.getArr(h);
    hs.showHash(h,'');
    var prehs = document.getElementById('init');
    prehs.innerHTML = hs.out;
    var prear = document.getElementById('array');
    prear.innerHTML = printAr(hs.returnAr());
    var arnonil = document.getElementById('array_nonil');
    arnonil.innerHTML = printAr(hs.returnArNonil());
    var armax = document.getElementById('array_max');
    armax.innerHTML = printAr(hs.getMax());

}

window.onload = function() {
    displayHash();
    but = document.getElementById('button1');
    but.addEventListener('click',displayHash,true);

}
