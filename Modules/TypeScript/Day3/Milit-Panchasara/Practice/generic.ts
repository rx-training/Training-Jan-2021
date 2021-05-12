
function pr1<T>(arg: T): T {
    return arg;
} 

let temp1 = pr1<number>(10);
console.log(temp1);

let temp2 = pr1<string>('str');
console.log(temp2);

function pr2<T>(arg: T[]): number {
    return arg.length;
} 

let x = ["x","z","y"];
let y = [1,2,3];

console.log(pr2(x));
console.log(pr2(y));