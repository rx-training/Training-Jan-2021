using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignmwnt10.Migrations
{
    public partial class spToys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"CREATE PROCEDURE CreateToys @OId Int,@OQuantity Int,@amt Int, @dic int ,@nAmt int,@Tid int,@Cid int
        AS
        BEGIN
        SET NOCOUNT ON;
        Insert into Order(
           [OrderQuantity]
           ,[Amount]
            ,[OfferDiscount]
            ,[NetAmount]
            ,[ToyId]
            ,[CustomerId]
           )
    Values (@OId, @OQuantity,@amt,@dic,@nAmt,@Tid,@Cid)
    END
    GO";
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
