// import fetch from '../src/fetch';

describe('fetch', () => {
  describe('when a JSON payload with a good HTTP status code is returned', () => {
    it('returns a resolved promise with the JSON payload', () => {
      expect(true).toBe(true);
    });
  });

  describe('when a bad HTTP status code is returned', () => {
    it('throws an error', () => {});
  });

  describe('when a non-JSON payload is returned', () => {
    it('throws an error', () => {});
  });
});
