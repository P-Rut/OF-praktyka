import {
  ERROR_INVALID_INPUT,
  ERROR_INVALID_INTEGER,
  SUCCES_VALID_INTEGER,
} from './validation/mesasages';

import {
  isInputCorrect,
  changeValueToNumber,
  isValueInRange,
} from './validation/methods';
function validator() {
  const input = document.getElementById('input') as HTMLInputElement | null;
  const button = document.getElementById('button') as HTMLButtonElement | null;
  const button2 = document.getElementById(
    'button2'
  ) as HTMLButtonElement | null;
  const result = document.getElementById('result') as HTMLElement | null;

  if (!input || !button || !button2 || !result) {
    console.error('One or more required DOM elements are missing');
    return;
  }

  button.addEventListener('click', () => {
    const value = input.value;

    if (!isInputCorrect(value)) {
      const numericValue = changeValueToNumber(value);

      if (isValueInRange(numericValue, 0, 100) === true) {
        result.innerHTML = SUCCES_VALID_INTEGER;
      } else {
        result.innerHTML = ERROR_INVALID_INTEGER;
      }
    } else {
      result.innerHTML = ERROR_INVALID_INPUT;
    }
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
