var dataService = function() {
    var urlBase = 'demo.json',

    getCustomers = function() {
        return $.getJSON(urlBase);
    }

    return{
        getCustomers: getCustomers,
    };
}();