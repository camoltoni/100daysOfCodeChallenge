function truthCheck(collection, pre) {
  return collection.reduce((truthy, obj)=> {
    console.log(obj[pre])
    if(typeof(obj[pre]) == "String") {
      if(obj[pre] == "true")
        obj[pre] = true
      else if(obj[pre] == "false")
        obj[pre] = false
    }
    console.log(obj[pre])
    return (obj[pre]?true:false) && truthy
  }, true)
}

{
  let text = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot")
  console.log(text)
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 11: ${text}</h4>`
  result.innerHTML += "<quote>Decode a string of binary numbers into a character string</quote>"
}