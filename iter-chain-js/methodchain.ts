const xs = [...Array(10)].map((_, i) => i);

const ys = xs.map((i) => {
  let triple = i * 3;
  console.log(`map: ${i} -> ${triple}`);
  return triple;
})
  .filter((i) => {
    let predicate = i % 2 === 0;
    console.log(`filter: ${i} -> ${predicate}`);
    return predicate;
  });

console.log(ys);

export default {};

// > deno run methodchain.ts
// map: 0 -> 0
// map: 1 -> 3
// map: 2 -> 6
// map: 3 -> 9
// map: 4 -> 12
// map: 5 -> 15
// map: 6 -> 18
// map: 7 -> 21
// map: 8 -> 24
// map: 9 -> 27
// filter: 0 -> true
// filter: 3 -> false
// filter: 6 -> true
// filter: 9 -> false
// filter: 12 -> true
// filter: 15 -> false
// filter: 18 -> true
// filter: 21 -> false
// filter: 24 -> true
// filter: 27 -> false
// [ 0, 6, 12, 18, 24 ]
