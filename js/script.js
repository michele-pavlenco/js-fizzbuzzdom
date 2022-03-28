const app = document.getElementById("app");
let maxNum = 100;


for (let i = 1; i <= maxNum; i++) {
    
    if ((i % 3 === 0) && (i % 5 === 0 )){
        const numOf3n5 = document.createElement ("div");
         numOf3n5.innerHTML = "FizzBuzz" + i;
         app.append(numOf3n5);
         console.log(numOf3n5);
        }
    
    else if (i % 5 === 0){
        const numOf5 = document.createElement ("div");
        numOf5.innerHTML = "Buzz" + i ;
        app.append(numOf5);
        console.log(numOf5);
    }
    
    else if (i % 3 === 0) {
        const numOf3 = document.createElement("div");
        numOf3.innerHTML = "Fizz" + i ;
        app.append(numOf3);
        console.log(numOf3);
      } 
      else 
    //   app.append(i)
    //   console.log(i);
}

    
