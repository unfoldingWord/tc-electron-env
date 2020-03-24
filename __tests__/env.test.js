import * as env from "../src/js/utils/env";

describe("env", () => {
  it('env.home() should fail', () => {
    // given
    const expectedResults = '/Users/jest/mock/path';
    let results = null;

    // when
    results = env.home();

    // then
    expect(results).toEqual(expectedResults);
  });

  it('env.data() should fail', () => {
    // given
    const expectedResults = '/Users/jest/mock/path/appData';
    let results = null;

    // when
    results = env.data();

    // then
    expect(results).toEqual(expectedResults);
  });

  it('env.getEnv() should be empty', () => {
    // given
    const expectToSucceed = true;

    // when
    const results = env.getEnv();

    // then
    const nodeEnv = results['NODE_ENV'];
    expect(!!nodeEnv).toEqual(expectToSucceed);
  });

  it('env.getBuild() should be undefined', () => {
    // given
    const expectedResults = undefined;

    // when
    const results = env.getBuild();

    // then
    expect(results).toEqual(expectedResults);
  });
});

