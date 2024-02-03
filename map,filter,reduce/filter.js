let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = num.filter((item) => item > 5);
// console.log(newNums);


let books = [
    { bookName: 'abc', genre: 'fitness', publish: '1999' },
    { bookName: 'abcd', genre: 'Javascript', publish: '2000' },
    { bookName: 'abce', genre: 'react', publish: '1989' },
    { bookName: 'abcf', genre: 'Career', publish: '1985' },
    { bookName: 'abcg', genre: 'Javascript', publish: '2002' },
    { bookName: 'abch', genre: 'fitness', publish: '2003' },
    { bookName: 'abcj', genre: 'react', publish: '1960' },
    { bookName: 'abck', genre: 'fitness', publish: '2010' },
]

let detail = books.filter((item) => item.publish < 2000);
console.log(detail);