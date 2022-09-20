let clear = document.getElementById("clear");
let display = document.getElementById("display");

// The job function is to clear the entry



clear.addEventListener("click", ()=>{
  display.value = "";
});


// The job of the function is to remove one by one

const backSpace = ()=>{
  const num = display.value.slice(0,-1);
  display.value = num;
};
function equal(){

  // document.calculator.display.value = eval(calculator.display.value);
  addToDo(document.calculator.display.value = eval(calculator.display.value));

}


function root(){

  // document.calculator.display.value = Math.sqrt(calculator.display.value);
  addToDo(document.calculator.display.value = Math.sqrt(calculator.display.value));
  
}
const results = JSON.parse(localStorage.getItem("results")) || [];
const addToDo = (result) =>{
  results.push({
    result
  });

  localStorage.setItem("results", JSON.stringify(results));
  
  return results;
  
};



let formContorol = document.querySelector('.main');
formContorol.onsubmit = e =>{
  e.preventDefault();
}