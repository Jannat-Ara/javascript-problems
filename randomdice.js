console.log( " dice pick for 4 person");
for (var i=0;i<=3;i++){
    var randomNum = Math.random()*6;
    var output = Math. round(randomNum);
    if( output == 0)
    {
        console.log( " 0 can not be choosen as it is not included in the dice.");
    }
    else{
        console.log(output);
    }
}