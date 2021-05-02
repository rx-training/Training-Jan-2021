using Microsoft.EntityFrameworkCore.Migrations;

namespace ToyAssignment.Migrations
{
    public partial class Toyprice : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Toyprice",
                table: "Toys",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Toyprice",
                table: "Toys");
        }
    }
}
