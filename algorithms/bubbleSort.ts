function bubbleSort(array: number[]): number[] {
  array = array.slice();
  for(let i = 0; i < array.length; i++) {
      for(let j = 0; j < array.length - 1; j++) {
        if(array[j] > array[j + 1]) {
            let swap = array[j];
            array[j] = array[j + 1];
            array[j + 1] = swap;
        }
      }
  }
  return array;
}

const result = bubbleSort([23,444,32,786,0,-99,12,54,753,43]);
console.log("Sorted array:", result);