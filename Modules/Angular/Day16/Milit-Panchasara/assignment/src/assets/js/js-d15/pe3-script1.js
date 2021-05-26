function showDetails(id){
    document.getElementById(id).checked = true;
    document.getElementById('detail-row').classList.remove('d-none');
    document.getElementById('php-details').classList.add('d-none');
    document.getElementById('jsp-details').classList.add('d-none');
    document.getElementById('asp-net-details').classList.add('d-none');
    document.getElementById('perl-details').classList.add('d-none');
    switch (id) {
        case 'php':
            document.getElementById('php-details').innerHTML = '<ul><h3>Related technologies</h3><li>Laravel</li><li>Vue.js</li><li>MySQL</li></ul>';
            document.getElementById('php-details').classList.remove('d-none');
            break;

        case 'jsp':
            document.getElementById('jsp-details').innerHTML = '<ul><h3>Related technologies</h3><li>Java</li><li>MySQL</li><li>JDBS</li></ul>';
            document.getElementById('jsp-details').classList.remove('d-none');
            break;

        case 'asp-net':
            document.getElementById('asp-net-details').innerHTML = '<ul><h3>Related technologies</h3><li>C#</li><li>MSSQL</li><li>NodeJS</li></ul>';
            document.getElementById('asp-net-details').classList.remove('d-none');
            break;

        case 'perl':
            document.getElementById('perl-details').innerHTML = '<ul><h3>Related technologies</h3><li>Catalist</li><li>Mason</li><li>MySQL</li></ul>';
            document.getElementById('perl-details').classList.remove('d-none');
            break;
    
        default:
            break;
    }

}