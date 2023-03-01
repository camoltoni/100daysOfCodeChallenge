function convertHTML(str) {
  // create a new div element
  const ents = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }
  return str.split("").map(elem => ents[elem] || elem).join("")
}



{
  let text = convertHTML("Schindler's List");
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 5: ${text}</h4>`
  result.innerHTML += "<quote>Replace special characters to HTML entities</quote>"
}