var rollno = [3, 6, 2, 7, 3, 2, 8 , 9, 1, 11, 56 ,2,3];
var uniqueNo = [];
for ( var i=0 ;  i< rollno.length ; i++)
{
    var element = rollno[i];
    var index= uniqueNo.indexOf(element);
    if(index == -1)
    {
        uniqueNo.push(element);
    }

}
console.log(uniqueNo);