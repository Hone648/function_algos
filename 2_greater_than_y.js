// Given an array and a number y, count and return how many numbers in the array are bigger than y.
// Predcted output: greaterThanY([1,6,8,3,5,2], 4) should return 3

function greaterThanY(arr, y){
    var newarr=[];
    for(i=0; i<=arr.length-1; i++){
        if(arr[i]>y){
        newarr.push(arr[i]);
        }
    }
    return newarr
}
var result = greaterThanY([5,6,7,8,9,10], 4);
console.log(result);

