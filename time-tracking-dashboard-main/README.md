# Frontend Mentor - Time tracking dashboard

![Design preview for the Time tracking dashboard coding challenge](./design/desktop-preview.jpg)

## 피드백

- border-radius가 부모 el과 자식 el에 같은 value로 설정되있고
  부모 el을 relative로 자식을 absolute로 position을 지정하여
  자식이 부모의 el를 cover하고 부모 el에 overflow:hidden을 설정했을 때,
  부모border-radius부분이 자식 el에 의해서 완전히 덮히지 않고 조금 남아있다.
  왜 그럴까?

- filter로 color를 white로 바꾸는 법
  brightness(0%) 후 invert(1)
