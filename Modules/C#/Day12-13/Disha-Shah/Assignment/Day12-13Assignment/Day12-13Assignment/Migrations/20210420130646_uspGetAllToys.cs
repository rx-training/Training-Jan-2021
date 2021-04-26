using Microsoft.EntityFrameworkCore.Migrations;

namespace Day12_13Assignment.Migrations
{
    public partial class uspGetAllToys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE OR ALTER PROCEDURE [dbo].[uspGetAllToys]
                AS
                BEGIN
                    SET NOCOUNT ON;
                    select * from Toys
                END";

            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP PROCEDURE uspGetAllToys");
        }
    }
}
