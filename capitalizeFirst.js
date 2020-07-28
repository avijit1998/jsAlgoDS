const toPascalCase = (str) =>
  (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join("");

function capitalizeFirst(arr) {
  let newArr = [];
  arr.forEach((str) => {
    newArr.push(toPascalCase(str));
  });
  return newArr;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
