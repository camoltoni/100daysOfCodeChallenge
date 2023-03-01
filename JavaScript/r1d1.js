function myReplace(str, before, after) {
  let index = str.toLowerCase().indexOf(before.toLowerCase())
  let word = str.slice(index, index + before.length)
  if(word[0] == word[0].toUpperCase())
    after = after[0].toUpperCase() + after.slice(1)
  
  return str.slice(0, index) + after + str.slice(index + before.length)
}

{
  let text = myReplace("His name is Tom", "Tom", "john")
  let result = document.getElementById("result")
  result.innerHTML = `<h4>Day 1: ${text}</h4>`
  result.innerHTML += "<quote>Description: replace with upper lowercase</quote>"
}