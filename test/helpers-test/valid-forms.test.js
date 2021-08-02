const validEmail = require('../../helpers/validations/valid-forms.ts');

describe('testing index file', () => {
  test('double function', () => {
    expect(validEmail("fabricio")).toBe("fabricio");
  });
});