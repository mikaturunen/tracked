const chai = require('chai');
const expect = chai.expect;
const should = chai.should;

const steemitData = require('../release/index');

// TODO configure all console winston messages to be hidden in testing mode

describe('steemitData module', () => {
  it('Connects correctly to steemitdata Mongodb storage', (done) => {
    steemitData.connect()
  });
});
