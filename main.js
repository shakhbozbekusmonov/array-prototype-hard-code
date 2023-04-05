// Copyrigth (c) Miracle Programmer(Shakhbozbek Usmonov) 2023. All rights reserved.

// Array prototype methods push Hard Code
Array.prototype.push = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
};

// Array prototype methods pop Hard Code
Array.prototype.pop = function () {
    let lastItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return lastItem;
};

// Array prototype methods shift Hard Code
Array.prototype.shift = function () {
    let firstItem = this[0];
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return firstItem;
};

// Array prototype methods unshift Hard Code
Array.prototype.unshift = function () {
    for (let i = this.length - 1; i >= 0; i--) {
        this[i + arguments.length] = this[i];
    }
    for (let i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
    return this.length;
};

// Array prototype methods slice Hard Code
Array.prototype.slice = function (start, end) {
    let newArray = [];
    for (let i = start; i < end; i++) {
        newArray.push(this[i]);
    }
    return newArray;
};

// Array prototype methods splice Hard Code
Array.prototype.splice = function (start, deleteCount, ...items) {
    let newArray = [];
    for (let i = start; i < start + deleteCount; i++) {
        newArray.push(this[i]);
    }
    for (let i = start; i < this.length; i++) {
        this[i] = this[i + deleteCount];
    }
    for (let i = 0; i < deleteCount; i++) {
        delete this[this.length - 1];
        this.length--;
    }
    for (let i = this.length - 1; i >= start; i--) {
        this[i + items.length] = this[i];
    }
    for (let i = 0; i < items.length; i++) {
        this[i + start] = items[i];
    }
    return newArray;
};

// Array prototype methods reverse Hard Code
Array.prototype.reverse = function () {
    for (let i = 0; i < this.length / 2; i++) {
        let temp = this[i];
        this[i] = this[this.length - 1 - i];
        this[this.length - 1 - i] = temp;
    }
    return this;
};

// Array prototype methods concat Hard Code
Array.prototype.concat = function (...arrays) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(this[i]);
    }
    for (let i = 0; i < arrays.length; i++) {
        for (let j = 0; j < arrays[i].length; j++) {
            newArray.push(arrays[i][j]);
        }
    }
    return newArray;
};

// Array prototype methods join Hard Code
Array.prototype.join = function (separator) {
    let string = "";
    for (let i = 0; i < this.length - 1; i++) {
        string += this[i] + separator;
    }
    string += this[this.length - 1];
    return string;
};

// Array prototype methods indexOf Hard Code
Array.prototype.indexOf = function (item, fromIndex) {
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
};

// Array prototype methods lastIndexOf Hard Code
Array.prototype.lastIndexOf = function (item, fromIndex) {
    for (let i = fromIndex; i >= 0; i--) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
};

// Array prototype methods includes Hard Code
Array.prototype.includes = function (item, fromIndex) {
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === item) {
            return true;
        }
    }
    return false;
};

// Array prototype methods find Hard Code
Array.prototype.find = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return undefined;
};

// Array prototype methods findIndex Hard Code
Array.prototype.findIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }
    return -1;
};

// Array prototype methods forEach Hard Code
Array.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

// Array prototype methods map Hard Code
Array.prototype.map = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
};

// Array prototype methods filter Hard Code
Array.prototype.filter = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

// Array prototype methods every Hard Code
Array.prototype.every = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
};

// Array prototype methods some Hard Code
Array.prototype.some = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
};

// Array prototype methods reduce Hard Code
Array.prototype.reduce = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// Array prototype methods reduceRight Hard Code
Array.prototype.reduceRight = function (callback, initialValue) {
    let accumulator = initialValue;
    for (let i = this.length - 1; i >= 0; i--) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// Array prototype methods flat Hard Code
Array.prototype.flat = function (depth = 1) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && depth > 0) {
            newArray = newArray.concat(this[i].flat(depth - 1));
        } else {
            newArray.push(this[i]);
        }
    }
    return newArray;
};

// Array prototype methods flatMap Hard Code
Array.prototype.flatMap = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray = newArray.concat(callback(this[i], i, this));
    }
    return newArray;
};

// Array prototype methods entries Hard Code
Array.prototype.entries = function () {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push([i, this[i]]);
    }
    return newArray;
};

// Array prototype methods keys Hard Code
Array.prototype.keys = function () {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(i);
    }
    return newArray;
};

// Array prototype methods values Hard Code
Array.prototype.values = function () {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(this[i]);
    }
    return newArray;
};

// Array prototype methods copyWithin Hard Code
Array.prototype.copyWithin = function (target, start, end = this.length) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(this[i]);
    }
    for (let i = start; i < end; i++) {
        newArray[target] = this[i];
        target++;
    }
    return newArray;
};

// Array prototype methods fill Hard Code
Array.prototype.fill = function (value, start, end = this.length) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(this[i]);
    }
    for (let i = start; i < end; i++) {
        newArray[i] = value;
    }
    return newArray;
};

// Array prototype methods sort Hard Code
Array.prototype.sort = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(this[i]);
    }
    for (let i = 0; i < newArray.length; i++) {
        for (let j = i + 1; j < newArray.length; j++) {
            if (callback(newArray[i], newArray[j]) > 0) {
                let temp = newArray[i];
                newArray[i] = newArray[j];
                newArray[j] = temp;
            }
        }
    }
    return newArray;
};

// Array prototype methods at Hard Code
Array.prototype.at = function (index) {
    return this[index];
};

// Array prototype methods constructor Hard Code
Array.prototype.constructor = function () {
    return this;
};

// Array prototype methods from Hard Code
Array.prototype.from = function (arrayLike, callback, thisArg) {
    let newArray = [];
    for (let i = 0; i < arrayLike.length; i++) {
        if (callback) {
            newArray.push(callback.call(thisArg, arrayLike[i]));
        } else {
            newArray.push(arrayLike[i]);
        }
    }
    return newArray;
};

// Array prototype methods toString Hard Code
Array.prototype.toString = function () {
    let string = "";
    for (let i = 0; i < this.length; i++) {
        string += this[i];
    }
    return string;
};

// Array prototype methods valueOf Hard Code
Array.prototype.valueOf = function () {
    return this;
};
