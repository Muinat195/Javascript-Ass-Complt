//function
function isEven(val) {
    if (val % 2 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isEven(4)
isEven(21)
isEven(68)
isEven(333)
//Factorial
function factorial(z) {
    if (z == 0) {
        return 1;
    } else {
        return z * factorial(z - 1);
    }
}
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));
KebabToSnake

function KebabToSnake(word) {
    var rep = word.replace(/-/g, "_");
    return rep;
}
console.log(KebabToSnake("hello-world"));
console.log(KebabToSnake("dogs-are-awesome"));
console.log(KebabToSnake("blah"));