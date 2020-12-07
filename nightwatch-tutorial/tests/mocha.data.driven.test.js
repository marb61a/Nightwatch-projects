const data = require("../globals/data");

describe("Forms Suite", () => {
    data.forEach(({testCase, name, screenshotFileName, message, expected}) => {
        it(testCase, (client) => {
            const FormPage = client.page.FormPage();

            FormPage
                .navigate()
                .enterNameAndMessage(name, message)
                .submitForm('@form')
                .saveScreenshot(screenshotFileName)
                .verify.containsText('@lblLeftFormMessage', expected);
        });
    });

});
