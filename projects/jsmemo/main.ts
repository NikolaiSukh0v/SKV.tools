import topicsJson from "./data/Topic.json";
import { appendTooltip } from "./components/Tooltip";

console.log("jsmemo initialized");
let topicsArr = [];
topicsJson.forEach((e) => {
  topicsArr.push(e);
});
let currentlyOpened = false;
const themeBlocks = document.querySelectorAll(".theme-block");
let currentTopic;
let currentlyOpenIndex = 0;
let lastBlock = null;

function closeMenusBeforeOpen() {
  ///find active selectors with open class, close them, then open new one
  //
  if (currentlyOpened && currentlyOpenIndex > 0) {
    if (lastBlock && lastBlock !== currentTopic) {
      let LastBLockId = lastBlock;
      let closeLastTopicBlock = document
        .querySelector(`.Selected-topic-${LastBLockId}`)
        ?.classList.toggle("open");
    }
  }
}
// let activeState = false;
// themeBlocks.forEach((e) => {
//   e.addEventListener("mouseenter", () => {
//     activeState = true;
//     document
//       .querySelectorAll(`.tooltip-wrapper:not([data-topic="${e.id}"])`)
//       .forEach((t) => t.remove());
//     openTooltipHover(e.id);
//   });
// });
// function openTooltipHover(id) {
//   let currentTopicToolTip = id;
//   let currentToolTipMethods;
//   appendTooltip(currentTopicToolTip);
// }

const arrows = document.querySelectorAll(".arrow");
function selectTopic(e) {
  currentlyOpened = true;
  currentlyOpenIndex = 1;
  currentTopic = e.id;
  closeMenusBeforeOpen();
  e.classList.toggle("open");
  appendTooltip(e.id);
  e.querySelector(".arrow")?.classList.toggle("open");
  const topicData = topicsArr.find((i) => i.id === currentTopic);
  topics.innerHTML = "";
  topics?.append(topicData.label);
  lastBlock = e.id;
  let openAdditionalInfo = document
    .querySelector(".additionalInfo")
    ?.classList.add("open");
}
const topics = document.querySelector(".Topic");
themeBlocks.forEach((e) => {
  e.addEventListener("click", () => {
    selectTopic(e);
  });
});
