const app = document.getElementById("app");
let maxNum = 100;
let i = 1
for (let i = 1; i <= maxNum; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    const numOf3n5 = document.createElement("div");
    numOf3n5.setAttribute("class", "n-of-3n5")
    numOf3n5.innerHTML = "FizzBuzz"  ;
    app.append(numOf3n5);
    console.log(numOf3n5);
  } else if (i % 5 === 0) {
    const numOf5 = document.createElement("div");
    numOf5.setAttribute("class", "n-of-3")
    numOf5.innerHTML = "Buzz"  ;
    app.append(numOf5);
    console.log(numOf5);

  } else if (i % 3 === 0) {
    const numOf3 = document.createElement("div");
    numOf3.setAttribute("class", "n-of-5")
    numOf3.innerHTML = "Fizz" ;
    app.append(numOf3);
    console.log(numOf3);
  } else {
     document.createElement ("div")
    i.innerHTML =  i
    app.append(i);
    console.log(i);
  }
}
