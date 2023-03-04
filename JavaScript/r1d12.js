function truthCheck(collection, pre) {
  return pre;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")

{
  let text = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 11: ${text}</h4>`
  result.innerHTML += "<quote>Decode a string of binary numbers into a character string</quote>"
}