module.exports = {
    "Should navigate using default url": (client) => {
        client
            .init()
            .getTitle( (title) => console.log(title))
            .pause(2000)
            .url('https://ultimateqa.com/filling-out-forms')
            .getTitle( (title) => console.log(title))
            .back()
            .getTitle( (title) => console.log(title))
            .forward()
            .getTitle( (title) => console.log(title))
            .urlHash('#random');
    }
};
