using Microsoft.EntityFrameworkCore.Migrations;

namespace GSRTC.Migrations
{
    public partial class vBusRoutes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sql = @"CREATE VIEW vBusRoutes AS 
                        SELECT b.BusID,b.BusName, b.Origin AS BusOrigin, b.Destination AS BusDestination, 
                        b.RoutType, b.BusType, b.Price AS BusPrice, r.RouteName,
                        r.Destination AS RouteDestination, r.Source AS RouteSource,
                        r.Price AS RoutePrice, r.ArrivalTIme, r.DepartureTime
                        FROM Buses b JOIN Routes r ON b.BusID=r.BusfkID
                        GO";

            migrationBuilder.Sql(sql);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            var sql = @"DROP VIEW vBusRoutes";

            migrationBuilder.Sql(sql);
        }
    }
}
