/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
for(var i=1;i<=100;i++) {
    if (Number.isInteger(i/3) && Number.isInteger(i/5)) { 
        console.log(i + " fizzbuzz");
    } else if (Number.isInteger(i/3)) {
        console.log(i + " buzz");
    } else if (Number.isInteger(i/5)) {
        console.log(i + " fizz");
    } else {
        console.log(i);
    } (i/3)
    }

/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
var txt = "";
for(var x=1;x<=7;x++){
    console.log((txt = txt +"#")); 
}
console.log(txt.length)

var chess = "# # # #";
for(var x=1;x<=8;x++){
    if (Number.isInteger(x/2)) {
        console.log(" " + chess);
    } else {
        console.log(chess);
    } 
}