export const TEXT_MARKER = {
  PHONE: [
    '(',
    /\d/,
    /\d/,
    /\d/,
    ')',
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  SSN: [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  BIRTHDAY: [/\d/, /\d/, '/', /\d/, /\d/],
  PERCENT_RATE: [/\d/, /\d/, '|', /\d/, /\d/],
};
