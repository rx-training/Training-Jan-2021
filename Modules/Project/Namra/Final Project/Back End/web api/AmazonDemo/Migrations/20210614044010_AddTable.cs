using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AmazonDemo.Migrations
{
    public partial class AddTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder )
        {
            migrationBuilder.AddColumn<int>(
                name: "SalerId",
                table: "PlacedOrder",
                type: "int",
                nullable: false,
                defaultValue: 0);
            
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SalerId",
                table: "PlacedOrder");
        }
    }
}
