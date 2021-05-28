function showDetails(id){
    document.getElementById(id).checked = true;
    document.getElementById('detail-row').classList.remove('d-none');
    switch (id) {
        case 'php':
            document.getElementById('details').innerHTML = '<ul><h3>Related technologies</h3><li>Laravel</li><li>Vue.js</li><li>MySQL</li></ul>';
            break;

        case 'jsp':
            document.getElementById('details').innerHTML = '<ul><h3>Related technologies</h3><li>Java</li><li>MySQL</li><li>JDBS</li></ul>';
            break;

        case 'asp-net':
            document.getElementById('details').innerHTML = '<ul><h3>Related technologies</h3><li>C#</li><li>MSSQL</li><li>NodeJS</li></ul>';
            break;

        case 'perl':
            document.getElementById('details').innerHTML = '<ul><h3>Related technologies</h3><li>Catalist</li><li>Mason</li><li>MySQL</li></ul>';
            break;
    
        default:
            break;
    }

}