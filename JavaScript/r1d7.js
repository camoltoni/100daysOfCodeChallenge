function sumPrimes(num) {
  function isPrime(num) {
    if(num < 4) return true
    let d = 2
    while(d < num) {
      if(num % d == 0) return false
      d++
    }
    return true
  }
  let s = 0
  for(let i = 2; i <= num; i++) {
    if(isPrime(i)) {
      s+=i
    }
  }
  return s
}

{
  let text = sumPrimes(977)
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 7: ${text}</h4>`
  result.innerHTML += "<quote>Sum prime numbers below a max</quote>"
}