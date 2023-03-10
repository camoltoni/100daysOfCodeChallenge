function rot13(str) {
  const codeA = "A".charCodeAt(0)
  const codeZ = "Z".charCodeAt(0)
  return str.split("").map((l) => {
    if (l.match(/[A-Z]/)) {
      let char13 = l.charCodeAt(0) + 13
      if (char13 > codeZ)
        char13 = codeA + char13 % codeZ - 1
      l = String.fromCharCode(char13)
    }
    return l
  }).join("")
}

{

  let text = rot13("SERR PBQR PNZC")
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 18: ${text}</h4>`
  result.innerHTML += "<quote>Decode Caesars Cipher ROT13 encrypted strings</quote>"
}