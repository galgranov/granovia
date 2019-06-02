
const m = require('./index.js');
/**
 * @describe [optional] - group of tests with a header to describe them
 */
describe('testing slugger basic functionality', () => {
    /**
     * @it - unit tests can use the 'it' syntax
     */
    it('slugger can slug string with spaces', () => {
        const mystr = 'gal' //...your cod
        const outp = m.slugify(mystr);
        
        expect(outp).toEqual('gal');
    })
    /**
     * @test - unit test can use the 'test' syntax
     */
    test('slugger can slug any number of spacy strings', () => {
        const mystr = 'gal granov the king' //...your cod
        const outp = m.slugify(mystr);
        
        expect(outp).toEqual('gal-granov-the-king');
    })
})