const reverseString = (string) =>{
    let newString = string.split('');
    let newReverse = newString.reverse();
    let joinReverse = newReverse.join('');
    return joinReverse;
} 

module.exports = reverseString;
