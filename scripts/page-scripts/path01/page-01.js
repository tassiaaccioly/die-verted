const btn02 = document.getElementById("page-02btn");

btn02.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page02btn");
});

const btn03 = document.getElementById("page-03btn");

btn03.addEventListener("click", () => {
  pageStorage.pushArrayItem("pageArr", "page03btn");
});
