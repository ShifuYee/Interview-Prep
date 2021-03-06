const {swap} = require('./swap')

const insertionSort = (array) => {
  for (let i = 1; i < array.length; ++i) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      swap(array, j, j - 1)
      --j
    }
  }
  return array
}

module.exports = {insertionSort}
