var speech = "I am a good person as, i don't snore at night";
var count=0;
for( var i=0 ; i< speech.length; i++){
    var char= speech[i];
    if( char== "o"){
        count++;
    }
}
console.log(" Number of o in the text: ",count);