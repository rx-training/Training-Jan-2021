using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignement_2_.Migrations
{
    public partial class secondview : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp1 = @"Create Procedure SerachCategoryWise @categoryName varchar(max)
                                    AS BEGIN
	                                    SET NOCOUNT ON
		                                Select t.name ,t.toyid,t.price ,c.C_name ,c.categoryId,c.ManufacturingPlantID From Toys t join Categories c on t.CategoriesCategoryID = c.CategoryID
		                                Where c.C_Name = @categoryName
	                            END
                        ";
            migrationBuilder.Sql(sp1);
            //make sure to give alias to map this stored procedure output to viewmodel class with properNames
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
