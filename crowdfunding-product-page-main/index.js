const noRewardCard = document.querySelector(".card1");
const noRewardCardRadioInput = document.querySelector(
  ".card1 input[type='radio']"
);
const BambooCard = document.querySelector(".card2");
const BambooCardRadioInput = document.querySelector(
  ".card2 input[type='radio']"
);
const BlackEditionCard = document.querySelector(".card3");
const BlackEditionCardRadioInput = document.querySelector(
  ".card3 input[type='radio']"
);
const hiddenBambooCard = document.querySelector(
  ".card2 .Crowdfunding__modalHiddenCard"
);
const hiddenBlackEditionCard = document.querySelector(
  ".card3 .Crowdfunding__modalHiddenCard"
);

const modalRemoveBtn = document.querySelector(".Crowdfunding__modal img");
const modalBackground = document.querySelector(".opacity-background");
const modal = document.querySelector(".Crowdfunding__modal");
const openModalBtn = document.querySelector(".Crowdfunding__supportBtn");

noRewardCard.addEventListener("click", () => {
  BlackEditionCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  BambooCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  BlackEditionCardRadioInput.removeAttribute("checked");
  BambooCardRadioInput.removeAttribute("checked");

  hiddenBambooCard.style.display = "none";
  hiddenBlackEditionCard.style.display = "none";
  noRewardCard.style.border = "1.8px solid hsl(176, 50%, 47%)";
  noRewardCardRadioInput.setAttribute("checked", "true");
});

BambooCard.addEventListener("click", () => {
  BlackEditionCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  noRewardCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  BlackEditionCardRadioInput.removeAttribute("checked");
  noRewardCardRadioInput.removeAttribute("checked");

  hiddenBlackEditionCard.style.display = "none";
  hiddenBambooCard.style.display = "flex";
  BambooCard.style.border = "1.8px solid hsl(176, 50%, 47%)";
  BambooCardRadioInput.setAttribute("checked", "true");
});

BlackEditionCard.addEventListener("click", () => {
  BambooCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  noRewardCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  BambooCardRadioInput.removeAttribute("checked");
  noRewardCardRadioInput.removeAttribute("checked");

  hiddenBambooCard.style.display = "none";
  hiddenBlackEditionCard.style.display = "flex";
  BlackEditionCard.style.border = "1.8px solid hsl(176, 50%, 47%)";
  BlackEditionCardRadioInput.setAttribute("checked", "true");
});

modalRemoveBtn.addEventListener("click", () => {
  modalBackground.style.display = "none";
  modal.style.display = "none";
});

openModalBtn.addEventListener("click", () => {
  BambooCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  noRewardCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  BlackEditionCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  BambooCardRadioInput.removeAttribute("checked");
  noRewardCardRadioInput.removeAttribute("checked");
  BlackEditionCardRadioInput.removeAttribute("checked");
  hiddenBambooCard.style.display = "none";
  hiddenBlackEditionCard.style.display = "none";
  modalBackground.style.display = "block";
  modal.style.display = "block";
});
