//magic eightball

var numberofreplys = 11;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'

    /*
    write conditional logic here using if, else if, and else
    */
    if (numberofreplys < 5) {
        console.log(numberofreplys + " is not good!")
    } else if (numberofreplys < 10) {
        console.log(numberofreplys + " is enough!")
    } else {
        console.log(numberofreplys + " is bigger!")
    }

    /* console.log(choice); */
}

ask();
