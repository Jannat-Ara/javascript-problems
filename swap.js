// using temp
var a=5;
var b=7;
console.log("Before swap: a =",a," b =",b);
var temp = a;
a = b;
b = temp;
console.log(" After swap: a =",a," b =",b);

// without using temp
var x= 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log(" After swap: x =",x," b =",y);

// special way in js

var p = 5;
var q = 6;
[p , q] = [q, p];
console.log(" After swap: p =",p," q =",q);

// using function
function swap( num1, num2){
    var temp =num1 ;
    num1 = num2;
    num2 = temp;
    console.log("After swap: num1 =",num1," num2 =",num2 );
}
swap ( 5, 7);