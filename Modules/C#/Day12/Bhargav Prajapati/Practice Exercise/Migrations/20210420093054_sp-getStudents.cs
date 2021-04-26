using Microsoft.EntityFrameworkCore.Migrations;

namespace Practice_Exercise.Migrations
{
    public partial class spgetStudents : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE PROCEDURE [dbo].[getStudent]
                    @FirstName nvarchar(MAX)
                AS
                BEGIN
                    SET NOCOUNT ON;
                    select * from Students where FirstName like @FirstName +'%'
                END";

            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
