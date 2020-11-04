nameBtn.addEventListener("click", () => {
  let player = document.getElementById("playerInput").value;
  playerName = player;
  myStorage.setItem("playerName", playerName);
  window.location.href = "../game-pages/page-01.html";
});
