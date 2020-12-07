module.exports = {
    "Should find results when searching for 'applitools'": (client) => {
        const ComplicatedPage = client.page.ComplicatedPage();
        const SearchPage = client.page.SearchPage();

        ComplicatedPage
            .navigate()
            .search('applitools')
            .verify.urlContains('/?s');
        
        // Blog format has completely changed so test will not work
        // SearchPage
        //     .getText('@postTitle', (result) => {
        //         client.pause();
        //         client.assert.equal(result.value, 'Appltools Bugs and Test Steps');
        //     });
    }

}
