using Microsoft.EntityFrameworkCore.Migrations;

namespace GSRTC.Migrations
{
    public partial class TripDetailView : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sql = @"CREATE VIEW vTripDetail
                        AS
                        SELECT bk.TicketID AS PNRNo, 
                        bk.Onward AS DateOfJourney,
                        b.Origin AS ServiceStartPlace, 
                        bk.Onward AS PassangerStartPoint, 
                        r.DepartureTime, 
                        b.BusType+' '+b.RoutType AS ClassOfService, 
                        b.Destination AS ServiceEndPoint, 
                        bk.Destination AS PassangerEndPoint,
                        bk.TicketID+' '+b.BusID AS TripCode, 
                        bk.Seat AS NoOfSeat, bk.SeatNo,
                        r.Price
                        FROM Buses b JOIN Routes r ON 
                        b.BusID=r.BusfkID JOIN Bookings bk ON 
                        bk.TRoutefkID=r.RouteID
                        GO";
            migrationBuilder.Sql(sql);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            var sql = @"DROP VIEW vTripDetail";
            migrationBuilder.Sql(sql);
        }
    }
}
