// - Write method findPath
// - Should take two params:
//     - object
//     - keys separated by dots as string
// - Return value if it exists at that path inside the object, else return undefined
// */
var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

// const findPath = (object, path) => {
//   let cache = object;
//   let arr = path.split('.');
//   for (let i = 0; i < arr.length; i++) {
//     // null is a JS object, returns TypeError from key lookup
//     if (cache === null && arr[i]) return undefined;

//     // if key not found, path doesn't exist
//     if (!cache.hasOwnProperty(arr[i])) return undefined;

//     // reassign current obj location for next iteration lookup
//     cache = cache[arr[i]];
//   }
//   return cache;
// };

//refactored

const findPath = (object, path) => {
  let cache = object;
  let arr = path.split('.');

  for (var i = 0; i < arr.length; i++) {
    try {
      if (!current.hasOwnProperty(arr[i])) return undefined;
      current = current[arr[i]];
    } catch {
      return undefined;
    }
  }
  return current;
};

// console.log(findPath(obj, 'a.b.c')); // 12
// console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj, 'a.b.j')); //false
// console.log(findPath(obj, 'a.b.j.k')); //undefined
// console.log(findPath(obj, 'a.k')); //null

// edge cases
// console.log(findPath(obj, 'a.k.j')); // undefined  (throws error looking for j when k is null)
// tip: cache become toString function - hasOwnProperty checks for direct props, returns false on inherited prop
console.log(findPath(obj, 'a.toString')); // undefined
