import { translateRomanian } from '../src/romanian';
import { expect } from 'chai';

describe('translateRomanian', () => {
    it('should translate input I', () => {
      expect(translateRomanian('I')).to.equal(1);
    });

    it('should translate input II', () => {
      expect(translateRomanian('II')).to.equal(2);
    });

    it('should translate input III', () => {
      expect(translateRomanian('III')).to.equal(3);
    });

    it('should translate empty string', () => {
      expect(translateRomanian('')).to.equal(0);
    });
});
