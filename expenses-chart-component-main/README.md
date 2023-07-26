# Frontend Mentor - Expenses chart component

![Design preview for the Expenses chart component coding challenge](./design/desktop-preview.jpg)

## 피드백

- external json file을 import하는 법 확인

- pseudo element를 select하지 못한다. DOM에 존재하지 않기 때문이다.
  꾸미는 trick이 있다.
  element에 data attribute를 설정해 놓고,
  해당 attribute를 수정할 때,
  css styling에서 attr(data attribute)를 활용해서 styling을 할 수 있다.
