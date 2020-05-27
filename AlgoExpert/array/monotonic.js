function monotonic(arr) {
  let increased = false;
  let decreased = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= arr[i - 1]) {
      increased = true;
    }
    if (arr[i] <= arr[i - 1]) {
      decreased = true;
    }
    if (increased && decreased) {
      return false;
    }
  }

  return true;
}
