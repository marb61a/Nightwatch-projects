module.exports = {
    "Expect Library demo tests" : (client) => {
        client
            .url('https://ultimateqa.com/filling-out-forms/')
            .verify.not.visible('button[name="et_builder_submit_button"]:nth-child(1)')
            .assert.visible('button[name="et_builder_submit_button"]:nth-child(1)')
    }
}
