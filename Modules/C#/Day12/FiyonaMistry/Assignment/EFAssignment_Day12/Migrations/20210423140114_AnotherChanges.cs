using Microsoft.EntityFrameworkCore.Migrations;

namespace EFAssignment_Day12.Migrations
{
    public partial class AnotherChanges : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CustomerOrders_Orders_OrdersOrderId",
                table: "CustomerOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_CustomerOrders_Toys_ToysToyId",
                table: "CustomerOrders");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CustomerOrders",
                table: "CustomerOrders");

            migrationBuilder.RenameTable(
                name: "CustomerOrders",
                newName: "OrderToys");

            migrationBuilder.RenameColumn(
                name: "Locality",
                table: "Addresses",
                newName: "City");

            migrationBuilder.RenameIndex(
                name: "IX_CustomerOrders_ToysToyId",
                table: "OrderToys",
                newName: "IX_OrderToys_ToysToyId");

            migrationBuilder.RenameIndex(
                name: "IX_CustomerOrders_OrdersOrderId",
                table: "OrderToys",
                newName: "IX_OrderToys_OrdersOrderId");

            migrationBuilder.AlterColumn<double>(
                name: "Price",
                table: "Orders",
                type: "float",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderToys",
                table: "OrderToys",
                columns: new[] { "ToyId", "OrderId" });

            migrationBuilder.AddForeignKey(
                name: "FK_OrderToys_Orders_OrdersOrderId",
                table: "OrderToys",
                column: "OrdersOrderId",
                principalTable: "Orders",
                principalColumn: "OrderId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderToys_Toys_ToysToyId",
                table: "OrderToys",
                column: "ToysToyId",
                principalTable: "Toys",
                principalColumn: "ToyId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderToys_Orders_OrdersOrderId",
                table: "OrderToys");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderToys_Toys_ToysToyId",
                table: "OrderToys");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderToys",
                table: "OrderToys");

            migrationBuilder.RenameTable(
                name: "OrderToys",
                newName: "CustomerOrders");

            migrationBuilder.RenameColumn(
                name: "City",
                table: "Addresses",
                newName: "Locality");

            migrationBuilder.RenameIndex(
                name: "IX_OrderToys_ToysToyId",
                table: "CustomerOrders",
                newName: "IX_CustomerOrders_ToysToyId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderToys_OrdersOrderId",
                table: "CustomerOrders",
                newName: "IX_CustomerOrders_OrdersOrderId");

            migrationBuilder.AlterColumn<float>(
                name: "Price",
                table: "Orders",
                type: "real",
                nullable: false,
                oldClrType: typeof(double),
                oldType: "float");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CustomerOrders",
                table: "CustomerOrders",
                columns: new[] { "ToyId", "OrderId" });

            migrationBuilder.AddForeignKey(
                name: "FK_CustomerOrders_Orders_OrdersOrderId",
                table: "CustomerOrders",
                column: "OrdersOrderId",
                principalTable: "Orders",
                principalColumn: "OrderId",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_CustomerOrders_Toys_ToysToyId",
                table: "CustomerOrders",
                column: "ToysToyId",
                principalTable: "Toys",
                principalColumn: "ToyId",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
