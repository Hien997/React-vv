
export const formatDateHis = (value?: string) => {
  if (value) {
    const date = value.substr(0, 10).replace(/-/g, '/');
    const time = value.substr(11, 5);
    return `${time} ${date}`;
  }
  return '';
};