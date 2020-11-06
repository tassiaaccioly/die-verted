const name = document.getElementById("playerName");

window.addEventListener("load", () => {
  name.innerText = ", " + myStorage.getItem("playerName") + ",";
});

const btn03 = document.getElementById("page0133btn");

btn03.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0133");
});

const btn04 = document.getElementById("page0134btn");

btn04.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0134");
});
