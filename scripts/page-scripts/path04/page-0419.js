const findCaseBtn = document.getElementById("casebutton");
const inputModal = document.getElementById("inputModal");
const inputRight = document.getElementById("inputRight");
const inputWrong = document.getElementById("inputWrong");

//EXTRAS

const first = document.getElementById("200101");
const second = document.getElementById("200102");
const third = document.getElementById("200103");
const fourth = document.getElementById("200104");
const kubrick = document.getElementById("johnny");
const bakerstreet = document.getElementById("bakerstreet");
const lost = document.getElementById("lost");
const v = document.getElementById("v");
const hitchhiker = document.getElementById("hitchhiker");
const asimov01 = document.getElementById("asimov01");
const asimov02 = document.getElementById("asimov02");
const asimov03 = document.getElementById("asimov03");
const orwell = document.getElementById("orwell");

let heresjohnny = new Audio("../../images/heresjohnny.mp3");
let lostaudio = new Audio("../../images/lost.mp3");

//To change screens

findCaseBtn.addEventListener("click", () => {
  let finalInput = document.getElementById("input01").value;
  if (finalInput === "1438") {
    inputModal.classList.toggle("notActive");
    inputModal.classList.toggle("isActive");
    inputRight.classList.toggle("isActive");
    inputRight.classList.toggle("notActive");
    setTimeout(() => {
      pageStorage.pushArrayItem("pageArr", "page0428");
      window.location.href = "./page-0428.html";
    }, 5000);
  } else if (finalInput === "2001") {
    inputModal.classList.toggle("notActive");
    inputModal.classList.toggle("isActive");
    inputRight.classList.toggle("isActive");
    inputRight.classList.toggle("notActive");
    setTimeout(() => {
      inputRight.classList.toggle("isActive");
      inputRight.classList.toggle("notActive");
      first.classList.toggle("notActive");
      first.classList.toggle("isActive");
      setTimeout(() => {
        first.classList.toggle("notActive");
        first.classList.toggle("isActive");
        second.classList.toggle("isActive");
        second.classList.toggle("notActive");
        setTimeout(() => {
          second.classList.toggle("isActive");
          second.classList.toggle("notActive");
          third.classList.toggle("isActive");
          third.classList.toggle("notActive");
          setTimeout(() => {
            third.classList.toggle("isActive");
            third.classList.toggle("notActive");
            fourth.classList.toggle("isActive");
            fourth.classList.toggle("notActive");
            setTimeout(() => {
              fourth.classList.toggle("isActive");
              fourth.classList.toggle("notActive");
              inputModal.classList.toggle("notActive");
              inputModal.classList.toggle("isActive");
            }, 6500);
          }, 6000);
        }, 5500);
      }, 5000);
    }, 4000);
  } else if (finalInput === "0237" || finalInput === "237") {
    inputModal.classList.toggle("notActive");
    inputModal.classList.toggle("isActive");
    inputRight.classList.toggle("isActive");
    inputRight.classList.toggle("notActive");
    setTimeout(() => {
      inputRight.classList.toggle("isActive");
      inputRight.classList.toggle("notActive");
      kubrick.classList.toggle("isActive");
      kubrick.classList.toggle("notActive");
      heresjohnny.play();
      setTimeout(() => {
        kubrick.classList.toggle("isActive");
        kubrick.classList.toggle("notActive");
        inputModal.classList.toggle("notActive");
        inputModal.classList.toggle("isActive");
      }, 3500);
    }, 4000);
  } else if (finalInput === "221b" || finalInput === "221B") {
    inputModal.classList.toggle("notActive");
    inputModal.classList.toggle("isActive");
    inputRight.classList.toggle("isActive");
    inputRight.classList.toggle("notActive");
    setTimeout(() => {
      inputRight.classList.toggle("isActive");
      inputRight.classList.toggle("notActive");
      bakerstreet.classList.toggle("isActive");
      bakerstreet.classList.toggle("notActive");
      setTimeout(() => {
        bakerstreet.classList.toggle("isActive");
        bakerstreet.classList.toggle("notActive");
        inputModal.classList.toggle("notActive");
        inputModal.classList.toggle("isActive");
      }, 3000);
    }, 4000);
  } else if (
    finalInput === "lost" ||
    finalInput === "Lost" ||
    finalInput === "LOST"
  ) {
    inputModal.classList.toggle("notActive");
    inputModal.classList.toggle("isActive");
    inputRight.classList.toggle("isActive");
    inputRight.classList.toggle("notActive");
    setTimeout(() => {
      inputRight.classList.toggle("isActive");
      inputRight.classList.toggle("notActive");
      lost.classList.toggle("isActive");
      lost.classList.toggle("notActive");
      lostaudio.play();
      setTimeout(() => {
        lost.classList.toggle("isActive");
        lost.classList.toggle("notActive");
        inputModal.classList.toggle("notActive");
        inputModal.classList.toggle("isActive");
      }, 6000);
    }, 4000);
  } else if (
    finalInput === "0511" ||
    finalInput === "1105" ||
    finalInput === "1812"
  ) {
    inputModal.classList.toggle("notActive");
    inputModal.classList.toggle("isActive");
    inputRight.classList.toggle("isActive");
    inputRight.classList.toggle("notActive");
    setTimeout(() => {
      inputRight.classList.toggle("isActive");
      inputRight.classList.toggle("notActive");
      v.classList.toggle("isActive");
      v.classList.toggle("notActive");
      setTimeout(() => {
        v.classList.toggle("isActive");
        v.classList.toggle("notActive");
        inputModal.classList.toggle("notActive");
        inputModal.classList.toggle("isActive");
      }, 7000);
    }, 4000);
  } else if (
    finalInput === "42" ||
    finalInput === "0042" ||
    finalInput === "4200" ||
    finalInput === "0420"
  ) {
    inputModal.classList.toggle("notActive");
    inputModal.classList.toggle("isActive");
    inputRight.classList.toggle("isActive");
    inputRight.classList.toggle("notActive");
    setTimeout(() => {
      inputRight.classList.toggle("isActive");
      inputRight.classList.toggle("notActive");
      hitchhiker.classList.toggle("isActive");
      hitchhiker.classList.toggle("notActive");
      setTimeout(() => {
        hitchhiker.classList.toggle("isActive");
        hitchhiker.classList.toggle("notActive");
        inputModal.classList.toggle("notActive");
        inputModal.classList.toggle("isActive");
      }, 5000);
    }, 3000);
  } else if (finalInput === "0101" || finalInput === "1010") {
    inputModal.classList.toggle("notActive");
    inputModal.classList.toggle("isActive");
    inputRight.classList.toggle("isActive");
    inputRight.classList.toggle("notActive");
    setTimeout(() => {
      inputRight.classList.toggle("isActive");
      inputRight.classList.toggle("notActive");
      asimov01.classList.toggle("notActive");
      asimov01.classList.toggle("isActive");
      setTimeout(() => {
        asimov01.classList.toggle("notActive");
        asimov01.classList.toggle("isActive");
        asimov02.classList.toggle("isActive");
        asimov02.classList.toggle("notActive");
        setTimeout(() => {
          asimov02.classList.toggle("isActive");
          asimov02.classList.toggle("notActive");
          asimov03.classList.toggle("isActive");
          asimov03.classList.toggle("notActive");
          setTimeout(() => {
            asimov03.classList.toggle("isActive");
            asimov03.classList.toggle("notActive");
            inputModal.classList.toggle("isActive");
            inputModal.classList.toggle("notActive");
          }, 5500);
        }, 5500);
      }, 5500);
    }, 4000);
  } else if (
    finalInput === "1984" ||
    finalInput === "soma" ||
    finalInput === "SOMA"
  ) {
    inputModal.classList.toggle("notActive");
    inputModal.classList.toggle("isActive");
    inputRight.classList.toggle("isActive");
    inputRight.classList.toggle("notActive");
    setTimeout(() => {
      inputRight.classList.toggle("isActive");
      inputRight.classList.toggle("notActive");
      orwell.classList.toggle("isActive");
      orwell.classList.toggle("notActive");
      setTimeout(() => {
        orwell.classList.toggle("isActive");
        orwell.classList.toggle("notActive");
        inputModal.classList.toggle("notActive");
        inputModal.classList.toggle("isActive");
      }, 3000);
    }, 4000);
  } else {
    inputModal.classList.toggle("notActive");
    inputModal.classList.toggle("isActive");
    inputRight.classList.toggle("isActive");
    inputRight.classList.toggle("notActive");
    setTimeout(() => {
      inputRight.classList.toggle("isActive");
      inputRight.classList.toggle("notActive");
      inputWrong.classList.toggle("isActive");
      inputWrong.classList.toggle("notActive");
      lookAroundBtn.classList.toggle("isActive");
      lookAroundBtn.classList.toggle("notActive");
    }, 4000);
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
