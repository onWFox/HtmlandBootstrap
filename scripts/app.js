function spinWords(string){
    let NewString =""
 
    for(let i = string.length - 1;i>=0; i--){
      NewString +=string[i]
      
    }
    return NewString
    }
    
spinWords('Hello')
console.log(pinWords('Hello'))