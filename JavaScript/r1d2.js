function pairElement(str) {
  const dict = {"A":["A", "T"],
               "T":["T", "A"],
               "C":["C", "G"],
               "G":["G","C"]}

  return str.split('').reduce((pairs, elem)=>{
      pairs.push(dict[elem])
      return pairs
    }, Array())
}

{
  let text = pairElement("GCG");
  
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 2: ${text}</h4>`
  result.innerHTML += "<quote>Create DNA pairs.</quote>"
}