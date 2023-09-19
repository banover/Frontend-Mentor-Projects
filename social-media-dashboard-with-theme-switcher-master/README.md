# Frontend Mentor - Social media dashboard with theme switcher

![Design preview for the Social media dashboard with theme switcher coding challenge](./design/desktop-preview.jpg)

## 피드백

- border로 linear-gradient 사용하고 싶을 때,
  background-image로 linear-gradient를 사용하고
  background-origin과 background-clip을 사용해서
  padding-box, border-box를 조절한다.
  이 스킬로 border-radius도 적용가능해진다.
  border-image-slice를 활용하는 방법도 있지만,
  border-radius적용이 힘들다.

- linear-gradient 적용이 된 element에 hover적용경우, linear-gradient 수정할 때 color에 opacity 적용되어 있으면 의도한대로 되지 않는다. color설정 주의하자!

- dark mode 만들 때, css variable을 활용해서 편하게 하자.
  document.documentElement로 html을 select해서 :root의 css variable을 변경하는 방법을 활용할 수 있다.
