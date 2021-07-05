
export const getDateFromCode = (code: string) => {
  let fromDate, toDate, lastday;
  const curr = new Date(); // get current date
  const dayCurr = curr.getDate() - curr.getDay() + 1; //  day current is the day of the month - the day of the week

  switch (code) {
    // Today
    case '2':
      fromDate = new Date();
      toDate = new Date();
      break;

    // This Week
    case '3':
      fromDate = new Date(curr.setDate(dayCurr));
      toDate = new Date();
      break;

    // Last Week
    case '4':
      lastday = dayCurr - 7;
      fromDate = new Date(curr.setDate(lastday - 7));
      toDate = new Date(curr.setDate(lastday));
      break;

    // Last 2 Week
    case '5':
      lastday = dayCurr - 14;
      fromDate = new Date(curr.setDate(lastday - 7));
      toDate = new Date(curr.setDate(lastday));
      break;

    // Last 3 Week
    case '6':
      lastday = dayCurr - 21;
      fromDate = new Date(curr.setDate(lastday - 7));
      toDate = new Date(curr.setDate(lastday));
      break;

    // Last 1 Month
    case '7':
      fromDate = new Date(curr.setMonth(curr.getMonth() - 2));
      toDate = new Date(curr.setMonth(curr.getMonth() - 1));
      break;

    // Last 2 Month
    case '8':
      fromDate = new Date(curr.setMonth(curr.getMonth() - 3));
      toDate = new Date(curr.setMonth(curr.getMonth() - 2));
      break;

    // Last 3 Month
    case '9':
      fromDate = new Date(curr.setMonth(curr.getMonth() - 4));
      toDate = new Date(curr.setMonth(curr.getMonth() - 3));
      break;

    // Last 4 Month
    case '10':
      fromDate = new Date(curr.setMonth(curr.getMonth() - 5));
      toDate = new Date(curr.setMonth(curr.getMonth() - 4));
      break;

    // Last 6 Month
    case '11':
      fromDate = new Date(curr.setMonth(curr.getMonth() - 7));
      toDate = new Date(curr.setMonth(curr.getMonth() - 6));
      break;

    // Last 1 Year'
    case '12':
      fromDate = new Date(curr.setFullYear(curr.getFullYear() - 2));
      toDate = new Date(curr.setFullYear(curr.getFullYear() - 1));
      break;

    default:
      fromDate = new Date("1900-01-01");
      toDate = new Date();
      break;
  }

  return {
    fromDate: fromDate.toISOString().substr(0, 19).replace('T', ' '),
    toDate: toDate.toISOString().substr(0, 19).replace('T', ' ')
  };

};