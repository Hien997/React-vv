export const isExcelFile = (file: string) => {
  const regex = /^[\w,\s-]+\.xlsx$/;
  return regex.test(file);
};

export const isCsvFile = (file: string) => {
  const regex = /^[\w,\s-]+\.csv$/;
  return regex.test(file);
};
