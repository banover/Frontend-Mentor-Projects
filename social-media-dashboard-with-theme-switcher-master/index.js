const darkModeBtn = document.querySelector(".dashBoard__btn input");
const subtitle = document.querySelector(".dashBoard__todayOverviewHeader");

let theme = "light";

darkModeBtn.addEventListener("change", () => {
  theme = theme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  theme === "dark"
    ? (subtitle.style.color = "var(--primaryTextColor)")
    : (subtitle.style.color = "var(--subTextColor");
});
