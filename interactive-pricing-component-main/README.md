# Frontend Mentor - Interactive pricing component

![Design preview for the Interactive pricing component coding challenge](./design/desktop-preview.jpg)

## 피드백

- input type="range"와 thumb을 styling할 때,
  중요한 것은 브라우저간 호환성이다. 따라서 좀 번거롭다.
  기본 styling을 appearance를 none으로 하고,
  thumb과 track을 별도로 꾸밀 수 있지만,
  track같은 경우는 thumb의 left side와 right side를 꾸밀 수단이 없다.
  오히려 track을 styling함으로써 기존 input을 styling해도 적용이 되지 않는다.
  ms의 경우 fill-lower, fill-upper가 있어서 styling이 편하지만 나머지는 그렇지 않다. 조금 더 조사가 필요하다.
  번접하면 그냥 input을 다 appearance를 none으로 해서 기본 styliing을 다 지우고
  새로운 styling을 덮어쓰는 방식으로 사용하자. (조사 더 필요함)

- range의 thumb이 drag할 때 styling하고 싶으면
  :active를 활용해서 css로 styling할 수 있다.

## The challenge

Your challenge is to build out this interactive pricing component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers (details provided below)

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

### Page view and pricing totals

Here are the different page view ranges and the corresponding monthly price totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
