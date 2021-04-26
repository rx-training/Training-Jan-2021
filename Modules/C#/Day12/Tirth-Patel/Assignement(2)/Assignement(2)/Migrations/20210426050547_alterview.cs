using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignement_2_.Migrations
{
    public partial class alterview : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp1 = @"Alter Procedure GetAllproducts
                AS BEGIN
                        SET NOCOUNT ON
                            Select t.name ,t.toyid,t.price ,c.C_name ,c.categoryId,c.ManufacturingPlantID FROM Toys t Join Categories c on t.CategoriesCategoryID = c.CategoryID ;
                    END;";
            migrationBuilder.Sql(sp1);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
           
        }
    }
}
