module.exports = {
    // This is ran before the suite gets executed
    before: (client) => {
        console.log('Starting the suite');
    },

    // This is ran after the suite was executed
    after: (client) => {
        console.log('Closing the suite');
    },

    // This will be run before each test within the suite
    beforeEach: (client) => {
        client.url('https://ultimateqa.com/filling-out-forms');
    },

    // This will be run after each test within the suite
    afterEach: (client) => {
        console.log('Test completed');
    }
};