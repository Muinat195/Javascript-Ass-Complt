//printReverse
function printReverse(arr){
    console.log(arr.reverse());
}
printReverse([1,2,3,4]);
printReverse(["a","b","c","d"]);
//isUniform
function isUniform(array){
    var i;
    for(i = 1; i < array.length; i++)
    {
    if (array[0] != array[i]){
        return false;
    }
    else{return true}
}
}
console.log(isUniform([1,1,1,1]));
console.log(isUniform([2,1,1,1]));
console.log(isUniform(["a", "b", "p"]));
console.log(isUniform(["b", "b", "b"]));

//sumArray()
function sumArray(val){
    var i;
    for(i = 1; i < val.length; i++)
    var sum = val[0] + val [i];
    return sum;
 
}
console.log(sumArray([1,2,3]));
//max()
function max(number){
    var i;
    for(i = 0; i <=number.length; i++)
    {
    if (number[0] < number[i]){
return number[i];}
}
}
console.log(max([1,2,3]));
//reverse()
function reverse(num){
  var revN = num.reverse();
   return revN;
} 
console.log(reverse([1,2,3]));
console.log(reverse(["a","b", "c"]));