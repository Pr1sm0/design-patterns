const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function linearSearch(arr: string[], elementToFind: string): number | null {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elementToFind) {
      return i;
    }
  } return null;
}

const result = linearSearch(rainbow, "green");
console.log("Index of the found element:", result);
