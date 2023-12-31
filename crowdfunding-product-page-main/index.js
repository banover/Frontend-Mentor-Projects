let TOTAL_BACKED_MOUNT = 89914;
let TOTAL_BACKED_PERSON = 5007;

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
const AllopenModalBtn = document.querySelectorAll(".Crowdfunding__supportBtn");
const allModalContinueBtn = document.querySelectorAll(
  ".Crowdfunding__modalHiddenCard button"
);
const completeModalCheckBtn = document.querySelector(
  ".Crowdfunding__completedModalCard button"
);
const completeModal = document.querySelector(
  ".Crowdfunding__completedModalCard"
);
const AllbookmarkBtn = document.querySelectorAll(".Crowdfunding__bookmarkBtn");

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
const Allbookmarksvg = document.querySelectorAll(
  ".Crowdfunding__bookmarkImgBox svg"
);

const allBackedInput = document.querySelectorAll(
  ".Crowdfunding__modalHiddenCard input"
);

const allModalForm = document.querySelectorAll(
  ".Crowdfunding__modalHiddenBtnBox form"
);
const supportingBackedMount = document.querySelector(
  ".Crowdfunding__supportingMoney"
);
const totalBackedPerson = document.querySelector(
  ".Crowdfunding__supportingBackers"
);

const targetBarElement = document.querySelector(
  ".Crowdfunding__targetBarBox progress"
);

const mobileMenuBtn = document.querySelector(".Crowdfunding__mobileMenu");
const mobileMenuList = document.querySelector(".Crowdfunding__mobileMenuBar");

targetBarElement.value = (TOTAL_BACKED_MOUNT / 100000) * 100;

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

AllopenModalBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    BambooCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
    noRewardCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
    BlackEditionCard.style.border = "1.8px solid rgb(0, 0, 0, 0.1)";
    BambooCardRadioInput.removeAttribute("checked");
    noRewardCardRadioInput.removeAttribute("checked");
    BlackEditionCardRadioInput.removeAttribute("checked");
    allBackedInput.forEach((input) => (input.value = null));
    hiddenBambooCard.style.display = "none";
    hiddenBlackEditionCard.style.display = "none";
    hiddenNoRewardCard.style.display = "none";
    modalBackground.style.display = "block";
    modal.style.display = "block";
  })
);

allModalForm.forEach((form) =>
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputBackedMount = e.target[0].value
      ? e.target[0].value
      : e.target[0].placeholder;

    TOTAL_BACKED_MOUNT += inputBackedMount ? Number(inputBackedMount) : 0;
    TOTAL_BACKED_PERSON++;

    supportingBackedMount.textContent = `$${TOTAL_BACKED_MOUNT.toLocaleString(
      "en-US"
    )}`;
    totalBackedPerson.textContent = `${TOTAL_BACKED_PERSON.toLocaleString(
      "en-US"
    )}`;
    targetBarElement.value = (TOTAL_BACKED_MOUNT / 100000) * 100;

    modal.style.display = "none";
    completeModal.style.display = "flex";
    completeModal.scrollIntoView({ behavior: "smooth", block: "center" });
  })
);

completeModalCheckBtn.addEventListener("click", () => {
  modalBackground.style.display = "none";
  completeModal.style.display = "none";
});

AllbookmarkBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    bookmarkBtnElement.textContent =
      bookmarkBtnElement.textContent === "Bookmark" ? "Bookmarked" : "Bookmark";
    Allbookmarksvg.forEach((svg) => svg.classList.toggle("--bookmarkActive"));
    bookmarkBtnElement.classList.toggle("--bookmarkActive");
  })
);

let mobileMenuOpened = false;
mobileMenuBtn.addEventListener("click", () => {
  if (mobileMenuOpened) {
    mobileMenuOpened = false;
    mobileMenuBtn.setAttribute("src", "./images/icon-hamburger.svg");
    modalBackground.style.display = "none";
    mobileMenuList.style.display = "none";
  } else {
    mobileMenuOpened = true;
    mobileMenuBtn.setAttribute("src", "./images/icon-close-menu.svg");
    mobileMenuBtn.style.zIndex = "99";
    modalBackground.style.display = "block";
    mobileMenuList.style.display = "block";
  }
});
