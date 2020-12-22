export const stringToDate = (dateString: string): Date => {
  const dateElements = dateString.split('/').map((el) => parseInt(el));
  return new Date(dateElements[2], dateElements[1] - 1, dateElements[0]);
};
