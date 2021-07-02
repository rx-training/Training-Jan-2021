
function ticket(trip){
   const {fromCity,toCity,departureTime,destinationTime,tripDate,seatNo,travelerList,farePrice} = trip

   return `<html>

<head>
   <title>Bootstrap Example</title>
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1" />

   
   <style>
      .header{
         display: flex;
         justify-content: space-between;
         align-items: center;
         padding: 20px;
         color: white;
      }
      .table{
         border: 1px solid black;
         display: table;
         width: 100%;
      }
      td,th{
         border: 1px solid black;
         text-align: center;
      }
      .table tr{
         justify-content: center;
         width: 100%;
      }
   </style>
</head>

<body>

   <div class="border p-2">
      <div style="background-color: rgb(230,78,81);" class="header d-flex print-main p-3 text-white justify-content-between align-items-center">
         
         <h2>E-Reservation Ticket</h2>
         <div>
            <h2 class="">REDBUS</h2>
         </div>
      </div>
      <h2 class="text-center p-2">Traveling details</h2>
      <table class="table">
         <tr>
            <th>Bus name</th>
            <td></td>
            <th>Boarding Date </th>
            <td>${tripDate}</td>
         </tr>
         <tr>
            <th>Journey From </th>
            <td>${fromCity}</td>
            <th>Journey to </th>
            <td>${toCity}</td>
         </tr>
         <tr>
            <th>Departure Time </th>
            <td>${departureTime}</td>
            <th>Destination Time </th>
            <td>${destinationTime}</td>
         </tr>
         <tr>
            <th>No. of Seats </th>
            <td>${seatNo.length}</td>
            <th>Seats No/s </th>
            <td>${seatNo.toString()}</td>
         </tr>
      </table>
   
      <h2 class="text-center p-2">Passenger Details</h2>
      <table class="table my-2 table-bordered  text-capitalize">
         <tr>
            <th>name</th>
            <th>age</th>
            <th>gender</th>
         </tr>
         ${travelerList.map((user)=>`
         <tr>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.gender}</td>
         </tr>` )}
      </table>
   
      <h2 class="text-center p-2">Total Fare Details</h2>
      <table class="table my-2 table-bordered  text-capitalize">
         <tr>
            <th class="w-50">Total Chargeable Amount </th>
            <td>${farePrice}</td>
         </tr>
      </table>
   
      <h2 class=" p-2">Important </h2>
      <ul>
         <li>The seat(s) booked under this e-ticket is/are not transferable.</li>
         <li>This e-ticket is valid only for the seat number and bus service specified herein.</li>
         <li>This e-ticket has to be carried by the passenger during the journey along with Original.</li>
         <li>Photo ID Card of the passenger whose name appears above.</li>
         <li>Please keep the e-ticket safely till the end of the journey</li>
         <li>Please show the e-ticket at the time of checking.</li>
         <li>Cancellation policy differs for each STU. Please refer to the terms and conditions of the respective STUs.
         </li>
         <li>For any general queries, please contact following numbers 1800-419-4287(4BUS) and</li>
         <li>Passengers will have to pay the difference amount at boarding time in case of fare/levies/taxes revision as
            and when applicable.The difference amount will be calculated on charged fare and new fare / new levy / revised
            tax.</li>
      </ul>
   
      <h5 class="text-center">Wish You A Happy Journey</h5>
   </div>
</body>

</html> `
}

module.exports  = ticket