import * as Chai from 'chai';

declare global {
    interface GlobalThis {
        expect: Chai.ExpectStatic;
    }
    const expect: Chai.ExpectStatic;
}
