function checkCashRegister(price, cash, cid) {
  const responses = new Map()
  responses["insufficient"] = {status: "INSUFFICIENT_FUNDS", change: []}
  responses["open"] = {status: "OPEN", change: []}
  responses["closed"] = {status: "CLOSED", change: []}
  function sumCid() {
    return parseFloat(cid.reduce((a, e)=>a+=e[1], 0).toFixed(2))
  }
  function extendCid() {
    const amounts = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100]
    cid = cid.map((e, i)=>[e[0], e[1], amounts[i], parseInt(e[1] / amounts[i])])
  }
  let diff = cash - price;
  const sum = sumCid()
  if(sum < diff) return {status: "INSUFFICIENT_FUNDS", change: []}
  if(sum === diff) {
    let resp = {status: "CLOSED", change: []}
    resp.change = cid
    return resp
  }
  extendCid()
  let change = diff
  for(let v in cid.reverse()) {
    if(v[2] < diff && v[1] > 0) {
      quantity = 0;
    }
  }
  return change
}

{

  let text = checkCashRegister(19.5, 19.5+335.41, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  console.table(text)
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 19: ${text}</h4>`
  result.innerHTML += "<quote>US phone number checker</quote>"
}