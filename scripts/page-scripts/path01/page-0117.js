const btn01 = document.getElementById("page0132btn");

btn01.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0132");
});

const btn02 = document.getElementById("page0124btn");

btn02.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0124");
});
