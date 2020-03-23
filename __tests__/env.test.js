import * as env from "../src/js/utils/env";

describe("env", () => {
  it('env.home() should fail', () => {
    // given
    const expectToSucceed = false;
    let results = null;

    // when
    try {
      // eslint-disable-next-line no-unused-vars
      const path = env.home();
      results = true;
    } catch (e) {
      results = false;
    }

    // then
    expect(results).toEqual(expectToSucceed);
  });

  it('env.data() should fail', () => {
    // given
    const expectToSucceed = false;
    let results = null;

    // when
    try {
      // eslint-disable-next-line no-unused-vars
      const path = env.home();
      results = true;
    } catch (e) {
      results = false;
    }

    // then
    expect(results).toEqual(expectToSucceed);
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

