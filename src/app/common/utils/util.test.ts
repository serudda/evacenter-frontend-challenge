import { formatDate, formatTime, hasProp, isArray, isEmpty, isNullOrUndefined } from './utils';

describe('formatTime()', () => {
  test('should return the parse time', () => {
    const input = new Date('2019-04-07T10:20:30Z');
    const output = '10:20:30 am';
    expect(formatTime(input)).toEqual(output);
  });
});

describe('formatDate()', () => {
  test('should return the parse date', () => {
    const input = '1611917520';
    const output = 'Jan 29, 2021 • 10:52:00 am';
    expect(formatDate(input)).toEqual(output);
  });
});

describe('hasProp()', () => {
  test('should return true if the Object has the provided prop', () => {
    const input = { name: 'Button' };
    expect(hasProp(input, 'name')).toBe(true);
  });

  test('should return false if the Object does not have the provided prop', () => {
    const input = { url: 'https://www.uiguideline.com' };
    expect(hasProp(input, 'name')).toBe(false);
  });

  test('should return false if the value is not an Object', () => {
    const input = 'Button';
    expect(hasProp(input, 'name')).toBe(false);
  });
});

describe('isArray()', () => {
  test('should return true if the variable is an Array', () => {
    const input = [{ name: 'Button' }, { name: 'Input' }];
    expect(isArray(input)).toBe(true);
  });

  test('should return true if the variable is an empty Array', () => {
    const input = [];
    expect(isArray(input)).toBe(true);
  });

  test('should return false if the variable is not an Array', () => {
    const input = { name: 'Button' };
    expect(isArray(input)).toBe(false);
  });
});

describe('isEmpty()', () => {
  test('should return true if an object is empty', () => {
    const input = {};
    expect(isEmpty(input)).toBe(true);
  });

  test('should return false if an object is not empty', () => {
    const input = { name: 'Button' };
    expect(isEmpty(input)).toBe(false);
  });

  test('should return true if an string is empty', () => {
    const input = '';
    expect(isEmpty(input)).toBe(true);
  });

  test('should return false if an string is not empty', () => {
    const input = 'Sergio';
    expect(isEmpty(input)).toBe(false);
  });

  test('should return true if an array is empty', () => {
    const input = [];
    expect(isEmpty(input)).toBe(true);
  });

  test('should return false if an array is not empty', () => {
    const input = [{ name: 'Button' }, { name: 'Input' }];
    expect(isEmpty(input)).toBe(false);
  });
});

describe('isNullOrUndefined()', () => {
  test('should return true if the variable is null', () => {
    const input = null;
    expect(isNullOrUndefined(input)).toBe(true);
  });

  test('should return true if the variable is undefined', () => {
    let input;
    expect(isNullOrUndefined(input)).toBe(true);
  });

  test('should return false if the variable is not null or undefined', () => {
    const input = 'Button';
    expect(isNullOrUndefined(input)).toBe(false);
  });
});
