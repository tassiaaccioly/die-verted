const name = document.getElementById("playerName");

window.addEventListener("load", () => {
  name.innerText = myStorage.getItem("playerName");
});
