using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignment.Migrations
{
    public partial class createSP : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE PROCEDURE [dbo].[Discount]
                    @Amount int, @orderId int
                AS
                BEGIN
                    DECLARE @UpdateAmount int
                    SET NOCOUNT ON;
                    IF @orderId % 2 = 0
                        SET @UpdateAmount = @Amount + (@Amount*0.10)
                    ELSE
                       BEGIN
                        SET @UpdateAmount = @Amount + (@Amount*0.05)
                       END
                    UPDATE [dbo].[Orders]
                        SET PayAmount=@UpdateAmount WHERE OrderId = @orderId
                END";

            migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
