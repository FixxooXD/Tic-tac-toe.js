const div0 = document.getElementById("div0");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const div7 = document.getElementById("div7");
const div8 = document.getElementById("div8");

let counter = 1;
div0.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div0.innerText = "O";
    // console.log("yes");
  } else {
    div0.innerText = "X";
  }
  counter += 1;
  div0.disabled = true;
  winningLogic();
});

div1.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div1.innerText = "O";
    // console.log("yes");
  } else {
    div1.innerText = "X";
  }
  counter += 1;
  div1.disabled = true;
  winningLogic();
});

div2.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div2.innerText = "O";
    // console.log("yes");
  } else {
    div2.innerText = "X";
  }
  counter += 1;
  div2.disabled = true;
  winningLogic();
});

div3.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div3.innerText = "O";
    // console.log("yes");
  } else {
    div3.innerText = "X";
  }
  counter += 1;
  div3.disabled = true;
  winningLogic();
});

div4.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div4.innerText = "O";
    // console.log("yes");
  } else {
    div4.innerText = "X";
  }
  counter += 1;
  div4.disabled = true;
  winningLogic();
});

div5.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div5.innerText = "O";
    // console.log("yes");
  } else {
    div5.innerText = "X";
  }
  counter += 1;
  div5.disabled = true;
  winningLogic();
});

div6.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div6.innerText = "O";
    // console.log("yes");
  } else {
    div6.innerText = "X";
  }
  counter += 1;
  div6.disabled = true;
  winningLogic();
});

div7.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div7.innerText = "O";
    // console.log("yes");
  } else {
    div7.innerText = "X";
  }
  counter += 1;
  div7.disabled = true;
  winningLogic();
});

div8.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div8.innerText = "O";
    // console.log("yes");
  } else {
    div8.innerText = "X";
  }
  counter += 1;
  div8.disabled = true;
  winningLogic();
});

function winningLogic() {
  // first "-----"" line streak
  if (
    div0.innerText !== "" &&
    div0.innerText == div1.innerText &&
    div1.innerText == div2.innerText
  ) {
    console.log("yes");
  }
  // second "-----" line streak
  if (
    div3.innerText !== "" &&
    div3.innerText == div4.innerText &&
    div4.innerText == div5.innerText
  ) {
    console.log("yes");
  }
  // third "-----" line streak
  if (
    div6.innerText !== "" &&
    div6.innerText == div7.innerText &&
    div7.innerText == div8.innerText
  ) {
    console.log("yes");
  }
  // first Vertical line streak
  if (
    div0.innerText !== "" &&
    div0.innerText == div3.innerText &&
    div3.innerText == div6.innerText
  ) {
    console.log("yes");
  }
  // second Vertical line streak
  if (
    div1.innerText !== "" &&
    div1.innerText == div4.innerText &&
    div4.innerText == div7.innerText
  ) {
    console.log("yes");
  }
  // Third Vertical line streak
  if (
    div2.innerText !== "" &&
    div2.innerText == div5.innerText &&
    div5.innerText == div8.innerText
  ) {
    console.log("yes");
  }
  //Digonal(left to Right) Winning Streak
  if (
    div0.innerText !== "" &&
    div0.innerText == div4.innerText &&
    div4.innerText == div8.innerText
  ) {
    console.log("yes");
  }
  //Digonal(Right to Left) Winning Streak
  if (
    div2.innerText !== "" &&
    div2.innerText == div4.innerText &&
    div4.innerText == div6.innerText
  ) {
    console.log("yes");
  } else {
    if (
      div0.innerText !== "" &&
      div2.innerText !== "" &&
      div3.innerText !== "" &&
      div4.innerText !== "" &&
      div5.innerText !== "" &&
      div6.innerText !== "" &&
      div7.innerText !== "" &&
      div8.innerText !== ""
    ) {
      console.log("oppssss");
    }
  }
}
