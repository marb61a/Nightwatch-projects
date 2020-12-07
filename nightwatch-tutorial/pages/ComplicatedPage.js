const elements = {
    txtSearch: '#s',
    btnSearch: '#searchsubmit'
};

const commands = [
    {
        // Enters the searchTerm into the search field and then clicks on the search button
        search(searchTerm){
            return this
                .setValue('@txtSearch', searchTerm)
                .click('@btnSearch');
        }
    }
];

module.exports = {
    elements: elements,
    commands: commands,
    url : function(){
        return `${this.api.launchUrl}/complicated-page/`;
    }
}
