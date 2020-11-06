const btn01 = document.getElementById("page0123btn");

btn01.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0123");
});

const btn02 = document.getElementById("page0120btn");

btn02.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0120");
});
