let map = new Map();
map.set('In', 'India');
map.set('USA', 'United States of Amerrica');
map.set('Fr', 'France');

console.log(map);

for (let [key, value] of map) {
    console.log(key, ':-', value);
}