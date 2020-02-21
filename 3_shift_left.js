// Given an array, shift all values one position to the left.  Change the final position to 0. Return the changed array
// Predicted Output: shiftLeft([1,2,3,4,5]) should return [2,3,4,5,0];

function shiftLeft(arr){
    var newarr=[];
    for(i=1; i<arr.length; i++){
        newarr.push(arr[i]);
    }
    newarr.push(0);
    return newarr
}
var resultArr = shiftLeft(["hello","hi","yo","wazzup"]);
console.log(resultArr);