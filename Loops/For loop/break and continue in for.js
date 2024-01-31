// break
console.log('Using break');

for (let index = 0; index <= 10; index++) {
    if (index === 5) {
        console.log(`Detected ${index}`);
        break;
    }
    console.log(`Value of i is : ${index}`);

}

console.log('');
console.log('Using continue');

// continue
for (let index = 0; index <= 10; index++) {
    if (index === 5) {
        console.log(`Detected ${index}`);
        continue;
    }
    console.log(`Value of i is : ${index}`);

}