//TASK: [1,1,2,2,2,3] into obj {1:2,2:3,3:1}
//TIP: object literal ({ ...obj, key: 'value' })
let arr = [1, 1, 2, 2, 2, 3];

const reduceToObj = arr.reduce((accum, curr) => {
  const count = accum[curr] ?? 0;
  accum[curr] = count + 1;
  return accum;
}, {});

console.log(reduceToObj);

// for loop
function group(arr) {
  let hash = {};
  for (let val of arr) {
    const count = hash[val] ?? 0;
    hash[val] = count + 1;
  }
  return hash;
}

console.log(group(arr));
