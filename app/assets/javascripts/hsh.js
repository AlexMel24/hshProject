function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function Hsh () {

    hsh = {};
    maxPairs = 100;
    maxElements = 3;
    currentPairs = 0;
    this.out = '';

    this.NewHashElement = function (count) {
        var i = 0;
        if (this.CheckForMaxpairs()) {
            var tempHsh = {};
            while (i < count && this.CheckForMaxpairs()) {
                var r = getRandomInt(0, 3);
                var name = 'var' + i + r;
                tempHsh[name] = r;

                currentPairs += 1;
                i += 1;
            }
            return tempHsh;
        }
    }


    this.CheckForMaxpairs = function () {
        if (currentPairs < maxPairs)
            return true;
        else
            return false;
    }


    this.CreateHash = function (thsh) {
        if (this.CheckForMaxpairs()) {
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
                            if (this.CheckForMaxpairs()) {
                                tempHsh[key] = {};
                                tempHsh[key] = this.NewHashElement(1 + getRandomInt(0, maxElements));
                                this.CreateHash(tempHsh[key]);
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

    this.Out = function (varhsh,newLine) {
        var tempHsh = varhsh;
        var key
        for (key in tempHsh) {
            this.out = this.out + "\r\n" + newLine + key + '=>';
            if (typeof (tempHsh[key]) !== 'object') {
                this.out = this.out + tempHsh[key];
            }
            else
            {
                this.Out(tempHsh[key],newLine +'          ');
            }
        }


    }

}
DisplayHash = function() {
    var hs = new Hsh();
    var t = hs.NewHashElement(3);
    var h = hs.CreateHash(t);
    hs.Out(h,'');

    var pre = document.getElementsByTagName('pre');

    pre[0].innerHTML = hs.out;
}
window.onload = function() {

    but = document.getElementById('button1');
    but.addEventListener('click',DisplayHash,true);
}
