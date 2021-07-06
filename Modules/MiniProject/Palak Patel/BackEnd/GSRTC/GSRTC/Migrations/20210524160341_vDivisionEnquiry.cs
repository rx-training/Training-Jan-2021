using Microsoft.EntityFrameworkCore.Migrations;

namespace GSRTC.Migrations
{
    public partial class vDivisionEnquiry : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sql = @"CREATE VIEW vDivisionEnquiry AS
                        SELECT e.DivisionName, d.BusStand, d.EnquiryNo FROM Enquiries e JOIN Divisions d ON 
                        e.EnquiryID=d.EnquiryfkID
                        GO";
            migrationBuilder.Sql(sql);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            var sql = @"DROP VIEW vDivisionEnquiry";
            migrationBuilder.Sql(sql);
        }
    }
}
