const name = document.getElementById("playerName");
const name01 = document.getElementById("playerName01");

window.addEventListener("load", () => {
  name.innerText = ", " + myStorage.getItem("playerName") + ",";
  name01.innerText = myStorage.getItem("playerName");
});
