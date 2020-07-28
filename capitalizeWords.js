function capitalizeWords(arr) {
  let newArr = [];
  function capitalize(arr) {
    if (arr.length === 0) return;
    newArr.push(arr[0].toUpperCase());
    capitalize(arr.slice(1));
  }
  capitalize(arr);
  return newArr;
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
