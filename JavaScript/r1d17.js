function convertToRoman(num) {
  console.log(num%1000)
  console.log(num%500)
 return num;
}



{

  let text = convertToRoman(9990)

  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 17: ${text}</h4>`
  result.innerHTML += "<quote>Decimal to roman numbers converter</quote>"
}