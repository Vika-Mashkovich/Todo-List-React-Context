const sum = (a, b) => (a + b);
const multiply = (a, b) => (a * b);
const devision = (a, b) => {
  if (b === 0) {
    throw Error('на 0 делить нельзя');
  }

  return (a / b);
};
const search = (string, subString) => (string.indexOf(subString) !== -1); // true string.indexOf(subString) = -1 (не найдено)
// false string.indexOf(subString) = 0 (найдено)

describe('Test functions module', () => {
  test('Sum function shoud return correct sum', () => {
    const result = sum(2, 2);

    expect(result).toBe(4);
  });

  test('Multiply function shoud return correct multiplication', () => {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(2, 3)).toBe(6);
  });

  test('Devision function shoud return correct value', () => {
    expect(devision(2, 2)).toBe(1);
    expect(devision(3, 1)).toBe(3);
    expect(() => devision(2, 0)).toThrow();
  });

  describe('search function', () => {
    test('Search function shoud true if string is includes', () => {
      expect(search('привет кот', 'кот')).toBeTruthy();
      expect(search('пока пес', 'пес')).toBeTruthy();
    });

    test('Search function shoud false if string is not includes', () => {
      expect(search('привет', 'кот')).toBeFalsy();
      expect(search('пока пес', 'qwe')).toBeFalsy();
    });
  });
});
