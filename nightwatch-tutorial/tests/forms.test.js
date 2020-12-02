module.exports = {
    before: (client) => {
        client
            .url(`${client.launch_url}/filling-out-forms/`)
    },

    "Should successfully fill out the left form": (client) => {
        // Making use of the launch url and appending the page name
        client
            .verify.title('Filling Out Forms - Ultimate QA')
            .setValue('#et_pb_contact_name_0', 'John Doe')
            .setValue('#et_pb_contact_message_0', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry')
            .submitForm('#et_pb_contact_form_0 form');
    },

    after: (client) => {
        client.end();
    }
    
}
