// Write your JavaScript code here!
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
  
  function calculateWeight(weight,planetName){
      for (let i=0; i < planets.length;i++){
          if(planets[i][0]==planetName){
          return weight* planets[i][1];
          }
      }
  };
  
  function handleClickEvent() {
let userWeight = document.getElementById('user-weight').value;
let selected= document.getElementById('planets');
  var planetName =selected.options[selected.selectedIndex].value;
 let result = calculateWeight(userWeight,planetName);
      document.getElementById('output').innerHTML='If you were on ' + planetName + ', you would weigh '+ result + 'lbs!';
  }