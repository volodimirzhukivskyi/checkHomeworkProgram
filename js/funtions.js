import { DEADLINE } from "./helpers/constants.js";
import { addMessage,addMistake } from "./helpers/secondary_func.js";
export const needRefined = () => {

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

export const good = () => {
  let result = `Доброго вечора/дня.
Все вірно виконали.
${addMessage(DEADLINE)}
${addMessage("Написати додаткове повідомлення?")}
`;
  return result;
};
