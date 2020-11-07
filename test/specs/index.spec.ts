import { expect } from 'chai';
import { hello } from '../../src/index';

describe('hello', () => {
    it('should hello() returns "World"', () => {
        expect(hello()).to.be.eq('world');
    });
});
