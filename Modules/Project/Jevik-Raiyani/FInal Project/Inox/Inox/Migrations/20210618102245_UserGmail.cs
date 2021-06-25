using Microsoft.EntityFrameworkCore.Migrations;

namespace Inox.Migrations
{
    public partial class UserGmail : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_RegisterModel_RegisterModelEmail",
                table: "Tickets");

            migrationBuilder.DropForeignKey(
                name: "FK_Tickets_User",
                table: "Tickets");

            migrationBuilder.DropTable(
                name: "RegisterModel");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_RegisterModelEmail",
                table: "Tickets");

            migrationBuilder.DropIndex(
                name: "IX_Tickets_UserGmail",
                table: "Tickets");

            migrationBuilder.DropColumn(
                name: "RegisterModelEmail",
                table: "Tickets");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "RegisterModelEmail",
                table: "Tickets",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "RegisterModel",
                columns: table => new
                {
                    Email = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RegisterModel", x => x.Email);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_RegisterModelEmail",
                table: "Tickets",
                column: "RegisterModelEmail");

            migrationBuilder.CreateIndex(
                name: "IX_Tickets_UserGmail",
                table: "Tickets",
                column: "UserGmail");

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_RegisterModel_RegisterModelEmail",
                table: "Tickets",
                column: "RegisterModelEmail",
                principalTable: "RegisterModel",
                principalColumn: "Email",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Tickets_User",
                table: "Tickets",
                column: "UserGmail",
                principalTable: "User",
                principalColumn: "UserGmail",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
