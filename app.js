const div0 = document.getElementById("div0");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const div7 = document.getElementById("div7");
const div8 = document.getElementById("div8");
const msgBox = document.getElementById("msgBox");
const WinningMsg = document.getElementById('winningMsg');

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

let WinningFlag = false;

function winningLogic() {
  // first "-----"" line streak
  if (
    div0.innerText !== "" &&
    div0.innerText == div1.innerText &&
    div1.innerText == div2.innerText
  ) {
    if (div0.innerText == "X") {
      console.log("X's wins");
      msgBox.style.display = "block";
      WinningMsg.innerText = "X's Wins";
      WinningFlag = true;
    } else {
      console.log("O's Wins");
      msgBox.style.display = "block";
      WinningMsg.innerText = "O's Wins";
      WinningFlag = true;
    }
  }
  // second "-----" line streak
  if (
    div3.innerText !== "" &&
    div3.innerText == div4.innerText &&
    div4.innerText == div5.innerText
  )
    if (div3.innerText == "X") {
      msgBox.style.display = "block";
      WinningMsg.innerText = "X's Wins";
      WinningFlag = true;
    } else {
      console.log("O's Wins");
      msgBox.style.display = "block";
      WinningMsg.innerText = "O's Wins";
      WinningFlag = true;
    }
  // third "-----" line streak
  if (
    div6.innerText !== "" &&
    div6.innerText == div7.innerText &&
    div7.innerText == div8.innerText
  )
    if (div6.innerText == "X") {
      msgBox.style.display = "block";
      WinningMsg.innerText = "X's Wins";
      WinningFlag = true;
    } else {
      console.log("O's Wins");
      msgBox.style.display = "block";
      WinningMsg.innerText = "O's Wins";
      WinningFlag = true;
    }
  // first Vertical line streak
  if (
    div0.innerText !== "" &&
    div0.innerText == div3.innerText &&
    div3.innerText == div6.innerText
  )
    if (div0.innerText == "X") {

      msgBox.style.display = "block";
      WinningMsg.innerText = "X's Wins";
      WinningFlag = true;

    } else {
      console.log("O's Wins");
      msgBox.style.display = "block";
      WinningMsg.innerText = "O's Wins";
      WinningFlag = true;

    }
  // second Vertical line streak
  if (
    div1.innerText !== "" &&
    div1.innerText == div4.innerText &&
    div4.innerText == div7.innerText
  )
    if (div1.innerText == "X") {

      msgBox.style.display = "block";
      msgBox.style.display = "flex"
      WinningMsg.innerText = "X's Wins";
      WinningFlag = true;

    } else {
      console.log("O's Wins");
      msgBox.style.display = "block";
      WinningMsg.innerText = "O's Wins";
      WinningFlag = true;
    }
  // Third Vertical line streak
  if (
    div2.innerText !== "" &&
    div2.innerText == div5.innerText &&
    div5.innerText == div8.innerText
  )
    if (div2.innerText == "X") {
      msgBox.style.display = "block";
      WinningMsg.innerText = "X's Wins";
      WinningFlag = true;
    } else {
      msgBox.style.display = "block";
      WinningMsg.innerText = "O's Wins";
      WinningFlag = true;
    }
  //Digonal(left to Right) Winning Streak
  if (
    div0.innerText !== "" &&
    div0.innerText == div4.innerText &&
    div4.innerText == div8.innerText
  )
    if (div0.innerText == "X") {
      WinningFlag = true;
      msgBox.style.display = "block";
      WinningMsg.innerText = "X's Wins";

    } else {
      msgBox.style.display = "block";
      WinningMsg.innerText = "O's Wins";
      WinningFlag = true;
    }
  //Digonal(Right to Left) Winning Streak
  if (
    div2.innerText !== "" &&
    div2.innerText == div4.innerText &&
    div4.innerText == div6.innerText
  )
    if (div2.innerText == "X") {
      console.log("X's wins");
      msgBox.style.display = "block";
      WinningMsg.innerText = "X's Wins";
      WinningFlag = true;

    } else {
      console.log("O's Wins");
      msgBox.style.display = "block";
      WinningMsg.innerText = "O's Wins";
      WinningFlag = true;
    }
  else {
    if (
      div0.innerText !== "" &&
      div1.innerText !== "" &&
      div2.innerText !== "" &&
      div3.innerText !== "" &&
      div4.innerText !== "" &&
      div5.innerText !== "" &&
      div6.innerText !== "" &&
      div7.innerText !== "" &&
      div8.innerText !== "" &&
      WinningFlag === true
      // console.log(WinningFlag)
    ) {
      console.log("Restart");
    } else if (
      div0.innerText !== "" &&
      div1.innerText !== "" &&
      div2.innerText !== "" &&
      div3.innerText !== "" &&
      div4.innerText !== "" &&
      div5.innerText !== "" &&
      div6.innerText !== "" &&
      div7.innerText !== "" &&
      div8.innerText !== "" &&
      WinningFlag == false
    ) {
      // console.log('niche')
      msgBox.style.display = "block";
      WinningMsg.innerText = "It's a Tie";
    }
  }
}

function restart(){
  window.location.reload();
}
