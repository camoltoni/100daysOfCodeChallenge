function uniteUnique(arr) {
  let union = []
  arguments = Array.from(arguments)
  arguments.reduce((union, elem)=>{
    elem.reduce((union, elem)=>{
      if(union.indexOf(elem)<0)
        union.push(elem)
        return union
    }, union)
    return union
  },union)
  return union
}

{
  let text = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 4: ${text}</h4>`
  result.innerHTML += "<quote>Get the sorted union of two or more arrays</quote>"
}