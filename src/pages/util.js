export function numberWithCommas(number) {
  return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

export function getTotalNumber(countries, prop) {
  let comfirmedNumber = 0;
  countries.forEach((country) => {
    comfirmedNumber += country[prop];
  });
  return comfirmedNumber;
}

export function getCountryList(data, NumberLimit) {
  const countrylist = data.Countries.filter(
    (country) => country.TotalConfirmed > NumberLimit
  ).sort((a, b) => (a.TotalConfirmed < b.TotalConfirmed ? 1 : -1));

  return countrylist;
}

export function calculatePercentage(num1, num2) {
  var pPos = num2;
  var pEarned = num1;
  var perc = "";
  if (isNaN(pPos) || isNaN(pEarned)) {
    perc = " ";
  } else {
    perc = ((pEarned / pPos) * 100).toFixed(3);
  }
  return perc;
}

export const every_nth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);