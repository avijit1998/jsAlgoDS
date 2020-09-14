function activityNotifications(expenditure, d) {
  function median(values) {
    if (values.length === 0) return 0;

    values.sort(function (a, b) {
      return a - b;
    });

    var half = Math.floor(values.length / 2);
    // odd numbers middle value
    if (values.length % 2) return values[half];

    // even numbers average of middle values
    return (values[half - 1] + values[half]) / 2.0;
  }
  let start = 0,
    count = 0;
  for (let i = d; i < expenditure.length; i++) {
    // find the trailing expenditures
    let arr = expenditure.slice(start++, i);

    let med = median(arr);

    if (expenditure[i] >= 2 * med) {
      count++;
    }
  }
  return count;
}

function activityNotifBtrSol(expenditure, d) {
  // Number of notifications
  let count = 0;

  // Set midpoints for median calculation
  let [i1, i2] = [Math.floor((d - 1) / 2), Math.ceil((d - 1) / 2)];
  let m1, m2;

  // Initialize count sorted subarray
  let subArr = new Array(201).fill(0);
  for (let i = d - 1; i >= 0; i--) subArr[expenditure[i]]++;

  // Iterate through expenditures
  for (let i = d, l = expenditure.length; i < l; i++) {
    // Find median
    for (let j = 0, k = 0; k <= i1; k += subArr[j], j++) m1 = j;
    for (let j = 0, k = 0; k <= i2; k += subArr[j], j++) m2 = j;
    let med = (m1 + m2) / 2;

    // Check if notification is given
    if (expenditure[i] >= med * 2) count++;

    // Replace subarray elements
    subArr[expenditure[i - d]]--;
    subArr[expenditure[i]]++;
  }

  return count;
}

// console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));
console.log(activityNotifBtrSol([2, 3, 4, 2, 3, 6, 8, 4, 5], 5));
