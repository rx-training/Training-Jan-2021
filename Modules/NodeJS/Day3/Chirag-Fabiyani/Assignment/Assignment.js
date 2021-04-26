const data = require('./Rental')
const Customer1 = new data('GJ01PV2296',7698412255,'Chirag',11)
console.log(
    'The Charge of the customer named '+Customer1.Name+
    ' Renting bike with bike number '+Customer1.BikeNumber+
    ' Having Contact Number '+Customer1.PhoneNummber+
    ' is: '+Customer1.Compute()
);