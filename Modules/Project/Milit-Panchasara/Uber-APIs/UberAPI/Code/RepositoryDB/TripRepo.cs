﻿using Geolocation;
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

        public long? FindDriver(long rideTypeId)
        {
            // assigning random driver to trip who is currently not doing any trips
            var driverIds = context.Drivers.Include(x => x.Trips).Include(x => x.Vehicles).Where(x => !x.Trips.Any(x => x.Status == TripStatus.Started || x.Status == TripStatus.New) && x.Vehicles.Any(x => x.CurrentRideTypeId == rideTypeId)).Select(x => x.DriverId).ToList();
            if (driverIds.Count == 0) return null;
            var index = new Random().Next(driverIds.Count);
            var driver = driverIds[index];
            return driver;
        }

        public IEnumerable<VTripsData> GetAllTrips(int id)
        {
            return context.VTripsData.Where(x => x.RiderId == id).ToList();
        }

        public IEnumerable<VTripsData> GetAllTripsForDriver(int id)
        {
            return context.VTripsData.Where(x => x.DriverId == id).ToList();
        }

        public VTripsData GetTrip(long id, long tripId)
        {
            return context.VTripsData.Where(x => x.TripId == tripId && x.RiderId == id).SingleOrDefault();
        }

        public VTripsData GetTripForDriver(long id, long tripId)
        {
            return context.VTripsData.Where(x => x.TripId == tripId && x.DriverId == id).SingleOrDefault();
        }

        public VTripsData SetNewTrip(int id, long riderId, Location source, Location destination, RideType rideType)
        {
            try
            {
                // Calculating Distance using co-ordinates of source and destination
                var distance = GeoCalculator.GetDistance(source.Latitude, source.Longitude, destination.Latitude, destination.Longitude, 2, DistanceUnit.Kilometers);
                var estimatedFairAmount = distance * rideType.PricePerKm;

                // params for Stored procedure
                object[] lspParam = new object[] 
                { 
                    new SqlParameter("@RiderID", riderId),
                    new SqlParameter("@DriverID", Convert.ToInt64(id)),
                    new SqlParameter("@SourceLocationID", source.LocationId),
                    new SqlParameter("@DestinationLocationID", destination.LocationId),
                    new SqlParameter("@RideTypeID", rideType.RideTypeId),
                    new SqlParameter("@Status", TripStatus.New),
                    new SqlParameter("@EstimatedFairAmount", estimatedFairAmount),
                };

                // executing Stored procedure
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

                // fetching result from view
                var trip = context.VTripsData.Where(x => x.RiderId == riderId && x.Status == TripStatus.New).FirstOrDefault();
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
                if (updateTripInput.Action != TripAction.TripStarted)
                {
                    var trip = context.VTripsData.Where(x => x.TripId == updateTripInput.TripId).FirstOrDefault();

                    // params for Stored procedure
                    lspParam = new object[]
                    {
                    new SqlParameter("@Action", updateTripInput.Action),
                    new SqlParameter("@TripID", updateTripInput.TripId),
                    new SqlParameter("@ActualFairAmount", trip.EstimatedFairAmount),
                    new SqlParameter("@PaymentMethod", updateTripInput.PaymentMethod),
                    new SqlParameter("@CancelledBy", (updateTripInput.CancelledBy == null) ? String.Empty : updateTripInput.CancelledBy)
                    };

                    // executing Stored procedure
                    rowAfftected = context.Database.ExecuteSqlRaw(@"EXEC usp_UpdateTripData @Action,
                                                            @TripID, 
                                                            @ActualFairAmount,
                                                            @PaymentMethod, 
                                                            @CancelledBy",
                                                        lspParam);
                }
                else
                {
                    // params for Stored procedure
                    lspParam = new object[]
                    {
                    new SqlParameter("@Action", updateTripInput.Action),
                    new SqlParameter("@TripID", updateTripInput.TripId),
                    };

                    // executing Stored procedure
                    rowAfftected = context.Database.ExecuteSqlRaw(@"EXEC usp_UpdateTripData @Action,
                                                            @TripID",
                                                        lspParam);
                }
                
                if (rowAfftected < 1)
                {
                    return null;
                }

                // fetching result from view
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
