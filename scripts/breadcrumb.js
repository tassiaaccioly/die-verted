let breadcrumb = [];

const btn02 = document.getElementById("page-02btn");

btn02.addEventListener("click", () => {
  breadcrumb.push("page-02btn");
});

const btn03 = document.getElementById("page-03btn");

btn03.addEventListener("click", () => {
  breadcrumb.push("page-03btn");
});

console.log(breadcrumb);
