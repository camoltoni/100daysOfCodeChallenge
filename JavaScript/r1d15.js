function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  return arr.map((elem)=>{
    const a = elem.avgAlt + earthRadius
    return {name:elem.name, orbitalPeriod:Math.round((Math.PI * 2) * Math.sqrt((a**3)/GM))}
  });
}

{

  let text = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])
  console.table(text)
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 15: ${text}</h4>`
  result.innerHTML += "<quote>Calculate orbital period in seconds</quote>"
}