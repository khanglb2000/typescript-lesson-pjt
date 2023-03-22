"use strict";
class Coder {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age} years old.`;
    }
}
const Ken = new Coder('Ken', 'Pop', 25);
console.log(Ken.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}.`;
    }
}
const Lin = new WebDev('Mac', 'Lin', 'Rock', 20);
console.log(Lin.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}.`;
    }
}
const Page = new Guitarist('John', 'guitar');
console.log(Page.play('strums'));
// =============================
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const Fou = new Peeps('Fou');
const Ioe = new Peeps('Ioe');
const Wan = new Peeps('Wan');
console.log(Peeps.count);
// =========================
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Param is not an array of strings!");
        }
    }
}
const myBands = new Bands();
myBands.data = ['He Kim', 'Gio Mnife'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'Tremiun'];
console.log(myBands.data);
