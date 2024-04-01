
## Create array dynamically:  [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]
```
let totalPages = 10;
let x = Array.from({length: totalPages}, (_, index) => index + 1);
console.log(x);
```
