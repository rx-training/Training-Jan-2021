using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignment.Migrations
{
    public partial class AddedForeignKeyToToyTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_OrderItems_ToyId",
                table: "OrderItems",
                column: "ToyId");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItems_Toys_ToyId",
                table: "OrderItems",
                column: "ToyId",
                principalTable: "Toys",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderItems_Toys_ToyId",
                table: "OrderItems");

            migrationBuilder.DropIndex(
                name: "IX_OrderItems_ToyId",
                table: "OrderItems");
        }
    }
}
