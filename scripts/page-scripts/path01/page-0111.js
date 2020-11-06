const name = document.getElementById("playerName");
const name01 = document.getElementById("playerName01");

window.addEventListener("load", () => {
  name.innerText = ", " + myStorage.getItem("playerName") + ",";
  name01.innerText = myStorage.getItem("playerName");
});

const btn01 = document.getElementById("page0123btn");

btn01.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0123");
});

const btn02 = document.getElementById("page0121btn");

btn02.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0121");
});
