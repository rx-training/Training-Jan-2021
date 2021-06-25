using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace AmazonDemo.Migrations
{
    public partial class AddTable1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "OrderTable",
                columns: table => new
                {
                    PlacedOrderID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Products = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Bill = table.Column<int>(type: "int", nullable: false),
                    AddressId = table.Column<int>(type: "int", nullable: false),
                    PlacedStatus = table.Column<int>(type: "int", nullable: false),
                    PlacedDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderTables", x => x.PlacedOrderID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderTable");
        }
    }
}
