function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  if (str.match(regex)) return true
  return false
}

{

  let text = telephoneCheck("555 555 5555")
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 19: ${text}</h4>`
  result.innerHTML += "<quote>US phone number checker</quote>"
}