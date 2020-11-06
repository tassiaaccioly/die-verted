const btn01 = document.getElementById("page0102btn");

btn01.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0102");
});

const btn02 = document.getElementById("page0112btn");

btn02.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0112");
});

const btn03 = document.getElementById("page0103btn");

btn03.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0103");
});

const btn04 = document.getElementById("page0114btn");

btn04.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0114");
});

const btn05 = document.getElementById("page0111btn");

btn05.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page0111");
});
