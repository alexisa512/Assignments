// "()()" // -> true
// "(())" // -> true
// "()))" // -> false
// ")()(" // -> false
// "())(" // -> false


const balanceParenthesis = str => {
    let result = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === "("){
            result++
        } else if (str[i] === ")"){
            result--
        }
        if(result < 0){
            return false
        }
    }
    return result === 0 ? true : false
}

console.log(balanceParenthesis("()()"))
console.log(balanceParenthesis("(())"))
console.log(balanceParenthesis("()))"))
console.log(balanceParenthesis(")()("))
console.log(balanceParenthesis("())("))

// another option:
const parGroups = str => {
    const stack = str.split('').filter(val => val === '(' || val === ')')
    let even = str.split('(').length === str.split(')').length
    let balanced = stack.every((val, i, arr) => {
      return (arr[0] === ')' || arr[arr.length - 1] === '(' || !even) ? false :  true
    })
    return balanced
  }