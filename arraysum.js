function arraysum(numbers){
    var sum= 0;
    for( var i=0 ; i< numbers.length ;i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum ;
}
 var numbers= [45 , 65 ,78 , 99, 13, 15, 10];
 var result = arraysum(numbers);
 console.log( result);