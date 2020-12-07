const fs = require('fs')

module.exports = {
    // Executed prior to a selenium session is created
    before: (done) => {
        console.log('before');
        done();
    },

    // Executed after a selenium session is closed
    after: (done) => {
        console.log('after');
        done();
    },

    beforeEach: (client, done) => {
        console.log('beforeEach');
        client.status(result => {
            console.log(result.value);
            done();
        })
    },

    afterEach: (client, done) => {
        console.log('afterEach');
        console.log(client.currentTest);
        done();
    },

    reporter: (results, done) => {
        fs.writeFile('testresult.json', JSON.stringify(results, null, '\t'), (err) => {
            if (err) throw err;

            // The save is saved
            console.log('report saved');
            done();
        });
    }
}
