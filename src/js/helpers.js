export const randomIntFromInterval = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const twoArraysToObject = (arr1, arr2) => {
  // create object with arr1 as keys and arr2 as values
  return arr2?.reduce((acc, el, i) => {
    return { ...acc, [arr1[i]]: el };
  }, {});
};

export const arrayAndArrayOfArraysToArrayOfObjects = (arr1, arr2) => {
  // create an array of object with arr1 as keys and arr2 as array of values
  return arr2?.map((el) => twoArraysToObject(arr1, el));
};

export const formatDate = (dateString, separator = '/', zero = true) => {
  // deconstruct array
  /**
   * HARDCODED AT THE MOMENT: string must be 'year,month,day'
   */
  let [year, month, day] = dateString.split(',');

  // if asked: put zero's in front of days and months with 1 digit
  if (zero) {
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }
  }

  // return string with asked separator
  return day + separator + month + separator + year;
};
