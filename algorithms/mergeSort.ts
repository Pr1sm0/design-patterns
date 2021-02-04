function mergeSort(arr: number[]): number[] {

  if(arr.length <= 1){
    return arr;
  }

  let halfArr = Math.floor(arr.length / 2);
  let leftPart = arr.slice(0, halfArr);
  let rightPart = arr.slice(halfArr);

  return merge(mergeSort(leftPart), mergeSort(rightPart));
}

function merge(leftPart: number[], rightPart: number[]): number[] {
  const array: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while(leftIndex < leftPart.length && rightIndex < rightPart.length) {
    if(leftPart[leftIndex] < rightPart[rightIndex]){
      array.push(leftPart[leftIndex]);
      leftIndex++;
    } else {
      array.push(rightPart[rightIndex]);
      rightIndex++;
    }
  }
  return array.concat(leftPart.slice(leftIndex)).concat(rightPart.slice(rightIndex));
}

const result = mergeSort([23,444,32,786,0,-99,12,54,753,43]);
console.log("Sorted array:", result);