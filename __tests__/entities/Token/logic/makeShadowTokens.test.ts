import { makeShadowTokens } from '../../../../bin/entities/Token/logic/makeShadowTokens';

import {
  shadowsFrame,
  shadowsFrameMultipleShadows,
  shadowsFrameNoEffects
} from '../../../../testdata/frames/shadowsFrame';

describe('Failure cases', () => {
  test('It should throw an error if frame is missing "children" array', () => {
    expect(() => {
      // @ts-ignore
      makeShadowTokens({});
    }).toThrow();
  });

  test('It should throw an error if frame does not have "effects" array', () => {
    expect(() => {
      // @ts-ignore
      makeShadowTokens(shadowsFrameNoEffects);
    }).toThrow();
  });

  test('It should throw an error if no argument is provided', () => {
    expect(() => {
      // @ts-ignore
      makeShadowTokens();
    }).toThrow();
  });
});

describe('Success cases', () => {
  test('It should return a complete object when passing in valid input', () => {
    expect(makeShadowTokens(shadowsFrame)).toEqual(
      expect.objectContaining({
        deep: '3px 3px 3px rgba(196, 196, 196, 0.75)',
        medium: '0px 0px 5px rgba(0, 0, 0, 0.5)',
        soft: '0px 0px 5px rgba(196, 196, 196, 1)'
      })
    );
  });

  test('It should combine multiple shadows into same key', () => {
    expect(makeShadowTokens(shadowsFrameMultipleShadows)).toEqual(
      expect.objectContaining({
        deep: '3px 3px 3px rgba(196, 196, 196, 0.75), 3px 3px 3px rgba(196, 196, 196, 0.75)'
      })
    );
  });
});
