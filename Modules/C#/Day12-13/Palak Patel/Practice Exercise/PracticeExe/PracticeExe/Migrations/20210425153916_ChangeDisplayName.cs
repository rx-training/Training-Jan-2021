using Microsoft.EntityFrameworkCore.Migrations;

namespace PracticeExe.Migrations
{
    public partial class ChangeDisplayName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "DisplayName",
                table: "Users",
                newName: "display_name");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "display_name",
                table: "Users",
                newName: "DisplayName");
        }
    }
}
