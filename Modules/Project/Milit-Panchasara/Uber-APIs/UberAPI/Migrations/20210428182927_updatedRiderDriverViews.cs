using Microsoft.EntityFrameworkCore.Migrations;

namespace UberAPI.Migrations
{
    public partial class updatedRiderDriverViews : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sql = @"ALTER   VIEW [Riders].[vRiders]
                        AS
                        SELECT 
                        RiderID, 
                        FirstName,
                        LastName,
                        Email,
                        ContactNumber,
                        InviteCode,
                        Country,
                        ModifiedAt
                        FROM Riders.Riders
                        GO";
            migrationBuilder.Sql(sql);

            sql = @"ALTER   VIEW [Drivers].[vDrivers]
                    AS
                    SELECT 
                    DriverID, 
                    FirstName,
                    LastName,
                    Email,
                    ContactNumber,
                    ModifiedAt
                    FROM Drivers.Drivers
                    GO";
            migrationBuilder.Sql(sql);


        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            var sql = @"ALTER   VIEW [Riders].[vRiders]
                        AS
                        SELECT 
                        RiderID, 
                        FirstName,
                        LastName,
                        Email,
                        EmailVerified,
                        IsNew,
                        ContactNumber,
                        InviteCode,
                        Country,
                        IsBlocked,
                        IsLoggedIn,
                        SessionExpiresIn,
                        CreatedAt,
                        ModifiedAt
                        FROM Riders.Riders
                        GO";
            migrationBuilder.Sql(sql);

            sql = @"ALTER   VIEW [Drivers].[vDrivers]
                    AS
                    SELECT 
                    DriverID, 
                    FirstName,
                    LastName,
                    Email,
                    EmailVerified,
                    ContactNumber,
                    TotalRidesDone,
                    TotalRidesCancelled,
                    Salary,
                    IsBlocked,
                    IsLoggedIn,
                    SessionExpiresIn,
                    CreatedAt,
                    ModifiedAt
                    FROM Drivers.Drivers
                    GO";
            migrationBuilder.Sql(sql);
        }
    }
}
