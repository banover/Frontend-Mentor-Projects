import jsonData from "./data.json" assert { type: "json" };

console.log(jsonData);
const chartBox = document.querySelector(".expensesChart__chart");

const amountArray = jsonData.map((data) => data.amount);
const MaxValue = Math.max(...amountArray);
const targetIndex = amountArray.indexOf(MaxValue);
console.log(targetIndex);

jsonData.map((data, index) => {
  // const html = `
  // <div class="expensesChart__barGraphBox">
  //   <div class="expensesChart__barGraph"></div>
  //   <span class="expensesChart__barDate">${data.day}</span>
  // </div>`;
  const graphBox = document.createElement("div");
  graphBox.classList.add("expensesChart__barGraphBox");
  // const amoutview = document.createElement("span");
  // amoutview.classList.add("expensesChart__amountView");
  // amoutview.textContent = data.amount;
  const barGraph = document.createElement("div");
  barGraph.classList.add("expensesChart__barGraph");
  barGraph.style.height = `${data.amount * 2.7}px`;
  barGraph.style.backgroundColor =
    targetIndex === index ? "var(--cyan)" : "var(--softRed)";
  barGraph.setAttribute("data-content", "");

  // beforeBarGraph.style.content = `${data.amount}`;
  const date = document.createElement("span");
  date.classList.add("expensesChart__barDate");
  date.textContent = data.day;
  graphBox.append(barGraph, date);
  chartBox.appendChild(graphBox);

  console.log(barGraph);
  // const beforeBarGraph = document.querySelector(".expensesChart__barGraph");
  // beforeBarGraph
  // console.log(beforeBarGraph);
  // beforeBarGraph.style.setProperty("--content", "77");
  // beforeBarGraph.style.setProperty("--content", `\$${data.amount}`);
});

const allGraph = document.querySelectorAll(".expensesChart__barGraph");
allGraph.forEach((el, i) => {
  el.setAttribute("data-content", `\$${amountArray[i]}`);
});

// const allGraph = document.querySelectorAll(".expensesChart__barGraph");
allGraph.forEach((el, i) => {
  el.addEventListener("mouseover", () => {
    el.style.backgroundColor =
      targetIndex === i ? "hsl(186, 34%, 60%, 0.6)" : "hsl(10, 79%, 65%, 0.6)";
  });
});

allGraph.forEach((el, i) => {
  el.addEventListener("mouseleave", () => {
    el.style.backgroundColor =
      targetIndex === i ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)";
  });
});
