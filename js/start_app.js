import { needRefined, askStudent, good } from "./funtions.js";
import { copyBuffer } from "./helpers/secondary_func.js";
import { checkDataTime } from "./helpers/secondary_func.js";

const changeFunc = () => {
  const nameFunc = prompt("Введіть функцію");
  let result = "";
  switch (nameFunc) {
    case "a":
      //? Потррібно допрацювати
      result = needRefined();
      break;
    case "s":
      //? Питання до студента
      result = askStudent();
      break;

    //? Вірна відповідь
    case "d":
      result = good();
      break;

    default:
      break;
  }
  if (result === "") {
    return;
  } else {
    copyBuffer(result,changeFunc);
  }
};

changeFunc();
