function checkCashRegister(price, cash, cid) {
  /*const amounts = [{unit:"PENNY", amount:0.01},
                  {unit:"NICKEL", amount:0.05},
                  {unit:"DIME", amount:0.1},
                  {unit:"QUARTER", amount:0.25},
                  {unit:"DOLLAR", amount:1},
                  {unit:"FIVE", amount:5},
                  {unit:"TEN", amount:10},
                  {unit:"TWENTY", amount:20},
                  {unit:"ONE HUNDRED", amount:100}];*/
    const amounts = [["PENNY", 0.01],
                  ["NICKEL", 0.05],
                  ["DIME", 0.1],
                  ["QUARTER", 0.25],
                  ["DOLLAR", 1],
                  ["FIVE", 5],
                  ["TEN", 10],
                  ["TWENTY", 20],
                  ["ONE HUNDRED", 100}]]; 
  let diff = cash - price;
  let change;
  return change;
}

{

  let text = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  console.table(text)
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 19: ${text}</h4>`
  result.innerHTML += "<quote>US phone number checker</quote>"
}