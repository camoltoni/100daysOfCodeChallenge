function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const obj = {name:"", orbitalPeriod:0.0}
  const a = arr[0].avgAlt + earthRadius
  obj.name = arr[0].name
  obj.orbitalPeriod = Math.round((Math.PI * 2) * Math.sqrt((a**3)/GM))
  console.log(obj)
  return [obj];
}

{

  let text = bob.getFullName()
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 14: ${text}</h4>`
  result.innerHTML += "<quote>Object manipulation</quote>"
}