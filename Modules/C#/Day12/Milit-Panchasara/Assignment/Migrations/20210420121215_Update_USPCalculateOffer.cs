using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignment.Migrations
{
    public partial class Update_USPCalculateOffer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var query = @"
                ALTER PROCEDURE usp_CalculateOffer
                    @OrderId int
                AS
                BEGIN
                    SET NOCOUNT ON;
					DECLARE @output int;
                    SET @output = (SELECT 
                        CASE WHEN SUM(t.Price*o.Quantity) > 10000 THEN SUM(t.Price*o.Quantity)*0.20
                             WHEN SUM(t.Price*o.Quantity) > 5000 THEN SUM(t.Price*o.Quantity)*0.15
                             WHEN SUM(t.Price*o.Quantity) > 3000 THEN SUM(t.Price*o.Quantity)*0.10
                             WHEN SUM(t.Price*o.Quantity) > 1500 THEN SUM(t.Price*o.Quantity)*0.05
                             ELSE 0 END AS OfferAmount
                    FROM Toys AS t 
                    JOIN OrderItems AS o 
                    ON o.ToyId = t.Id
                    WHERE o.OrderId = @OrderId GROUP BY OrderId);

                    UPDATE Orders SET OfferAmount = @output WHERE Id = @OrderId;

					SELECT @output AS OfferAmount;
                END";

            migrationBuilder.Sql(query);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            var query = @"
                ALTER PROCEDURE usp_CalculateOffer
                    @OrderId int
                AS
                BEGIN
                    SET NOCOUNT ON;
					DECLARE @output int;
                    SET @output = (SELECT 
                        CASE WHEN SUM(t.Price) > 10000 THEN SUM(t.Price)*0.20
                             WHEN SUM(t.Price) > 5000 THEN SUM(t.Price)*0.15
                             WHEN SUM(t.Price) > 3000 THEN SUM(t.Price)*0.10
                             WHEN SUM(t.Price) > 1500 THEN SUM(t.Price)*0.05
                             ELSE 0 END AS OfferAmount
                    FROM Toys AS t 
                    JOIN OrderItems AS o 
                    ON o.ToyId = t.Id
                    WHERE o.OrderId = @OrderId GROUP BY OrderId);

					SELECT @output AS OfferAmount;
                END";

            migrationBuilder.Sql(query);
        }
    }
}
