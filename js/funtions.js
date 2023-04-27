import { DEADLINE } from "./helpers/constants.js";
import { addMessage,addMistake, workPower } from "./helpers/secondary_func.js";
import { checkDataTime } from "./helpers/secondary_func.js";
export const needRefined = () => {

  return `
${checkDataTime()}\n
${workPower()}
${addMistake()}
${addMessage(DEADLINE)}\n
Потрібно допрацювати і  відпавити знову. Буду очікувати на допрацьований варіант.\n
    `;
};
export const askStudent = () => {
  return `
  ${checkDataTime()}\n
Сьогодні будете на консультації?\n

        `;
};

export const good = () => {
  let result = `${checkDataTime()}\n
Все вірно виконали.\n
${addMessage(DEADLINE)}\n
${addMessage("Написати додаткове повідомлення?")}\n
`;
  return result;
};
