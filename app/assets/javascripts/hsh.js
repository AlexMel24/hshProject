function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function Hsh () {

    hsh = {};
    maxPairs = 100;
    maxElements = 3;
    currentPairs = 0;


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
                alert (tempHsh[key]);
                if (tempHsh[key] !== 'object') {
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
}
