
let busInfo = JSON.parse(window.localStorage.getItem('buses'));
let userData = JSON.parse(window.localStorage.getItem('userData'));
let f = false;

document.getElementById('busRoute').addEventListener('click', function(e){
    e.preventDefault();
    let source = document.querySelector('.source').value;
    let destination = document.querySelector('.dest').value;
    let onward = document.querySelector('.onward').value;
    let rtrn = document.querySelector('.return').value;

    const userData = {
        'source': source,
        'destination' : destination,
        'onward': onward,
        'rtrn': rtrn
    };

    myStorage.setItem('userData', JSON.stringify(userData));

    window.location.href = 'busRoute.html';
});

$.each(busInfo, function(i){
    if(busInfo[i].Source.toLowerCase() == userData.source.toLowerCase() && busInfo[i].Destination.toLowerCase() == userData.destination.toLowerCase()){
    $('#busLog').after(
        `<div class="mt-5">
        <div class="card d-block">
            <div class="card-title">
                <h6 class="pl-3 pt-3">Gurjarnagari Express</h6>
            </div>
            <div class="card-body">
                <form>
                    <div class="form-row align-items-center">
                        <div class="col-lg-2">
                            <h6 class="text-danger">${busInfo[i].BusNo}</h6>
                        </div>
                        <div class="col-lg-2">
                            <table>
                                <tr>
                                    <td>Source</td>
                                </tr>
                                <tr>
                                    <th>${busInfo[i].Source}</th>
                                </tr>
                            </table>
                        </div>
                        <div class="col-lg-2">
                            <table>
                                <tr>
                                    <td>Destination</td>
                                </tr>
                                <tr>
                                    <th>${busInfo[i].Destination}</th>
                                </tr>
                            </table>
                        </div>
                        <div class="col-lg-2">
                            <table>
                                <tr>
                                    <td>Dept. Time</td>
                                </tr>
                                <tr>
                                    <th>${busInfo[i].ArrivalTime}</th>
                                </tr>
                            </table>
                        </div>
                        <div class="col-lg-2">
                            <table>
                                <tr>
                                    <td>Arrival Time</td>
                                </tr>
                                <tr>
                                    <th>${busInfo[i].DepartureTime}</th>
                                </tr>
                            </table>
                        </div>
                        <div class="col-lg-1 d-flex justify-content-left">
                            <table>
                                <tr>
                                    <td>Fare</td>
                                </tr>
                                <tr>
                                    <th>${busInfo[i].Ticket}</th>
                                </tr>
                            </table>
                        </div>
                        <div class="col-lg-1 d-block">
                            <button type="submit" class="btn btn-primary mb-2" id="seats">30</button>
                            <span class="small text-primary">Select seats</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>`
    )}else{
         f = true;    
    }
});

if(f){
    $('#busLog').after(
        `<div class="mt-5">
            <p>No Buses on this Route</p>
        </div>`
    )
}