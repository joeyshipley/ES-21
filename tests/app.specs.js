import chai from 'chai';
import sinon from 'sinon';
const should = chai.should();

import app from '../src/app';

describe(`App tests`, () => {
  let _sandbox;

  beforeEach(() => {
    _sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    _sandbox.restore();
  });

  describe('When scrubbing input to remove unwanted values', () => {
    it(`It removes non-digit values like '-'`, async () => {
      // Act
      const result = app.start('7-623');

      // Assert
      result.should.equal('7623');
    });

    it(`It removes non-digit values like '.'`, async () => {
      // Act
      const result = app.start('..2965a');

      // Assert
      result.should.equal('2965');
    });

    it(`It removes non-digit values like Lowercase Letters`, async () => {
      // Act
      const result = app.start('..2965a');

      // Assert
      result.should.equal('2965');
    });

    it(`It removes non-digit values like Uppercase Letters`, async () => {
      // Act
      const result = app.start('NOPE2965NOPE');

      // Assert
      result.should.equal('2965');
    });

    it(`It does not care about order, it will still remove unwanted values`, async () => {
      // Act
      const result = app.start('1.2.3.4.5');

      // Assert
      result.should.equal('12345');
    });

    it(`A completely invalid input returns null instead of empty`, async () => {
      // Act
      const result = app.start('*&^%$#@!abdcDEF[]{};",.<>-+=_?');

      // Assert
      should.not.exist(result);
    });

    it(`A non-existant request returns null also`, async () => {
      // Act
      const result = app.start();

      // Assert
      should.not.exist(result);
    });

    it(`A non-string request returns null also`, async () => {
      // Act
      const result = app.start({ nope: 'NOPE!' });

      // Assert
      should.not.exist(result);
    });
  });
});
