module.exports = {
    "Expect Library demo tests": (client) => {
        client
            .url('https://ultimateqa.com/filling-out-forms/')
            .expect.element('button[name="et_builder_submit_button"]:nth-child(1)').text.equal('Submit');
    },

    "Should assert form field value": (client) => {
        client
            .setValue('#et_pb_contact_name_0', 'Joe Bloggs');
        client
            .expect.element('#et_pb_contact_name_0').to.have.value.which.equal('Joe Bloggs');
    },

    "Should assert current url": (client) => {
        client.expect.url().to.equal('https://ultimateqa.com/filling-out-forms/')
    },

    "Should assert title of the current page": (client) => {
        client.expect.title().to.contains('Filling Out Forms');
    },

    "Should assert attribute contains expected value": (client) => {
        client.expect.element('#et_pb_contact_name_0').to.have.attribute('placeholder').which.contains('Name');
    },

    "Should assert containing text": (client) => {
        client.expect.element('button[name="et_builder_submit_button"]:nth-child(1)').text.equal('Submit');
    },

    "Should assert CSS class present": (client) => {
        client.expect.element('#et_pb_contact_name_0').to.have.attribute('class').which.startWith('in');
    }

};