const {bubbleSort} = require('./bubbleSort')

describe('Bubble Sort', function () {
  it('sorts the arrays', function () {
    expect(bubbleSort([1])).toEqual([1])
    expect(bubbleSort([3, 4, 2, 1, 0])).toEqual([0, 1, 2, 3, 4])
    expect(bubbleSort([-8, 20, -1029, 3, 44, 707, 1])).toEqual([-1029, -8, 1, 3, 20, 44, 707])
  })
})
