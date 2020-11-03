let myStorage = window.localStorage;

localStorage.setItem("playerName", playerName);

console.log(playerName);
console.log(window.localStorage.detectiveName);

//get places we have input of player's named
const playerPage11 = document.getElementById("playerPage11");

window.addEventListener("load", () => {
  playerPage11.innerText = playerName;
});
