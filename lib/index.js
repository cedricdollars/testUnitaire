exports.firstNotConsecutive = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let next = arr[i + 1];
    if (next - current !== 1) {
      return next;
    }
  }
};
