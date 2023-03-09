function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
  for(let i = 0; i < str.length / 2; i++) {
    if(str[i] !== str[str.length-1-i]) return false
  }
  return true;
}



{

  let text= palindrome("My age is 0, 0 si ega ym.")
  console.log(text)
  console.log(palindrome("0_0 (: /-\ :) 0-0"))
  console.log(palindrome("A man, a plan, a canal. Panama"))
  console.log(palindrome("five|\_/|four"))

  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 15: ${text}</h4>`
  result.innerHTML += "<quote>Calculate orbital period in seconds</quote>"
}