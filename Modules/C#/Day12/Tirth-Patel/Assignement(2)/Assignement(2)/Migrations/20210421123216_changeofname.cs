using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignement_2_.Migrations
{
    public partial class changeofname : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Categories",
                newName: "C_Name");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "C_Name",
                table: "Categories",
                newName: "Name");
        }
    }
}
