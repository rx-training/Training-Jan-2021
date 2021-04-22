using Microsoft.EntityFrameworkCore.Migrations;

namespace ConsoleApp1.Migrations
{
    public partial class m3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE PROCEDURE [dbo].[GetOrderDetails]
                    
                AS
                BEGIN
                    SET NOCOUNT ON;
                    select * from Orders 
                END";

            migrationBuilder.Sql(sp);
        
    }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
