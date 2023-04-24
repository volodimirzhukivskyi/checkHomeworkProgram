import { needRefined, askStudent, good } from "./funtions.js";

const nameFunc = prompt("Введіть функцію");

const changeFunc = (nameFunc) => {
  switch (nameFunc) {
    case "need":
      return needRefined();
    case "ask":
      return askStudent();
    case "good":
      return good();
    default:
      break;
  }
};

console.log(changeFunc(nameFunc));
