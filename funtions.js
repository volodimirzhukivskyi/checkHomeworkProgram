export const needRefined = () => {
  const addMistake = () => {
    let counter = 1;
    let result = "";

    while (true) {
      let mistake = prompt("Введыіть помилку.");
      if (mistake === "ок") {
        break;
      }
      result += `${counter}. ${mistake};\n`;
      counter++;
    }
    return result;
  };
  return `
Доброго дня.
Гарно потрудилися. Э певні зауваження:
${addMistake()}
Потрібно допрацювати і  відпавити знову. Буду очікувати на допрацьований варіант.
    `;
};
export const askStudent = () => {
  return `
Доброго дня.
Сьогодні будете на консультації?

        `;
};
function addMessage(text) {
  const additionalMessage  = confirm(text)
  let message = "\n";
  if(text ==="Пропустили деделайн?"){
    message=additionalMessage?"\nПропустили дедлайн.":""
  }else{
    message= additionalMessage?message+=prompt("повідомлення"):""
  }

   ;

  return message
}
export const good = () => {
  let result =
`Доброго вечора/дня.
Все вірно виконали.
${addMessage("Пропустили деделайн?")}
${addMessage("Пишете додаткове повідомлення?")}
`;
  return result;
};
