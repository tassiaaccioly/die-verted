const findCaseBtn = document.getElementById("casebutton");
const inputModal = document.getElementById("inputModal");
const inputRight = document.getElementById("inputRight");
const inputWrong = document.getElementById("inputWrong");

findCaseBtn.addEventListener("click", () => {
  let finalInput = document.getElementById("input01").value;
  if (finalInput === "1438") {
    inputModal.classList.toggle("notActive");
    inputModal.classList.toggle("isActive");
    inputRight.classList.toggle("isActive");
    inputRight.classList.toggle("notActive");
    setTimeout(() => {
      window.location.href = "./page-0428.html";
    }, 5000);
  } else {
    inputModal.classList.toggle("notActive");
    inputModal.classList.toggle("isActive");
    inputWrong.classList.toggle("isActive");
    inputWrong.classList.toggle("notActive");
    lookAroundBtn.classList.toggle("isActive");
    lookAroundBtn.classList.toggle("notActive");
  }
  document.getElementById("input01").value = "";
});

//buttons for path 7
const lookAroundBtn = document.getElementById("lookAround");
const friendBtn = document.getElementById("friendBtn");
const commBtn = document.getElementById("commBtn");
const wsBtn = document.getElementById("wsBtn");
const goback01 = document.getElementById("goback01");
const goback02 = document.getElementById("goback02");
const gotoarchive = document.getElementById("gotoarchive");

//divs for path 7
const pathSeven = document.getElementById("pathSeven");
const comm = document.getElementById("comm");
const colleague = document.getElementById("colleague");
const workstation = document.getElementById("workstation");

console.log(pathSeven);

lookAroundBtn.addEventListener("click", () => {
  inputWrong.classList.toggle("isActive");
  inputWrong.classList.toggle("notActive");
  lookAroundBtn.classList.toggle("isActive");
  lookAroundBtn.classList.toggle("notActive");
  pathSeven.classList.toggle("isActive");
  pathSeven.classList.toggle("notActive");
});

friendBtn.addEventListener("click", () => {
  pathSeven.classList.toggle("isActive");
  pathSeven.classList.toggle("notActive");
  colleague.classList.toggle("isActive");
  colleague.classList.toggle("notActive");
});

goback02.addEventListener("click", () => {
  colleague.classList.toggle("isActive");
  colleague.classList.toggle("notActive");
  pathSeven.classList.toggle("isActive");
  pathSeven.classList.toggle("notActive");
});

commBtn.addEventListener("click", () => {
  pathSeven.classList.toggle("isActive");
  pathSeven.classList.toggle("notActive");
  comm.classList.toggle("isActive");
  comm.classList.toggle("notActive");
});

goback01.addEventListener("click", () => {
  comm.classList.toggle("isActive");
  comm.classList.toggle("notActive");
  pathSeven.classList.toggle("isActive");
  pathSeven.classList.toggle("notActive");
});

wsBtn.addEventListener("click", () => {
  pathSeven.classList.toggle("isActive");
  pathSeven.classList.toggle("notActive");
  workstation.classList.toggle("isActive");
  workstation.classList.toggle("notActive");
});

gotoarchive.addEventListener("click", () => {
  workstation.classList.toggle("isActive");
  workstation.classList.toggle("notActive");
  inputModal.classList.toggle("isActive");
  inputModal.classList.toggle("notActive");
});
