// Group items on the basis of age of given array of object

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Janes', age: 20 },
];

/* 
output:
{
    '20': [ {name:'Max', age:20}, {name:'Janes', age:20}],
    '21': [{name:'Alice', age:21}]
}
*/

//create hash
//loop over array, check to see if age is in hash
//if not, add age as key, push current index as value in array
//return hash
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

console.log(groupBy(people));
