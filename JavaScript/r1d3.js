function fearNotLetter(str) {
  let missing
  let c = str.charCodeAt()
  for(let l of Array.from(str)) {
    if(l.charCodeAt()!= c) {
      missing = String.fromCharCode(c)
      break
    }
    c++
  }
  return missing;
}

{
  let text = fearNotLetter("abcdefghijklmnopqrstuvwxyz")
  
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 3: ${text}</h4>`
  result.innerHTML += "<quote>Find missing letter</quote>"
}