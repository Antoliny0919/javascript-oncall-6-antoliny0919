export const getOnCallLastDay = (month) => {
  if (month == '2') {
    return lastDay = 28;
  }
  const date = new Date(`2026-${month}-0`);
  const lastDay = date.getDate();
  return Number(lastDay);
}
