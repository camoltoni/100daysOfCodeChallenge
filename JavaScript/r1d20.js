function checkCashRegister(price, cash, cid) {
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
  let change = {status: "OPEN", change: []}
  for(let v of cid.reverse()) {
    if(v[2] <= diff && v[1] > 0) {
        console.log(diff)
        let quantity = parseFloat((Math.floor(diff/v[2])) * v[2])
        let changeMoney = Math.min(quantity, v[1])
        if(changeMoney > 0){
          change.change.push([v[0], changeMoney])
        }
        diff = parseFloat((diff - changeMoney).toFixed(2))
        if(!diff) break
    }
  }
  if(diff > 0) return {status: "INSUFFICIENT_FUNDS", change: []}
  return change
}

{

  let text = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 20: ${text.change}</h4>`
  result.innerHTML += "<quote>Cash register drawer.</quote>"
}