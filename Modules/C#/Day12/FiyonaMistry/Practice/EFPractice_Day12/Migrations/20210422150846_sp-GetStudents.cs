using Microsoft.EntityFrameworkCore.Migrations;

namespace EFPractice_Day12.Migrations
{
    public partial class spGetStudents : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE PROCEDURE [dbo].[GetStudents]
                    @Name varchar(50)
                AS
                BEGIN
                    SET NOCOUNT ON;
                    select * from Students where Name like @Name +'%'
                END";

            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
