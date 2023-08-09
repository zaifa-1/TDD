export function analyzeArray(arr){
    let object= {}

    arr.sort()
    let min = arr[0]
    let max= arr[arr.length-1]
    let length= arr.length

    let sum= arr.reduce((a,b)=> a+b)

    let avg= sum/length

    object.average= avg
    object.length= length
    object.max= max
    object.min= min

    return object
}