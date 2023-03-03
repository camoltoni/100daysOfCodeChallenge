function dropElements(arr, func) {
  for(let e of arr) {
    if(func(e)) {
      return arr.slice(arr.indexOf(e))
    }
  }
  return []
}



{
  let text = dropElements([1,3,5,9,10,5,8], (n)=>n%2==0)
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 9: ${text}</h4>`
  result.innerHTML += "<quote>Get the result array from the first element that meets a condition</quote>"
}