using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignement_2_.Migrations
{
    public partial class getallprods : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp1 = @"Create Procedure GetAllproducts
                AS BEGIN
                        SET NOCOUNT ON
                            Select * FROM Toys t Join Categories c on t.CategoriesCategoryID = c.CategoryID ;
                    END;";
            migrationBuilder.Sql(sp1);

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
