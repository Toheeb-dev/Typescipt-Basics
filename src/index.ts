//tsc type
let sales:number = 123_456_787;
let course:string = 'Typescript'
let is_publish:boolean = true
let level;
function render(document: any){
    console.log(document);
    
}
//array
let numbers:number[] = [0, 1, 2, 4, 3]
let number = [0, 1, 2, 4, 3]
let exnumber:any[] = []
number[0]=2
number[1]=3
exnumber[0] = 1
exnumber[1] = 2
// tsc have autocompletion
numbers.forEach(n => {
    n.toFixed
});
//tuple
let users: [number, string] = [1, 'Toheeb']
users[0].toFixed
users[1].concat
users.push(1)
//enums
//instead of declearing it like this:
// const small = 1;
// const medium = 2;
// const large = 3;
//use PascalCase => enum
enum Size { Small, Medium, Large}
const enum size { small = 1, medium , large}// use **const** for code optimization
enum Size { smalL = 's', mediuM = 'm' , largE = 'l'}
let mySize : Size = Size.Medium
console.log(mySize);


//function
function calculateTax(income:number, taxYear=2020):number {
    if (((income || 5_000) || taxYear) < 10_000)
        return income * 1.2
    return income * 1.3
    /** if (taxYear < 2022)
        return income * 1.2
    return income * 1.3 **/

}
calculateTax(20_000, 2033)

//object but it is cumbersome
let employee:{
    readonly id:number, //cannot be modify
    name:string,
    retire: (date:Date)=> void
        } = { id: 1,
             name :'', //use **''** is the best, dont use **?** except if it is truely optional
             retire: (date:Date)=>{
                console.log(date);
                
             } } 
employee.name = 'Toy'

//type alias
type Employee ={
    readonly id:number, //cannot be modify
    name:string,
    retire: (date:Date)=> void
}
//object with type which makes it neater
let employee1:Employee= { id: 1,
             name :'',
             retire: (date:Date)=>{
                console.log(date);
                
             } } 

//Union and Narrowing Type
function kgToLbs(weight:number | string){ //Union ** | **
 //narrowing
 if(typeof weight === 'number')
    return weight * 3.3;
else
    return parseInt(weight) * 3.3;
}
kgToLbs(10);
kgToLbs('10');

//Intersection Type (combining two type together)
let weight:string & number; //which is impossible

type Draggable = {
    drag: () => void
}
type Resizable = {
    resize: () => void
}

type UIwidget = Draggable & Resizable

let textBox:UIwidget = {
    drag: ()=>{},
    resize: ()=>{}
}

//Literal Type( which means exact or specific)
let Quality: 50 | 100 = 50 ; //the value must be 50 or 100, it does not allow other number

//Literal Type with Type
type quality = 50 | 100
let Quality2: quality = 50 ; //the value must be 50 or 100, it does not allow other number
//===================================================
type metric = 'cm' | 'inch';
let Metric:metric = "cm" //the value must be "cm" or "inch" , it does not accept any other string

//Nullable Types
function student(name:string | null | undefined){
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola');
        }
student(null) //null value is not assignable in typescript except if u allow it in the config file or declare the null type 
student(undefined) //'undefined' is not assignable as a value in typescript except if u declare the undefined type

//Optional Chaining
type Customer = {
    birthday?: Date;
}
        function getCustomer(id:number): Customer | null | undefined{
            return id === 0? null : {birthday: new Date()}
        }

let newCustomer = getCustomer(1);
// if (newCustomer !== null && newCustomer !== undefined) //instead of this use optional chaining method
//console.log(newCustomer.birthday);

//Optional property access operator
console.log(newCustomer?.birthday);
console.log(newCustomer?.birthday?.getFullYear);

//Optional element access operator
let newCustom:Customer | null | undefined [] = []
/** if (newCustom !== null && newCustom !== undefined)
       console.log(newCustom[0]);  **/ //instead of this use Option element access operator
console.log(newCustom?.[0]);

//Optional call
let log: any = null
console.log(log?.('a'));
; //will only log only if log is referencing a function else it will be undefined


       
    
