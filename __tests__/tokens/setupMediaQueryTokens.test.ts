import { setupMediaQueryTokens } from '../../bin/entities/Tokens/tokens/setupMediaQueryTokens';

import {
  mediaQueriesFrame,
  mediaQueriesFrameNoAbsoluteBoundingBox
} from '../../testdata/frames/mediaQueriesFrame';

describe('Success cases', () => {
  test('It should throw an error if frame is missing "children" array', () => {
    expect(() => {
      // @ts-ignore
      setupMediaQueryTokens({});
    }).toThrow();
  });

  test('It should throw an error if frame does not have "absoluteBoundingBox" property', () => {
    expect(() => {
      // @ts-ignore
      setupMediaQueryTokens(mediaQueriesFrameNoAbsoluteBoundingBox);
    }).toThrow();
  });

  test('It should throw an error if no parameter is provided', () => {
    expect(() => {
      // @ts-ignore
      setupMediaQueryTokens();
    }).toThrow();
  });
});

describe('Success cases', () => {
  test('It should return a complete object when passing in valid input', () => {
    expect(setupMediaQueryTokens(mediaQueriesFrame)).toEqual(
      expect.objectContaining({
        desktopLg: '1440px',
        desktopMd: '1180px',
        mobileLg: '580px',
        mobileMax: '767px',
        mobileMd: '480px',
        mobileSm: '320px',
        tabletMax: '1024px',
        tabletMin: '768px',
        wide: '1920px'
      })
    );
  });
});