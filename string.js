const stringLength = (string) => {
    if(string.length >= 1 && string.length <= 10){
        return string.length;
    }else{
        throw new Error('this is an error')
    }
}

module.exports = stringLength;