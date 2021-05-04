using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignment1.Migrations
{
    public partial class updatingDBContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_empAssigned_emps_assignmentsid",
                table: "empAssigned");

            migrationBuilder.DropPrimaryKey(
                name: "PK_emps",
                table: "emps");

            migrationBuilder.RenameTable(
                name: "emps",
                newName: "empAssignment");

            migrationBuilder.AddPrimaryKey(
                name: "PK_empAssignment",
                table: "empAssignment",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_empAssigned_empAssignment_assignmentsid",
                table: "empAssigned",
                column: "assignmentsid",
                principalTable: "empAssignment",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_empAssigned_empAssignment_assignmentsid",
                table: "empAssigned");

            migrationBuilder.DropPrimaryKey(
                name: "PK_empAssignment",
                table: "empAssignment");

            migrationBuilder.RenameTable(
                name: "empAssignment",
                newName: "emps");

            migrationBuilder.AddPrimaryKey(
                name: "PK_emps",
                table: "emps",
                column: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_empAssigned_emps_assignmentsid",
                table: "empAssigned",
                column: "assignmentsid",
                principalTable: "emps",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
