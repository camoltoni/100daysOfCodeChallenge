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
  };
  this.setFirstName = function(first) {
    let tempFirstAndLast = firstAndLast.split(" ")
    tempFirstAndLast[0] = first
    console.table(tempFirstAndLast)
    firstAndLast = tempFirstAndLast.join(" ")
  };
  this.setLastName = function(last) {
    let tempFirstAndLast = firstAndLast.split(" ")
    tempFirstAndLast[1] = last
    firstAndLast = tempFirstAndLast.join(" ")
  };
  return firstAndLast;
};

const bob = new Person('Bob Ross')
console.log(bob.getLastName())
bob.setFirstName("Haskell")
console.log(bob.getFirstName())

{
  let text = addTogether(2)(3)
  let result = document.getElementById("result")
  result.innerHTML += `<h4>Day 13: ${text}</h4>`
  result.innerHTML += "<quote>Function that sums two arguments or return a function if one argument is provided</quote>"
}