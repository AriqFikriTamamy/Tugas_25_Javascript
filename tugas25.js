function dataNumber(){
  var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
  console.log("Sebelumnya :", data.toString())
  data.sort()
  console.log("Ascending :",data.toString())
  console.log("Descending :",data.reverse().toString())
  console.log("Filter > 10 :",data.filter(data => {
    return data > 10
  }).toString())
}

dataNumber()
