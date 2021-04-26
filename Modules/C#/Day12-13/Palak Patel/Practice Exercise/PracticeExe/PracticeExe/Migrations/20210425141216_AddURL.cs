using Microsoft.EntityFrameworkCore.Migrations;

namespace PracticeExe.Migrations
{
    public partial class AddURL : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "URL",
                table: "Blogs",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "URL",
                table: "Blogs");
        }
    }
}
