var assert = chai.assert;

describe('Testing Password validity', function() {
  it('Should provide true for password "1234ADS"', function() {
    assert.equal(stringValidation('1234ADS'), true);
  });
  it('Should provide true for password "passWord"', function() {
    assert.equal(stringValidation('passWord'), true);
  });
  it('Should provide false for password "passWord."', function() {
    assert.equal(stringValidation('passWord.'), false);
  });
  it('Should provide false for password "*helloPass"', function() {
    assert.equal(stringValidation('*helloPass'), false);
  });
  it('Should provide false for password "hello"', function() {
    assert.equal(stringValidation('hello'), false);
  });
});