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
    result += `${counter}. ${mistake};\n`;
    counter++;
  }
  return result;
};
