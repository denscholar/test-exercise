const capitalize = (value) =>{
    const str1 = value.charAt(0).toUpperCase() + value.slice(1);
    return str1;
}

module.exports = capitalize;