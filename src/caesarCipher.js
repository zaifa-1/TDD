function getNextChar(letter){
    if(letter === 'z'){
      return 'a'
    }
    if(letter === 'Z'){
      return 'A'
    }
    return String.fromCharCode(letter.charCodeAt(0)+1)
  }
  
export function caesarCipher(string){
    let a= string.split('')
    let newWord= ''
    a.forEach((letter) => {
      newWord+= getNextChar(letter)
    })
    return newWord
  }