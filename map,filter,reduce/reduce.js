let numbers = [1, 2, 3];

// const result = numbers.reduce((acc, currVal) => {
//     console.log(`acc : ${acc} curr : ${currVal}`);
//     return acc + currVal;
// }, 1);

const totle = numbers.reduce((acc, currVal) => acc + currVal, 0);

// console.log(result);


// Shopping carts
const shoppingCart = [
    {
        itemName: "Frontend dev course",
        price: 4000,
    },
    {
        itemName: "Backend dev course",
        price: 3400,
    },
    {
        itemName: "React course course",
        price: 3500,
    },
    {
        itemName: "System Design dev course",
        price: 8000,
    },
];

const price = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(price);