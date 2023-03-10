function truthCheck(collection, pre) {
  return collection.reduce((truthy, obj)=> {
    if(typeof(obj[pre]) == "String") {
      if(obj[pre] == "true")
        obj[pre] = true
      else if(obj[pre] == "false")
        obj[pre] = false
    }
    return (obj[pre]?true:false) && truthy
  }, true)
}

{
  let text = truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "role")
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 12: ${text}</h4>`
  result.innerHTML += "<quote>Check if a value is in all objects of a collection with truthy values</quote>"
}