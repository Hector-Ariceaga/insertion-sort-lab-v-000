function findMinAndRemove(array){
  let minimum = array[0]
  let minIndex = 0
  for (let i=0; i < array.length; i++) {
    if (i < minimum) {
      minimum = array[i]
      array.splice(i, 1)
    }
  return minimum
  }
}

function insertionSort(array){
  sorted = []
  while (array.length !== 0) {
    sorted.push(findMinAndRemove(array))
  }
  return sorted
}
