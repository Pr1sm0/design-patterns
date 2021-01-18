function mergeSort(items: number[]): number[] {
  return divide(items);
}

function divide(items: number[]): number[] {
  let halfLength = Math.ceil(items.length / 2);
  let low = items.slice(0, halfLength);
  let high = items.slice(halfLength);
  if (halfLength > 1) {
      low = divide(low);
      high = divide(high);
  }
  return combine(low, high);
}

function combine(low: number[], high: number[]): number[] {
  let indexLow = 0;
  let indexHigh = 0;
  let lengthLow = low.length;
  let lengthHigh = high.length;
  let combined = [];
  while (indexLow < lengthLow || indexHigh < lengthHigh) {
      let lowItem = low[indexLow];
      let highItem = high[indexHigh];
      if (lowItem !== undefined) {
          if (highItem === undefined) {
              combined.push(lowItem);
              indexLow++;
          } else {
              if (lowItem <= highItem) {
                  combined.push(lowItem);
                  indexLow++;
              } else {
                  combined.push(highItem);
                  indexHigh++;
              }
          }
      } else {
          if (highItem !== undefined) {
              combined.push(highItem);
              indexHigh++;
          }
      }
  }
  return combined;
}

const result = mergeSort([23,444,32,786,0,-99,12,54,753,43]);
console.log("Sorted array:", result);

