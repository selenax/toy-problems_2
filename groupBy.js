let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Janes', age: 20 },
];

//TASK: Group items on the basis of age of given array of object

//using for loop
const groupBy = (arr) => {
  let hash = {};

  for (let person of arr) {
    if (!hash.hasOwnProperty(person.age)) {
      hash[person.age] = [person];
    } else {
      hash[person.age].push(person);
    }
  }
  return hash;
};

//using Object.groupBy()
const result = Object.groupBy(people, ({ age }) => age);

//using reduce()
const reduceByAge = people.reduce((accum, curr) => {
  //define prop
  const key = curr.age;
  //if prop doesn't exist yet, assign empty array as value
  const group = accum[key] ?? [];
  return { ...accum, [key]: [...group, curr] };
}, {});

/* 
{
    '20': [ {name:'Max', age:20}, {name:'Janes', age:20}],
    '21': [{name:'Alice', age:21}]
}
*/

//Object.groupBy(array, (obj) => obj.name);

//NOTE: Object.groupBy(iterableOBJ, callbackFN)
//1. arrow fn returns the age of each array element each time it's called
//2. age is object destructured - unpacked age prop and assign it to variable named age
//3. returned value of callbackFN are keys associated with an array containing all the elements for which the callback returned the same value

const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 },
];

const type = Object.groupBy(inventory, ({ type }) => type);
// console.log(type);
/** 
{
  vegetables: [ { name: 'asparagus', type: 'vegetables', quantity: 5 } ],
  fruit: [
    { name: 'bananas', type: 'fruit', quantity: 0 },
    { name: 'cherries', type: 'fruit', quantity: 5 }
  ],
  meat: [
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'fish', type: 'meat', quantity: 22 }
  ]
}
**/

//TASK: group by quantity more than 5
const quantity = Object.groupBy(inventory, byQuantity);

function byQuantity({ quantity }) {
  return quantity > 5 ? 'keepSame' : 'restock';
}

console.log(quantity);
/*
{
  restock: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
    { name: 'bananas', type: 'fruit', quantity: 0 },
    { name: 'cherries', type: 'fruit', quantity: 5 }
  ],
  keepSame: [
    { name: 'goat', type: 'meat', quantity: 23 },
    { name: 'fish', type: 'meat', quantity: 22 }
  ]
}
*/
