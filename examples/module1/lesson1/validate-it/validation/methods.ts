export function isInputEmpty(value: string): boolean {
  return value === '';
}

export function isInputCorrect(value: string): boolean {
  return isInputEmpty(value) || !Number.isNaN(Number(value));
}

export function isValueInRange(
  value: number,
  rangeMin: number,
  rangeMax: number
): boolean {
  return value > rangeMin && value < rangeMax;
}

export function changeValueToNumber(value: string): number {
  return Number(value);
}
