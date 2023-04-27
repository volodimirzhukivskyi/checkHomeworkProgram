import { DEADLINE } from "./constants.js";
export const addMessage = (text) => {
  const additionalMessage = confirm(text);
  let message = "\n";
  if (text === DEADLINE) {
    const changeMessage = DEADLINE.replace("?", ".");
    message = additionalMessage ? changeMessage : "";
  } else {
    message = additionalMessage ? (message += prompt("повідомлення")) : "";
  }

  return message;
};
export const addMistake = () => {
  let counter = 1;
  let result = "";

  while (true) {
    let mistake = prompt("Введіть помилку.");
    if (mistake === "") {
      break;
    }
    result += `\t ${counter}. ${mistake};\n`;
    counter++;
  }
  return result;
};
export function copyBuffer(addMessage) {
  navigator.clipboard
    .writeText(addMessage)
    .then(() => console.log("Текст скопирован в буфер обмена"))
    .catch((err) => console.error("Не удалось скопировать текст: ", err));
}
export function workPower() {
  const power = confirm("Студент гарно потрудився над завданням? ");
  return power
    ? `Доброго вечора/дня.\n
    Майже все виконали вірно.\n
    Є не величкі помилки:\n`
    : `Доброго дня.\n
  Гарно потрудилися. Э певні зауваження:\n`;
}
export function checkDataTime() {
  const hours = new Date().getHours();
  const boolData = (num1, num2) => {
    return hours >= num1 && hours <= num2;
  };

  if (boolData(21, 5)) {
    return "Доброго вечора!";
  } else if (boolData(6, 10)) {
    return "Доброго ранку!";
  } else {
    return "Доброго дня!";
  }
}
