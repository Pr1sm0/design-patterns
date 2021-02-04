function bubbleSort(array: number[]): number[] {
  const arr = [...array];
  let swap = false;
  for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr.length - 1; j++) {
        if(arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swap = true;
        }
      }
    if (!swap) {
      return arr;
    }
  }
  return arr;
}

const result = bubbleSort([23,444,32,786,0,-99,12,54,753,43]);
console.log("Sorted array:", result);