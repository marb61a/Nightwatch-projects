const elements = {
    // Shorthand element definition
    leftFormName: "#et_pb_contact_name_0",

    // Longhand/Full definition
    leftFormMessage: {
        selector: "#et_pb_contact_message_0",
        locateStrategy: 'css selector'
    },

    form: '#et_pb_contact_form_0 form',
    btnSubmit: `#et_pb_contact_form_0 form button`,
    lblLeftFormMessage: '#et_pb_contact_form_0 > div'
};

const commands = [
    {
        // Will enter the given name and message into the form fields
        enterNameAndMessage(name, message){
            return this
                .setValue('@leftFormName', name)
                .setValue('@leftFormMessage', message)
        },

        submitLeftForm(){
            return this.click('@btnSubmit')
        }
    }
]

module.exports = {
    elements: elements,
    commands: commands,
    url: function(){
        return `${this.api.launchUrl}/filling-out-forms/`;
    }

}
