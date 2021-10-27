import chai from 'chai';
import sinon from 'sinon';
const should = chai.should();

import distinctParser from '../src/distinctParser';

describe(`DistinctParser`, () => {
  let _sandbox;

  beforeEach(() => {
    _sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    _sandbox.restore();
  });

  describe('When scrubbing input values to remove unwanted duplicate values', () => {
    it(`A non-existant request returns null also`, async () => {
      // Act
      const result = distinctParser.removeDuplicates();

      // Assert
      should.not.exist(result);
    });

    it(`A non-array request returns null also`, async () => {
      // Act
      const result = distinctParser.removeDuplicates({ nope: 'NOPE!' });

      // Assert
      should.not.exist(result);
    });

    it(`It removes duplicate letters`, async () => {
      // Act
      const result = distinctParser.removeDuplicates([ 'a', 'b', 'c', 'a', 'b', 'd' ]);

      // Assert
      result.should.have.lengthOf(4);
      (result.find((entry) => entry == 'a') != null).should.be.true;
      (result.find((entry) => entry == 'b') != null).should.be.true;
      (result.find((entry) => entry == 'c') != null).should.be.true;
      (result.find((entry) => entry == 'd') != null).should.be.true;
    });

    it(`It removes duplicate numbers`, async () => {
      // Act
      const result = distinctParser.removeDuplicates([ 4, 4, 3, 2, 3, 1 ]);

      // Assert
      result.should.have.lengthOf(4);
      (result.find((entry) => entry == 1) != null).should.be.true;
      (result.find((entry) => entry == 2) != null).should.be.true;
      (result.find((entry) => entry == 3) != null).should.be.true;
      (result.find((entry) => entry == 4) != null).should.be.true;
    });

    it(`It keeps the order`, async () => {
      // Act
      const result = distinctParser.removeDuplicates([ 'b', 'a', 'a', 'c', 'b' ]);

      // Assert
      result.should.have.lengthOf(3);
      result[0].should.equal('b');
      result[1].should.equal('a');
      result[2].should.equal('c');
    });
  });
});
