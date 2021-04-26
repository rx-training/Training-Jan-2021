using Microsoft.EntityFrameworkCore.Migrations;

namespace EFAssignment_Day12.Migrations
{
    public partial class spScheme : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var scheme = @"CREATE PROCEDURE [dbo].[Scheme] @Price decimal(10,2)
                AS
                BEGIN
                    SET NOCOUNT ON
                    UPDATE Orders
                    SET Price = CASE
                        WHEN Price >= 750 THEN Price * 5/100 + Price
                        WHEN Price >= 1000 THEN Price * 10/100 + Price
                        ELSE Price
                    END 
                    SELECT * FROM Orders
                END";
            migrationBuilder.Sql(scheme);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            var sql = "DROP PROCEDURE Scheme";
            migrationBuilder.Sql(sql);
        }
    }
}

