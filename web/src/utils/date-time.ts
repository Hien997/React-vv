export const getDate = (isEnd: boolean) => {
  const systemDate = new Date();
  const dateIOS = systemDate.toISOString().substr(0, 16);
  if (isEnd) {
    const year = systemDate.getFullYear() + 5;
    return `${year}${dateIOS.substr(4, 16)}`;
  }

  return dateIOS;
};
