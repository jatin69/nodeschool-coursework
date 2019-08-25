/*
Closure example
*/

function updateSalary(currentSalary) {
    const a = function() {
      currentSalary += 100;
      return currentSalary;
    }
    return a;
}

myfunc = updateSalary(100);
console.log(myfunc());
console.log(myfunc());