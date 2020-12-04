const data = require("../globals/data");

describe("Forms Suite", () => {
    data.forEach(({testCase, name, message, expected}) => {
        it(testCase, (client) => {
            const FormPage = client.page.FormPage();

            FormPage
                .navigate()
                .enterNameAndMessage(name, message)
                .submitForm('@form')
                .verify.containsText('@lblLeftFormMessage', expected);
        });
    });

});
