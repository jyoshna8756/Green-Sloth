//java script
/*{
    var a=1;
    let b=10;
    const c=100;/*cannot be re declared*/
/*console.log(a);
console.log(b);
console.log(b);
++a;
a = a/5;
console.log(a);

}


{
    let a=1;
    let b=2;

    console.log(a == b);
    console.log(a===b);
}

{
let age=18;
let person="";
person=age >= 18 ? "Eligible" : "Not Eligible";
console.log(person);
}


if else
//let age;
//age = prompt("enter the age")
//if (age >= 13 && age <= 19){
  //  console.log("You Are a teenager");
//}else if (age >= 20 && age <= 30){
  //  console.log("You Are Youth");
//}else {
 //   console.log("You Are Adult");
//}

//switch
let age;
age = prompt("enter the age")
let age1 = parseInt(age)
switch(age1) {
    case 18:
        console.log("You Are a teenager");
        break;
    case 25:
        console.log("You Are Youth");
        break;
    default:
        console.log("You Are Adult");
        break;    
}


//FOR
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//WHILE LOOP
let j=1;
while(j<10){
    console.log(j);
    j++;
}


//DO WHILE
let k = 1;
do {
    console.log(k);
    k++;
}while(k < 0); 


let person = {
    name: "john",
    id: 1,
    address: "someaddress" 
};

for (let i in person){
    console.log(person[i]);
};


let colors =["red", "orange", "blue", "green",1, 1.6]
for(let i of colors) {
    console.log(i);
}
for(i = 0; i <= colors.length; i++) {
    console.log(colors[i]);
}

//Function
let result = function sum(a, b) {
    c = a + b;
    return c;
};

console.log(result(5,8));


let obj1 = {
    key1: "hello",
    key2:1,
    hello: function () {
        console.log("hello world")
    },
};
console.log(typeof key1)

let person = {
    firstName:"joy",
    lastName:"miller",
    id:1,
    fullName: function(){
        return
    }
}


//THIS
let someobj = {
    msg: "HI JYOSHNA",
    id: 1,
    greet: function(){
        console.log(this);
        console.log(this.msg);
    },
};

someobj.greet();
console.log("output object",this);*/

//constructer function used to create an object
function Sum(a,b) {
    this.x = a;
    this.y = b;
    this.getSum = function(){
        console.log("Sum of a + b =",this.x+this.y);
    };
};

let someObj1 = new Sum(10, 10);
let someObj2 = new Sum(15, 20);
let someObj3 = new Sum(30, 30);
someObj1.getSum();
someObj2.getSum();
someObj3.getSum();