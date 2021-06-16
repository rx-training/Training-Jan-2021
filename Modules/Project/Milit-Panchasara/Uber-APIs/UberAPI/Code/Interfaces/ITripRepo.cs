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
        IEnumerable<VTripsData> GetAllTripsForDriver(int id);
        VTripsData GetTrip(long id, long tripId );
        VTripsData GetTripForDriver(long id, long tripId);
        VTripsData SetNewTrip(int id, long riderId, Location source, Location destination, RideType rideType);
        VTripsData UpdateTrip(UpdateTripInput updateTripInput);

        long? FindDriver(long rideTypeId);
    }
}
