using Microsoft.EntityFrameworkCore.Migrations;

namespace CodeFirst.Migrations
{
    public partial class uspCreateStudents : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE PROCEDURE [dbo].[CreateStudents]
                    @FirstName varchar(50),
                    @DOB DATETIME,
                    @GradeId INT
                AS
                BEGIN
                    SET NOCOUNT ON;
                    Insert into Students values (@FirstName, @DOB, @GradeId)
                END";

            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
