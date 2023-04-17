
// d4
function d4Roll(){
  const d4Result = Math.floor(Math.random()*4 +1);
  const addValue = document.getElementById('addValue').value;
  const addDice = document.getElementById('addDice').value;
  const diceMultiplier = Math.floor(Math.random()*4*addDice + 1);

  if (diceMultiplier < addDice) {
    diceMultiplier = addDice;
  }else if(addValue === "0" && addDice === "1") {
    document.getElementById('display').innerHTML = addDice + "d4" + " = " + d4Result
  }else if(addValue !== "0" && addDice === "1"){
    document.getElementById('display').innerHTML = addDice + "d4" + " + " + parseInt(addValue) + 
    " = " + (d4Result + parseInt(addValue)) 
  }else if(addDice !== "1" && addValue === "0") {
    document.getElementById('display').innerHTML = addDice + "d4" +
    " = " + (diceMultiplier + parseInt(addValue));
  }else if(addDice !== "1" && addValue !== "0"){
    document.getElementById('display').innerHTML = addDice + "d4" + " + " + parseInt(addValue) +
    " = " + (diceMultiplier + parseInt(addValue));
  }
}

// d6  
function d6Roll(){
  const d6Result = Math.floor(Math.random()*6 +1);
  const addValue = document.getElementById('addValue').value;
  const addDice = document.getElementById('addDice').value;
  const diceMultiplier = Math.floor(Math.random()*6*addDice + 1);

  if (diceMultiplier < addDice) {
    diceMultiplier = addDice;
  }else if(addValue === "0" && addDice === "1") {
    document.getElementById('display').innerHTML = addDice + "d6" + " = " + d6Result
  }else if(addValue !== "0" && addDice === "1"){
    document.getElementById('display').innerHTML = addDice + "d6" + " + " + parseInt(addValue) + 
    " = " + (d6Result + parseInt(addValue)) 
  }else if(addDice !== "1" && addValue === "0") {
    document.getElementById('display').innerHTML = addDice + "d6" +
    " = " + (diceMultiplier + parseInt(addValue));
  }else if(addDice !== "1" && addValue !== "0"){
    document.getElementById('display').innerHTML = addDice + "d6" + " + " + parseInt(addValue) +
    " = " + (diceMultiplier + parseInt(addValue));
  }
}
// d8
function d8Roll(){
  const d8Result = Math.floor(Math.random()*8 +1);
  const addValue = document.getElementById('addValue').value;
  const addDice = document.getElementById('addDice').value;
  const diceMultiplier = Math.floor(Math.random()*8*addDice + 1);

  if (diceMultiplier < addDice) {
    diceMultiplier = addDice;
  }else if(addValue === "0" && addDice === "1") {
    document.getElementById('display').innerHTML = addDice + "d8" + " = " + d8Result
  }else if(addValue !== "0" && addDice === "1"){
    document.getElementById('display').innerHTML = addDice + "d8" + " + " + parseInt(addValue) + 
    " = " + (d8Result + parseInt(addValue)) 
  }else if(addDice !== "1" && addValue === "0") {
    document.getElementById('display').innerHTML = addDice + "d8" +
    " = " + (diceMultiplier + parseInt(addValue));
  }else if(addDice !== "1" && addValue !== "0"){
    document.getElementById('display').innerHTML = addDice + "d8" + " + " + parseInt(addValue) +
    " = " + (diceMultiplier + parseInt(addValue));
  }
}

// d10 
function d10Roll(){
  const d10Result = Math.floor(Math.random()*10 +1);
  const addValue = document.getElementById('addValue').value;
  const addDice = document.getElementById('addDice').value;
  const diceMultiplier = Math.floor(Math.random()*10*addDice + 1);

  if (diceMultiplier < addDice) {
    diceMultiplier = addDice;
  }else if(addValue === "0" && addDice === "1") {
    document.getElementById('display').innerHTML = addDice + "d10" + " = " + d10Result
  }else if(addValue !== "0" && addDice === "1"){
    document.getElementById('display').innerHTML = addDice + "d10" + " + " + parseInt(addValue) + 
    " = " + (d10Result + parseInt(addValue)) 
  }else if(addDice !== "1" && addValue === "0") {
    document.getElementById('display').innerHTML = addDice + "d10" +
    " = " + (diceMultiplier + parseInt(addValue));
  }else if(addDice !== "1" && addValue !== "0"){
    document.getElementById('display').innerHTML = addDice + "d10" + " + " + parseInt(addValue) +
    " = " + (diceMultiplier + parseInt(addValue));
  }
}


// d12
function d12Roll(){
  const d12Result = Math.floor(Math.random()*12 +1);
  const addValue = document.getElementById('addValue').value;
  const addDice = document.getElementById('addDice').value;
  const diceMultiplier = Math.floor(Math.random()*12*addDice + 1);

  if (diceMultiplier < addDice) {
    diceMultiplier = addDice;
  }else if(addValue === "0" && addDice === "1") {
    document.getElementById('display').innerHTML = addDice + "d12" + " = " + d12Result
  }else if(addValue !== "0" && addDice === "1"){
    document.getElementById('display').innerHTML = addDice + "d12" + " + " + parseInt(addValue) + 
    " = " + (d12Result + parseInt(addValue)) 
  }else if(addDice !== "1" && addValue === "0") {
    document.getElementById('display').innerHTML = addDice + "d12" +
    " = " + (diceMultiplier + parseInt(addValue));
  }else if(addDice !== "1" && addValue !== "0"){
    document.getElementById('display').innerHTML = addDice + "d12" + " + " + parseInt(addValue) +
    " = " + (diceMultiplier + parseInt(addValue));
  }
}

// d20 
function d20Roll(){
  const d20Result = Math.floor(Math.random()*20 +1);
  const addValue = document.getElementById('addValue').value;
  const addDice = document.getElementById('addDice').value;
  const diceMultiplier = Math.floor(Math.random()*20*addDice + 1);

  if (diceMultiplier < addDice) {
    diceMultiplier = addDice;
  }else if(addValue === "0" && addDice === "1") {
    document.getElementById('display').innerHTML = addDice + "d20" + " = " + d20Result
  }else if(addValue !== "0" && addDice === "1"){
    document.getElementById('display').innerHTML = addDice + "d20" + " + " + parseInt(addValue) + 
    " = " + (d20Result + parseInt(addValue)) 
  }else if(addDice !== "1" && addValue === "0") {
    document.getElementById('display').innerHTML = addDice + "d20" +
    " = " + (diceMultiplier + parseInt(addValue));
  }else if(addDice !== "1" && addValue !== "0"){
    document.getElementById('display').innerHTML = addDice + "d20" + " + " + parseInt(addValue) +
    " = " + (diceMultiplier + parseInt(addValue));
  }
}

