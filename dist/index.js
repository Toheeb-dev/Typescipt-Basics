"use strict";
var _a;
let sales = 123456787;
let course = 'Typescript';
let is_publish = true;
let level;
function render(document) {
    console.log(document);
}
let numbers = [0, 1, 2, 4, 3];
let number = [0, 1, 2, 4, 3];
let exnumber = [];
number[0] = 2;
number[1] = 3;
exnumber[0] = 1;
exnumber[1] = 2;
numbers.forEach(n => {
    n.toFixed;
});
let users = [1, 'Toheeb'];
users[0].toFixed;
users[1].concat;
users.push(1);
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
(function (Size) {
    Size["smalL"] = "s";
    Size["mediuM"] = "m";
    Size["largE"] = "l";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
function calculateTax(income, taxYear = 2020) {
    if (((income || 5000) || taxYear) < 10000)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(20000, 2033);
let employee = { id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    } };
employee.name = 'Toy';
let employee1 = { id: 1,
    name: '',
    retire: (date) => {
        console.log(date);
    } };
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 3.3;
    else
        return parseInt(weight) * 3.3;
}
kgToLbs(10);
kgToLbs('10');
let weight;
let textBox = {
    drag: () => { },
    resize: () => { }
};
let Quality = 50;
let Quality2 = 50;
let Metric = "cm";
function student(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
}
student(null);
student(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let newCustomer = getCustomer(1);
console.log(newCustomer === null || newCustomer === void 0 ? void 0 : newCustomer.birthday);
console.log((_a = newCustomer === null || newCustomer === void 0 ? void 0 : newCustomer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear);
let newCustom = [];
console.log(newCustom === null || newCustom === void 0 ? void 0 : newCustom[0]);
let log = 'kkasd';
console.log(log === null || log === void 0 ? void 0 : log('a'));
;
//# sourceMappingURL=index.js.map