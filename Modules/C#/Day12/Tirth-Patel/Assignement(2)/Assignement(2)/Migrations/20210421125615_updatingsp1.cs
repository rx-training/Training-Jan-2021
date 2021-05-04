using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignement_2_.Migrations
{
    public partial class updatingsp1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CategoryID",
                table: "Toys");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CategoryID",
                table: "Toys",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
