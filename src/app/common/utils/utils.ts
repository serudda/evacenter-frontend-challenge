/**
 * hasProp
 * @description - validate if an object has the prop passed arg
 * @function
 * @param {any} obj - Object to validate
 * @param {string} prop - prop's key to check if it belongs to the obj
 * @return {boolean} The obj does has the prop.
 */
export const hasProp = (obj = {}, prop: string): boolean => {
  if (obj === null || typeof obj !== 'object') return false;
  return prop in obj;
};

/**
 * formatTime
 * @description - return a parsed time format (AM/PM)
 * @function
 * @param {Date} date
 * @return {string} parsed Time
 * (e.g. input -> Tue Mar 23 2021 16:08:15 GMT-0500, output -> '4:08 PM').
 */
export const formatTime = (date: Date) => {
  let hours = date.getHours();
  let minutes: number | string = date.getMinutes();
  let seconds: number | string = date.getSeconds();
  const ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return `${hours}:${minutes}:${seconds} ${ampm}`;
};

/**
 * formatDate
 * @description - parse a Timestamp value into a String
 * @function
 * @param {number} timestamp
 * @return {string} parsed Date
 * (e.g. input -> 1611917520, output -> 'Jan 29, 2021 • 5:52:00 am').
 */
export const formatDate = (timestamp: number | string | undefined): string => {
  if (!timestamp) return '';

  const parsedValue = isNaN(timestamp as number) ? parseInt(timestamp as string) : (timestamp as number);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(parsedValue * 1000);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} • ${formatTime(date)}`;
};

/**
 * isArray
 * @description - validate if an element is an Array
 * @function
 * @param {any} element - Element to validate
 * @return {boolean} Element is an Array or not.
 */
export const isArray = (element): boolean => Array.isArray(element);

/**
 * isEmpty
 * @description - validate if an variable (string, string, array) is Empty
 * @function
 * @param {Object} value - Value to validate
 * @return {boolean} Value is empty or not.
 */
export const isEmpty = (value): boolean => Object.keys(value).length === 0;

/**
 * isNullOrUndefined
 * @description - validate if an element is null or undefined
 * @function
 * @param {any} value - Element to validate
 * @return {boolean} Element is null or undefined.
 */
export const isNullOrUndefined = (value): boolean => value === undefined || value === null;
