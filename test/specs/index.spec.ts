import { expect } from 'chai';
import { hello } from '../../src/index';

describe('hello', () => {
    it("should hello() returns 'world'", () => {
        expect(hello()).to.be.eq('world');
    });
});
