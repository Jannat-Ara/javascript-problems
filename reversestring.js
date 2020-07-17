
function reversestr(str){
    var reverse ="";
    for(var i=0; i<str.length; i++){
         var char = str[i];
         reverse = char+ reverse;
    }
    return reverse;
}

var statement= " Hello Mask! Let's have a dinner.";
var res= reversestr(statement);
console.log(res);