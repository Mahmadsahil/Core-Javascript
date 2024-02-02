// map using array
let list = ['Md sahil', 'Pooja', 'Arbaz'];

list.map((item) => {
    // console.log(item);
});


// map using object
let list2 = [
    { name: "Md sahil" },
    { name: "Pooja" },
    { name: "Arbaz" }
];

list2.map((item) => {
    // console.log(item.name);
})


//map chaining

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num > 35)

console.log(result);

