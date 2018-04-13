//code below is Ryans soulutionconst inputArray =

//= ["this", "is", "an", "array"]

function findLongestThree(arr){
  let count = 0;
  let newArray = [];

  for (let i = 0; i < arr.length - 2; i++{
    if (arr[i].length + arr[i + 1]length + arr[i + 2].length > count){
      count = arr[i].length + arr[i + 1]length + arr[i + 2].length;
      newArray = [thisArr[i], thisArr[i + 1]
    }
  })
}
