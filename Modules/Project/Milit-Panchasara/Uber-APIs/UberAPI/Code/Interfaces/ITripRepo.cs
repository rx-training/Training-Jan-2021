using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Models;

namespace UberAPI.Code.Interfaces
{
    public interface ITripRepo : IGenericRepo<Trip>
    {
        IEnumerable<VTripsData> GetAllTrips(int id);
        VTripsData GetTrip(long id, long tripId );
        VTripsData SetNewTrip(int id, long source, long destination, RideType rideType);
        VTripsData UpdateTrip(UpdateTripInput updateTripInput);
    }
}
