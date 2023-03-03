function steamrollArray(arr) {
  const flat = [].concat(...arr)
  return flat.some(Array.isArray)?steamrollArray(flat):flat
}

{
  let text = steamrollArray([1, [2], [3, [[4]]]])
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 10: ${text}</h4>`
  result.innerHTML += "<quote>Flatten a multi dimensional array</quote>"
}