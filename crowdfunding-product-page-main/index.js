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
const hiddenNoRewardCard = document.querySelector(
  ".card1 .Crowdfunding__modalHiddenCard"
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
const allModalContinueBtn = document.querySelectorAll(
  ".Crowdfunding__modalHiddenCard button"
);
const completeModalCheckBtn = document.querySelector(
  ".Crowdfunding__completedModalCard button"
);
const completeModal = document.querySelector(
  ".Crowdfunding__completedModalCard"
);
const bookmarkBtn = document.querySelector(".Crowdfunding__bookmarkBtn");

noRewardCard.addEventListener("click", () => {
  BlackEditionCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  BambooCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  BlackEditionCardRadioInput.removeAttribute("checked");
  BambooCardRadioInput.removeAttribute("checked");

  hiddenBambooCard.style.display = "none";
  hiddenBlackEditionCard.style.display = "none";
  hiddenNoRewardCard.style.display = "flex";
  noRewardCard.style.border = "1.8px solid hsl(176, 50%, 47%)";
  noRewardCardRadioInput.setAttribute("checked", "true");
});

BambooCard.addEventListener("click", () => {
  BlackEditionCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  noRewardCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
  BlackEditionCardRadioInput.removeAttribute("checked");
  noRewardCardRadioInput.removeAttribute("checked");

  hiddenNoRewardCard.style.display = "none";
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

  hiddenNoRewardCard.style.display = "none";
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
  hiddenNoRewardCard.style.display = "none";
  modalBackground.style.display = "block";
  modal.style.display = "block";
});

// 이벤트 위임으로 코드수정할 수 있다.
allModalContinueBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    modal.style.display = "none";
    completeModal.style.display = "flex";
  })
);

completeModalCheckBtn.addEventListener("click", () => {
  modalBackground.style.display = "none";
  completeModal.style.display = "none";
});

const bookmarkBtnElement = document.querySelector(
  ".Crowdfunding__bookmarkBtn button"
);
const bookmarkImgBoxElement = document.querySelector(
  ".Crowdfunding__bookmarkImgBox"
);
const bookmarkBackgroundImg = document.querySelector(
  ".Crowdfunding__bookmarkImgBox svg circle"
);
const bookmarkFlagImg = document.querySelector(
  ".Crowdfunding__bookmarkImgBox svg path"
);
const bookmarksvg = document.querySelector(".Crowdfunding__bookmarkImgBox svg");

bookmarkBtn.addEventListener("click", () => {
  bookmarkBtnElement.textContent =
    bookmarkBtnElement.textContent === "Bookmark" ? "Bookmarked" : "Bookmark";
  bookmarksvg.classList.toggle("--bookmarkActive");
  bookmarkBtnElement.classList.toggle("--bookmarkActive");
});
