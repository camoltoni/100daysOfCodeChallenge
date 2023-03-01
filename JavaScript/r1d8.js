function smallestCommons(arr) {
  arr = arr.sort((a,b)=>a-b)
  const min = arr[0]
  const max = arr[1]
  arr = Array.from({length:arr[1]-arr[0]+1}, (val,ind)=>arr[0]+ind)
  let i = arr[2]
  for(i; true; i++) {
    let r = i * min
    let sum = 0
    for(let j of arr) {
      sum+= i * min % j
    }
    if(sum == 0) return r
  }
}



{
  let text = smallestCommons([23,18])
  console.log(text)
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 8: ${text}</h4>`
  result.innerHTML += "<quote>Get the smallest common multiple of a range of numbers</quote>"
}