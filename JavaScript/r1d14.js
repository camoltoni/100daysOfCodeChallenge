const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFullName = function() {
    return firstAndLast;
  };
  this.getFirstName = function() {
    return firstAndLast.split(" ")[0]
  }
  this.getLastName = function() {
    return firstAndLast.split(" ")[1]
  }
  this.setFirstName = function(first) {
    let tempFirstAndLast = firstAndLast.split(" ")
    tempFirstAndLast[0] = first
    firstAndLast = tempFirstAndLast.join(" ")
  }
  this.setLastName = function(last) {
    let tempFirstAndLast = firstAndLast.split(" ")
    tempFirstAndLast[1] = last
    firstAndLast = tempFirstAndLast.join(" ")
  }
  this.setFullName = function(firstAndLast) {
    let tempFirstAndLast = firstAndLast.split(" ")
    this.setFirstName(tempFirstAndLast[0])
    this.setLastName(tempFirstAndLast[1])
  }
  return firstAndLast;
};

{
  const bob = new Person('Bob Ross')
  let text = bob.getFullName()
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 14: ${text}</h4>`
  result.innerHTML += "<quote>Object manipulation</quote>"
}