using Microsoft.EntityFrameworkCore.Migrations;

namespace Assignment.Migrations
{
    public partial class OrderTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Toys_Toys_OrderToyId",
                table: "Toys");

            migrationBuilder.DropIndex(
                name: "IX_Toys_OrderToyId",
                table: "Toys");

            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "Toys");

            migrationBuilder.DropColumn(
                name: "OrderItem",
                table: "Toys");

            migrationBuilder.DropColumn(
                name: "OrderToyId",
                table: "Toys");

            migrationBuilder.DropColumn(
                name: "PayAmount",
                table: "Toys");

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    OrderId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderItem = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PayAmount = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.OrderId);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Toys_OrderId",
                table: "Toys",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_Toys_Orders_OrderId",
                table: "Toys",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "OrderId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Toys_Orders_OrderId",
                table: "Toys");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropIndex(
                name: "IX_Toys_OrderId",
                table: "Toys");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "Toys",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "OrderItem",
                table: "Toys",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OrderToyId",
                table: "Toys",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PayAmount",
                table: "Toys",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Toys_OrderToyId",
                table: "Toys",
                column: "OrderToyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Toys_Toys_OrderToyId",
                table: "Toys",
                column: "OrderToyId",
                principalTable: "Toys",
                principalColumn: "ToyId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
