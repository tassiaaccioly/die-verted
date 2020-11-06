const btn01 = document.getElementById("page0110btn");

btn01.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0110");
});

const btn02 = document.getElementById("page0112btn");

btn02.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0112");
});
