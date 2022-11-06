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
// for(var i=0;i<8;i++){
div0.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div0.innerText = "O";
    console.log("yes");
  } else {
    div0.innerText = "X";
  }
  counter += 1;
  div0.disabled = true;
});

div1.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div1.innerText = "O";
    console.log("yes");
  } else {
    div1.innerText = "X";
  }
  counter += 1;
  div1.disabled = true;
});

div2.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div2.innerText = "O";
    console.log("yes");
  } else {
    div2.innerText = "X";
  }
  counter += 1;
  div2.disabled = true;
});

div3.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div3.innerText = "O";
    console.log("yes");
  } else {
    div3.innerText = "X";
  }
  counter += 1;
  div3.disabled = true;
});

div4.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div4.innerText = "O";
    console.log("yes");
  } else {
    div4.innerText = "X";
  }
  counter += 1;
  div4.disabled = true;
});

div5.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div5.innerText = "O";
    console.log("yes");
  } else {
    div5.innerText = "X";
  }
  counter += 1;
  div5.disabled = true;
});

div6.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div6.innerText = "O";
    console.log("yes");
  } else {
    div6.innerText = "X";
  }
  counter += 1;
  div6.disabled = true;
});

div7.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div7.innerText = "O";
    console.log("yes");
  } else {
    div7.innerText = "X";
  }
  counter += 1;
  div7.disabled = true;
});

div8.addEventListener("click", () => {
  if (counter % 2 == 0) {
    div8.innerText = "O";
    console.log("yes");
  } else {
    div8.innerText = "X";
  }
  counter += 1;
  div8.disabled = true;
});
