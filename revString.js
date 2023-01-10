const revString = str => 
    str
        .toLowerCase()
        .split('')
        .reverse()
        .join('');

module.exports = revString;