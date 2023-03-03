function binaryAgent(str) {
  return str.split(" ").reduce((sentence, elem)=>{
    let dec = 0
    for(let i = 0; i < elem.length; i++) {
      dec += elem[i] * 2**(elem.length-1-i)
    }
    return sentence+=String.fromCharCode(dec)
  }, "")
}

{
  let text = binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 11: ${text}</h4>`
  result.innerHTML += "<quote>Decode a string of binary numbers into a character string</quote>"
}