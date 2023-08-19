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

## The challenge

Your challenge is to build out this crowdfunding product page and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Make a selection of which pledge to make
- See an updated progress bar and total money raised based on their pledge total after confirming a pledge
- See the number of total backers increment by one after confirming a pledge
- Toggle whether or not the product is bookmarked

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.
