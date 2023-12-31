const rangeInput = document.querySelector(".pricing__progress input");
const pageViewsSpan = document.querySelector(
  ".pricing__resultBox p:first-child span"
);
const monthChargeSpan = document.querySelector(
  ".pricing__resultBox p:nth-child(2) span"
);

const monthlyBillingInput = document.querySelector(
  ".pricing__montlyBillingInput"
);
const monthlyBillingLabel = document.querySelector(
  ".pricing__montlyBillingLabel"
);
// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

rangeInput.style.background =
  "linear-gradient(.25turn, var(--SoftCyan) 0 50%, var(--LightGrayishBlueSlide) 50% 100%)";
rangeInput.addEventListener("input", (e) => {
  if (e.target.value === "0") {
    rangeInput.style.background =
      "linear-gradient(.25turn, var(--LightGrayishBlueSlide) 0% 100%)";
    pageViewsSpan.textContent = "10K";
    monthChargeSpan.textContent = "$8.00";
    monthlyBillingInput.checked = false;
  } else if (e.target.value === "25") {
    rangeInput.style.background =
      "linear-gradient(.25turn, var(--SoftCyan) 0 25%, var(--LightGrayishBlueSlide) 25% 100%)";
    pageViewsSpan.textContent = "50K";
    monthChargeSpan.textContent = "$12.00";
    monthlyBillingInput.checked = false;
  } else if (e.target.value === "50") {
    rangeInput.style.background =
      "linear-gradient(.25turn, var(--SoftCyan) 0 50%, var(--LightGrayishBlueSlide) 50% 100%)";
    pageViewsSpan.textContent = "100K";
    monthChargeSpan.textContent = "$16.00";
    monthlyBillingInput.checked = false;
  } else if (e.target.value === "75") {
    rangeInput.style.background =
      "linear-gradient(.25turn, var(--SoftCyan) 0 75%, var(--LightGrayishBlueSlide) 75% 100%)";

    pageViewsSpan.textContent = "500K";
    monthChargeSpan.textContent = "$24.00";
    monthlyBillingInput.checked = false;
  } else {
    rangeInput.style.background =
      "linear-gradient(.25turn, var(--SoftCyan) 0 100%, var(--LightGrayishBlueSlide) 100% 100%)";
    pageViewsSpan.textContent = "1M";
    monthChargeSpan.textContent = "$36.00";
    monthlyBillingInput.checked = false;
  }
});

let regularPrice;
monthlyBillingInput.addEventListener("click", (e) => {
  if (e.target.checked) {
    regularPrice = Number(monthChargeSpan.textContent.slice(1));
    monthChargeSpan.textContent = `$${(
      (Math.trunc(Number(monthChargeSpan.textContent.slice(1))) * 75) /
      100
    ).toFixed(2)}`;
  }

  if (!e.target.checked) {
    monthChargeSpan.textContent = `$${regularPrice.toFixed(2)}`;
  }
});
