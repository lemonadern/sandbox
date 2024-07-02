const xs = [...Array(10)].map((_, i) => i);

let ys: number[] = [];
for (const i of xs) {
  let triple = i * 3;
  console.log(`map: ${i} -> ${triple}`);
  if (triple % 2 === 0) {
    console.log(`filter: ${triple} -> true`);
    ys.push(triple);
  } else {
    console.log(`filter: ${triple} -> false`);
  }
}

console.log(ys);

export default {};

// > deno run for-of.ts
// map: 0 -> 0
// filter: 0 -> true
// map: 1 -> 3
// filter: 3 -> false
// map: 2 -> 6
// filter: 6 -> true
// map: 3 -> 9
// filter: 9 -> false
// map: 4 -> 12
// filter: 12 -> true
// map: 5 -> 15
// filter: 15 -> false
// map: 6 -> 18
// filter: 18 -> true
// map: 7 -> 21
// filter: 21 -> false
// map: 8 -> 24
// filter: 24 -> true
// map: 9 -> 27
// filter: 27 -> false
// [ 0, 6, 12, 18, 24 ]
