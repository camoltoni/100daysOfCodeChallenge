function sumFibs(num) {
  let a = 0
  let b = 1
  let result = 0
  while(a+b <= num) {
    let x = b
    b = a + b
    a = x
    if(b % 2 != 0)
      result += b
  }
  return result;
}



{
  let text = sumFibs(1000)
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 6: ${text}</h4>`
  result.innerHTML += "<quote>Sum odds Fibonacci numbers below a max</quote>"
}