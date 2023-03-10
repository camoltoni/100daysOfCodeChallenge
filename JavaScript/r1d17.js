function convertToRoman(num) {
  const romanNums = [ 
    {number:1000, letter:"M"},
    {number:500,letter:"D"},
    {number:100, letter:"C"},
    {number:50, letter:"L"},
    {number:10, letter:"X"},
    {number:5, letter:"V"},
    {number:1, letter:"I"}
  ]
  let remainder = num
  let romanNum = ""
  for(let i = 0; i < romanNums.length; i+=2) {
      const div = Math.floor(remainder/romanNums[i].number)
      switch(div){
        case 1:
        case 2:
        case 3:
          romanNum += romanNums[i].letter.repeat(div)
          break
        case 4:
          romanNum += romanNums[i].letter+romanNums[i-1].letter
          break
        case 5:
        case 6:
        case 7:
        case 8:
          romanNum += romanNums[i-1].letter+(romanNums[i].letter).repeat(div-5)
          break
        case 9:
          romanNum += romanNums[i].letter + romanNums[i-2].letter
          break
      }
    remainder = remainder % romanNums[i].number
  }
  return romanNum;
}



{

  let text = convertToRoman(3999)
  const msg = "mal"
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 17: ${text}</h4>`
  result.innerHTML += "<quote>Decimal to roman numbers converter</quote>"
}