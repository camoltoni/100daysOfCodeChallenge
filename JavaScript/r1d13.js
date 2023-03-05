function addTogether() {
  if(Array.from(arguments).some((elem)=>typeof elem !== "number")) return undefined
  if(arguments.length === 2) {
    return arguments[0] + arguments[1]
  } else if(arguments.length === 1) return ((arg)=>addTogether(arg, arguments[0]))
}



{
  let text = addTogether(2)([3])
  console.log(text)
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 12: ${text}</h4>`
  result.innerHTML += "<quote>Check if a value is in all objects of a collection with truthy values</quote>"
}