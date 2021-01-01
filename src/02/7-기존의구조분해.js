var list = [0, 1];
console.log(list);

var item1 = list[0];
console.log(item1);

var item2 = list[1];
console.log(item2);

var item3 = list[2] || -1;
console.log(item3);

var temp = item2;
console.log(temp);

item2 = item1;
item1 = temp;
var obj = {
    key1: 'one',
    key2: 'two',
};
var key1 = obj.key1;
var key2 = obj.key2;
var key3 = obj.key3 || 'default key3 value';
var newKey1 = obj.key1;
console.log(item2);
console.log(item1);
console.log(obj);
console.log(obj.key1);
console.log(obj.key2);
console.log(key1);
console.log(key2);
console.log(key3);
console.log(newKey1);