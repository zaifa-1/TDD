export function reverseString(string){
    let a= ''
    let b= string.split('')
    while(b.length > 0){
        a+= b.pop()
    }
    return a

    // string.split('').reverse().join('')
}