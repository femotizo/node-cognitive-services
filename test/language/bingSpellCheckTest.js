const cognitive = require('../../src/index.js');
const config = require('../config.js');
const should = require('should');

describe('Bing spell check', () => {

    const client = new cognitive.bingSpellCheck({
        apiKey: config.bingSpellCheck.apiKey
    });

    describe('spellCheck', () => {
        it('should return response', (done) => {
            const parameters = {
                "mode": "proof",
                "mkt": "en-us"
            };

            const body = "Text=Bill+Gatas";

            client.spellCheck({
                parameters,
                body
            }).then((response) => {
                should(response).not.be.undefined();
                should(response).have.properties(['_type', 'flaggedTokens'])
                done();
            }).catch((err) => {
                done(err);
            });
        })
    })
})