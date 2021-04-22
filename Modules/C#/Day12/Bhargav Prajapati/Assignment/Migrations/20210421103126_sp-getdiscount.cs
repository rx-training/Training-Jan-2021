using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignment.Migrations
{
    public partial class spgetdiscount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE PROCEDURE [dbo].[DiscountPrice]
                    @Name varchar(50)
                AS
                BEGIN
                    SET NOCOUNT ON;
                    select * from Toys where ToyName=@Name;
                END";
            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
