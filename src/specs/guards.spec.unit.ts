import { exhaustiveCheck, isDefined, isEmpty, isNil, isNotNil, isNotNull, isNull, isUndefined } from 'src/guards';

describe('Guards', () => {
  describe("'exhaustiveCheck'", () => {
    it('should not throw a compile time error when all cases are covered', () => {
      type TestType = 'a' | 'b';
      const testFunction = (value: TestType): string => {
        switch (value) {
          case 'a':
            return 'A';
          case 'b':
            return 'B';
          default: {
            // Would cause a compile-time error if a new type is added to 'TestType'
            exhaustiveCheck(value);
            return '';
          }
        }
      };
      expect(testFunction('a')).toBe('A');
    });
  });

  describe("'isUndefined'", () => {
    it('should return true when the parameter is undefined', () => {
      expect(isUndefined(undefined)).toBe(true);
    });
    it('should return false when the parameter is null', () => {
      expect(isUndefined(null)).toBe(false);
    });
    it('should return false when the parameter is a number', () => {
      expect(isUndefined(123)).toBe(false);
    });
    it('should return false when the parameter is a string', () => {
      expect(isUndefined('hello')).toBe(false);
    });
    it('should return false when the parameter is an object', () => {
      expect(isUndefined({ key: 'value' })).toBe(false);
    });
    it('should return false when the parameter is an array', () => {
      expect(isUndefined([1, 2, 3])).toBe(false);
    });
    it('should return false when the parameter is a function', () => {
      expect(
        isUndefined(() => {
          return;
        }),
      ).toBe(false);
    });
    it('should return false when the parameter is a bigint', () => {
      expect(isUndefined(101001010101010111111000n)).toBe(false);
    });
    it('should return false when the parameter is a symbol', () => {
      expect(isUndefined(Symbol('symbol'))).toBe(false);
    });
    it('should return false when the parameter is a boolean', () => {
      expect(isUndefined(true)).toBe(false);
    });
  });

  describe("'isDefined'", () => {
    it('should return false when the parameter is undefined', () => {
      expect(isDefined(undefined)).toBe(false);
    });
    it('should return true when the parameter is null', () => {
      expect(isDefined(null)).toBe(true);
    });
    it('should return true when the parameter is a number', () => {
      expect(isDefined(123)).toBe(true);
    });
    it('should return true when the parameter is a string', () => {
      expect(isDefined('hello')).toBe(true);
    });
    it('should return true when the parameter is an object', () => {
      expect(isDefined({ key: 'value' })).toBe(true);
    });
    it('should return true when the parameter is an array', () => {
      expect(isDefined([1, 2, 3])).toBe(true);
    });
    it('should return true when the parameter is a function', () => {
      expect(
        isDefined(() => {
          return;
        }),
      ).toBe(true);
    });
    it('should return true when the parameter is a bigint', () => {
      expect(isDefined(101001010101010111111000n)).toBe(true);
    });
    it('should return true when the parameter is a symbol', () => {
      expect(isDefined(Symbol('symbol'))).toBe(true);
    });
    it('should return true when the parameter is a boolean', () => {
      expect(isUndefined(true)).toBe(false);
    });
  });

  describe("'isNull'", () => {
    it('should return false when the parameter is undefined', () => {
      expect(isNull(undefined)).toBe(false);
    });
    it('should return true when the parameter is null', () => {
      expect(isNull(null)).toBe(true);
    });
    it('should return false when the parameter is a number', () => {
      expect(isNull(123)).toBe(false);
    });
    it('should return false when the parameter is a string', () => {
      expect(isNull('hello')).toBe(false);
    });
    it('should return false when the parameter is an object', () => {
      expect(isNull({ key: 'value' })).toBe(false);
    });
    it('should return false when the parameter is an array', () => {
      expect(isNull([1, 2, 3])).toBe(false);
    });
    it('should return false when the parameter is a function', () => {
      expect(
        isNull(() => {
          return;
        }),
      ).toBe(false);
    });
    it('should return false when the parameter is a bigint', () => {
      expect(isNull(101001010101010111111000n)).toBe(false);
    });
    it('should return false when the parameter is a symbol', () => {
      expect(isNull(Symbol('symbol'))).toBe(false);
    });
    it('should return false when the parameter is a boolean', () => {
      expect(isNull(true)).toBe(false);
    });
  });

  describe("'isNotNull'", () => {
    it('should return true when the parameter is undefined', () => {
      expect(isNotNull(undefined)).toBe(true);
    });
    it('should return false when the parameter is null', () => {
      expect(isNotNull(null)).toBe(false);
    });
    it('should return true when the parameter is a number', () => {
      expect(isNotNull(123)).toBe(true);
    });
    it('should return true when the parameter is a string', () => {
      expect(isNotNull('hello')).toBe(true);
    });
    it('should return true when the parameter is an object', () => {
      expect(isNotNull({ key: 'value' })).toBe(true);
    });
    it('should return true when the parameter is an array', () => {
      expect(isNotNull([1, 2, 3])).toBe(true);
    });
    it('should return true when the parameter is a function', () => {
      expect(
        isNotNull(() => {
          return;
        }),
      ).toBe(true);
    });
    it('should return true when the parameter is a bigint', () => {
      expect(isNotNull(101001010101010111111000n)).toBe(true);
    });
    it('should return true when the parameter is a symbol', () => {
      expect(isNotNull(Symbol('symbol'))).toBe(true);
    });
    it('should return true when the parameter is a boolean', () => {
      expect(isNotNull(true)).toBe(true);
    });
  });

  describe("'isNil'", () => {
    it('should return true when the parameter is undefined', () => {
      expect(isNil(undefined)).toBe(true);
    });
    it('should return true when the parameter is null', () => {
      expect(isNil(null)).toBe(true);
    });
    it('should return false when the parameter is a number', () => {
      expect(isNil(123)).toBe(false);
    });
    it('should return false when the parameter is a string', () => {
      expect(isNil('hello')).toBe(false);
    });
    it('should return false when the parameter is an object', () => {
      expect(isNil({ key: 'value' })).toBe(false);
    });
    it('should return false when the parameter is an array', () => {
      expect(isNil([1, 2, 3])).toBe(false);
    });
    it('should return false when the parameter is a function', () => {
      expect(
        isNil(() => {
          return;
        }),
      ).toBe(false);
    });
    it('should return false when the parameter is a bigint', () => {
      expect(isNil(101001010101010111111000n)).toBe(false);
    });
    it('should return false when the parameter is a symbol', () => {
      expect(isNil(Symbol('symbol'))).toBe(false);
    });
    it('should return false when the parameter is a boolean', () => {
      expect(isNil(true)).toBe(false);
    });
  });

  describe("'isNotNil'", () => {
    it('should return false when the parameter is undefined', () => {
      expect(isNotNil(undefined)).toBe(false);
    });
    it('should return false when the parameter is null', () => {
      expect(isNotNil(null)).toBe(false);
    });
    it('should return true when the parameter is a number', () => {
      expect(isNotNil(123)).toBe(true);
    });
    it('should return true when the parameter is a string', () => {
      expect(isNotNil('hello')).toBe(true);
    });
    it('should return true when the parameter is an object', () => {
      expect(isNotNil({ key: 'value' })).toBe(true);
    });
    it('should return true when the parameter is an array', () => {
      expect(isNotNil([1, 2, 3])).toBe(true);
    });
    it('should return true when the parameter is a function', () => {
      expect(
        isNotNil(() => {
          return;
        }),
      ).toBe(true);
    });
    it('should return true when the parameter is a bigint', () => {
      expect(isNotNil(101001010101010111111000n)).toBe(true);
    });
    it('should return true when the parameter is a symbol', () => {
      expect(isNotNil(Symbol('symbol'))).toBe(true);
    });
    it('should return true when the parameter is a boolean', () => {
      expect(isNotNil(true)).toBe(true);
    });
  });

  describe("'isEmpty", () => {
    it('should return true for null', () => {
      expect(isEmpty(null)).toBe(true);
    });
    it('should return true for an empty string', () => {
      expect(isEmpty('')).toBe(true);
    });
    it('should return false for a non-empty string', () => {
      expect(isEmpty('hello')).toBe(false);
    });
    it('should return false for false boolean', () => {
      expect(isEmpty(false)).toBe(false);
    });
    it('should return false for true boolean', () => {
      expect(isEmpty(true)).toBe(false);
    });
    it('should return false for a number', () => {
      expect(isEmpty(123)).toBe(false);
    });
    it('should return false for a zero (number)', () => {
      expect(isEmpty(0)).toBe(false);
    });
    it('should return true for an empty array', () => {
      expect(isEmpty([])).toBe(true);
    });
    it('should return false for a non-empty array', () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
    });
    it('should return true for an empty object', () => {
      expect(isEmpty({})).toBe(true);
    });
    it('should return false for a non-empty object', () => {
      expect(isEmpty({ key: 'value' })).toBe(false);
    });
    it('should return false for a function', () => {
      expect(
        isEmpty(() => {
          return;
        }),
      ).toBe(false);
    });
    it('should return false for a symbol', () => {
      expect(isEmpty(Symbol('symbol'))).toBe(false);
    });
    it('should return true for an empty map', () => {
      expect(isEmpty(new Map())).toBe(true);
    });
    it('should return false for a non-empty map', () => {
      const map = new Map<string, number>();
      map.set('one', 1);
      expect(isEmpty(map)).toBe(false);
    });
    it('should return true for an empty set', () => {
      expect(isEmpty(new Set())).toBe(true);
    });
    it('should return true for a non-empty set', () => {
      expect(isEmpty(new Set(['one']))).toBe(false);
    });
  });
});
