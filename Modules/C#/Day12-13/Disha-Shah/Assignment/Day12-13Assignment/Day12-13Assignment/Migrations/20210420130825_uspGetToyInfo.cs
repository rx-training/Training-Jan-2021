using Microsoft.EntityFrameworkCore.Migrations;

namespace Day12_13Assignment.Migrations
{
    public partial class uspGetToyInfo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE OR ALTER PROCEDURE [dbo].[uspGetToyInfo]
                    @Name VARCHAR(50)
                AS
                BEGIN
                    SET NOCOUNT ON;
                    SELECT * FROM Toys WHERE Name = @Name
                END";

            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP PROCEDURE uspGetToyInfo");
        }
    }
}
