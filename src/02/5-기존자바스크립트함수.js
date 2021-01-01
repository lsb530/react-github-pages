function add(first, second) {
    return first + second;
}
// typeof add === 'function'
var add = function(first, second) {
    return first + second;
};
// typeof add === 'function'
console.log(add);