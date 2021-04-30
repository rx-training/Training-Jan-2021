using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UberAPI.Code.Interfaces;
using UberAPI.Models;

namespace UberAPI.Code.RepositoryDB
{
    public class TripRepo : GenericRepo<Trip>, ITripRepo
    {
        public TripRepo(UberContext context): base(context)
        {
        }

        public IEnumerable<VTripsData> GetAllTrips(int id)
        {
            return context.VTripsData.Where(x => x.RiderId == id).ToList();
        }

        public VTripsData GetTrip(long id, long tripId)
        {
            return context.VTripsData.Where(x => x.TripId == tripId && x.RiderId == id).SingleOrDefault();
        }

        public VTripsData SetNewTrip(int id, long source, long destination, RideType rideType)
        {
            try
            {
                object[] lspParam = new object[] 
                { 
                    new SqlParameter("@RiderID", Convert.ToInt64(id)),
                    new SqlParameter("@DriverID", Convert.ToInt64(5)),
                    new SqlParameter("@SourceLocationID", source),
                    new SqlParameter("@DestinationLocationID", destination),
                    new SqlParameter("@RideTypeID", rideType.RideTypeId),
                    new SqlParameter("@Status", "New"),
                    new SqlParameter("@EstimatedFairAmount", Convert.ToDouble(100)),
                };

                int rowAfftected = context.Database.ExecuteSqlRaw(@"EXEC usp_SaveNewTripData @RiderID, 
                                                            @DriverID, 
                                                            @SourceLocationID, 
                                                            @DestinationLocationID,
                                                            @RideTypeID, 
                                                            @Status,
                                                            @EstimatedFairAmount",
                                                        lspParam);

                if(rowAfftected < 1)
                {
                    return null;
                }

                var trip = context.VTripsData.Where(x => x.RiderId == id && x.Status == "New").FirstOrDefault();
                return trip;
            }
            catch (Exception)
            {

                throw;
            }
            
        }

        public VTripsData UpdateTrip(UpdateTripInput updateTripInput)
        {
            try
            {
                object[] lspParam;
                int rowAfftected;
                if (updateTripInput.Action != "TripStarted")
                {
                    var trip = context.VTripsData.Where(x => x.TripId == updateTripInput.TripId).FirstOrDefault();

                    lspParam = new object[]
                    {
                    new SqlParameter("@Action", updateTripInput.Action),
                    new SqlParameter("@TripID", updateTripInput.TripId),
                    new SqlParameter("@ActualFairAmount", trip.EstimatedFairAmount),
                    new SqlParameter("@PaymentMethod", updateTripInput.PaymentMethod),
                    new SqlParameter("@CancelledBy", (updateTripInput.CancelledBy == null) ? String.Empty : updateTripInput.CancelledBy)
                    };

                    rowAfftected = context.Database.ExecuteSqlRaw(@"EXEC usp_UpdateTripData @Action,
                                                            @TripID, 
                                                            @ActualFairAmount,
                                                            @PaymentMethod, 
                                                            @CancelledBy",
                                                        lspParam);
                }
                else
                {
                    lspParam = new object[]
                    {
                    new SqlParameter("@Action", updateTripInput.Action),
                    new SqlParameter("@TripID", updateTripInput.TripId),
                    };

                    rowAfftected = context.Database.ExecuteSqlRaw(@"EXEC usp_UpdateTripData @Action,
                                                            @TripID",
                                                        lspParam);
                }
                
                if (rowAfftected < 1)
                {
                    return null;
                }

                var tripNew = context.VTripsData.Where(x => x.TripId == updateTripInput.TripId).FirstOrDefault();
                return tripNew;
            }
            catch (Exception)
            {

                throw;
            }

        }
    }
}
