// for

// for (let index = 0; index <= 10; index++) {
//     const element = index;
//     if (index === 5) {
//         console.log(index, 'is best number');
//     }
//     console.log(element);
// }



// break and continue

for (let index = 0; index <= 10; index++) {
    if (index === 5) {
        console.log(`Detected ${index}`);
        // break;
        continue;
    }
    console.log(`Value of i is : ${index}`);

}