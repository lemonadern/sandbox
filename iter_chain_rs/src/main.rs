fn main() {
    let v = (0..10).collect::<Vec<i32>>();

    let s: Vec<i32> = v
        .iter()
        .map(|x| {
            let triple = x * 3;
            println!("map: {} -> {}", x, triple);
            triple
        })
        .filter(|x| {
            let is_even = x % 2 == 0;
            println!("filter: {} -> {}", x, is_even);
            is_even
        })
        .collect();

    println!("s: {:?}", s);
}

// > cargo r --quiet
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
// s: [0, 6, 12, 18, 24]
