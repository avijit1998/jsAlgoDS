let arrStr = ["Test", "Super", "Dummy", "Klimingo"];

console.log(arrStr.sort());

let arrNum = [123, 456, 234, 78, 234345];

console.log(
  arrNum.sort((n1, n2) => {
    return n1 - n2;
  })
);
