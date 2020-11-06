const btn01 = document.getElementById("page0111btn");

btn01.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0111");
});

const btn02 = document.getElementById("page0106btn");

btn02.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0106");
});
