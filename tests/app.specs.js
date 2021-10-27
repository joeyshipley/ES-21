import chai from 'chai';
import sinon from 'sinon';
const should = chai.should();

import app from '../src/app';

describe(`App`, () => {
  let _sandbox;

  beforeEach(() => {
    _sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    _sandbox.restore();
  });

  describe('When fetching specialty names', () => {
    it(`it returns the correct number of entries based on the parsed and deduped values.`, async () => {
      // Act
      const result = app.lookupSpecialtyNames([ '7-623', '8235', '8-235' ]);

      // Assert
      result.should.have.lengthOf(2);
    });

    // NOTE: ran out of time...
    // it(`it performs a lookup of the names based on the ids`, async () => {
    //   // Act
    //   const result = app.lookupSpecialtyNames([ '7-623', '8235', '8-235' ]);
    //
    //   // Assert
    //   result.should.have.lengthOf(2);
    //   result[0].should.equal('security')
    //   result[1].should.equal('data engineering')
    // });
  });
});
