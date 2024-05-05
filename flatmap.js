const friends = [
  { name: 'Anna', books: ['Bible', 'Harry Potter'] },
  { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'] },
  { name: 'Alice', books: ['The Lord of the Rings', 'The Shining'] },
];
// using flatMap()
const result = friends.flatMap((person) => person.books);

// using map() & flat()
// flatMap is combing map & flat
const allBooks = (people) => {
  return people
    .map((person) => {
      return person.books;
    })
    .flat();
};

console.log(allBooks(friends));

// using reduce()
const books = friends.reduce((accum, curr) => {
  return [...accum, ...curr.books];
}, []);

console.log(books);
