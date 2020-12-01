module.exports = {
    "Expect Library demo tests" : (client) => {
        client
            .url('https://ultimateqa.com/filling-out-forms/')
            .verify.visible('button[name="et_builder_submit_button"]:nth-child(1)')
            .assert.visible('button[name="et_builder_submit_button"]:nth-child(1)')
    },

    "Should assert form field value": (client) => {
        client
            .setValue('#et_pb_contact_name_0', 'Joe Bloggs');
        client
            .assert.valueContains('#et_pb_contact_name_0', 'Joe');
    },

    "Should assert current url": (client) => {
        client.assert.urlEquals('https://ultimateqa.com/filling-out-forms/');
    },

    "Should assert title of the current page": (client) => {
        client.verify.title('Filling Out Forms - Ultimate QA');
    },

    "Should assert attribute contains expected value": (client) => {
        client.verify.attributeContains('#et_pb_contact_name_0', 'placeholder', "Name");
    },

    "Should assert containing text": (client) => {
        client.verify.containstext('button[name="et_builder_submit_button"]:nth-child(1)', "Submit");
    },

    "Should assert CSS class present": (client) => {
        client.verify.cssClassPresent('#et_pb_contact_name_0', 'input');
    }

}
