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
    }
    
};