using Microsoft.EntityFrameworkCore.Migrations;

namespace UberAPI.Migrations
{
    public partial class TripView : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sql = @"CREATE VIEW vTripsData
                        AS
                        SELECT 
                        T.TripID,
                        R.RiderID AS RiderId,
                        D.DriverID AS DriverId,
                        R.FirstName + ' ' + R.LastName AS RiderName, 
                        D.FirstName + ' ' + D.LastName AS DriverName, 
                        L1.LocationName AS SourceLocation, 
                        L2.LocationName AS DestinationLocation,
                        RT.RideName,
                        V.VehicleBrand,
		                V.VehicleName,
		                V.RegistrationNo,
                        StartTime,
                        EndTime,
                        Status,
                        EstimatedFairAmount,
                        ActualFairAmount,
                        CancelledBy
                        FROM Trips AS T
                        JOIN Riders.Riders AS R ON R.RiderID = T.RiderID
                        JOIN Drivers.Drivers AS D ON D.DriverID = T.DriverID
                        JOIN Locations AS L1 ON L1.LocationID = T.SourceLocationID
                        JOIN Locations AS L2 ON L2.LocationID = T.DestinationLocationID
                        JOIN RideTypes RT ON RT.RideTypeID = T.RideTypeID
	                    JOIN Drivers.Vehicles V ON V.DriverID = D.DriverID
                        GO";
            migrationBuilder.Sql(sql);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            var sql = @"DROP VIEW vTripsData";
            migrationBuilder.Sql(sql);
        }
    }
}
