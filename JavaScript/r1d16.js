function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false
  }
  return true;
}



{

  let text = palindrome("My age is 0, 0 si ega ym.")

  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 16: ${text}</h4>`
  result.innerHTML += "<quote>Palindrome checker</quote>"
}