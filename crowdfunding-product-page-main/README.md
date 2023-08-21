# Frontend Mentor - Crowdfunding product page

![Design preview for the Crowdfunding product page coding challenge](./design/desktop-preview.jpg)

## 피드백

- progress element의 경우
  style하기 위해서는 selector를 progress[value]로 설정한 후
  appearance:none 으로 default styling은 reset하고
  progress[value]::-webkit-progress-bar (전체 bar) or
  progress[value]::-webkit-progress-value (value bar)
  의 selector를 활용해서 styling한다.

-setAttribute를 통해 radio input의 checked attribute를 설정하고
removeAttribute를 통해 checked attribute를 제거한다.
단순히 checked를 true/false하는 것으로는 의도한데로 작동하지 않는다.

-svg를 styling할 때,
svg 구조를 자세히 보면 circle, path 등이 있다.
css를 활용해서 수정할 수 있는 property들이 있으니 참고하자.
또한 fill을 통해 색을 바꿀 때도, svg안에 있는 element를 선택해서 fill을
적용해줘야 원하는 결과가 나온다.

-form안의 input의 value의 흔적을 지우고 싶다면,
value에 null 값을 부여하면 된다.
