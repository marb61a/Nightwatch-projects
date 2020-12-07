const elements = {
    txtSearch: '#s',
    btnSearch: '#searchsubmit'
};

const commands = [
    {
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
