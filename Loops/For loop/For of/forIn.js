let myObject={
    person1:"Md Sahil",
    person2:"Pooja",
    person3:"Arbaz",
}
for (const key in myObject) {
   console.log(`${key}'s name is ${myObject[key]}`);
}