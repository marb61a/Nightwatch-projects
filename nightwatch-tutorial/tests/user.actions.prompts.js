module.exports = {
    "Should perform key strokes": (client) => {
        client
            .url('https://ultimateqa.com/filling-out-forms/')
            .setValue('#et_pb_contact_message_0', 'testing key strokes')
            .keys(client.Keys.BACK_SPACE)
            .keys(client.Keys.BACK_SPACE)
            .keys(client.Keys.ENTER)
            .keys(client.Keys.SUBTRACT)
            .pause(5000);

    },

    "Should perform right click": (client) => {
        client
            .mouseButtonClick('right')
            .pause(3000);
    },

    "Should perform window actions": (client) => {
        client
            .openNewWindow('tab')
            .fullscreenWindow()
            .windowHandles((results) => {
                const newWindow = results.value[1];
                client.switchWindow(newWindow);
            })
            .pause(5000);
    },

    "Should interact with alerts": (client) => {
        client
            .url('http://demo.automationtesting.in/Alerts.html')
            .click('#OKTab button')
            .getAlertText((results) => {
                console.log(results.value);
            })
            .acceptAlert();
    }

};
