using Microsoft.EntityFrameworkCore.Migrations;

namespace ToyAssignment.Migrations
{
    public partial class crateToyFactorydb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Customerid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Customername = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Customerphoneno = table.Column<long>(type: "bigint", nullable: false),
                    CustomerAddress = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.Customerid);
                });

            migrationBuilder.CreateTable(
                name: "Offers",
                columns: table => new
                {
                    Offerid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Offername = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Offers", x => x.Offerid);
                });

            migrationBuilder.CreateTable(
                name: "Toyplants",
                columns: table => new
                {
                    Toyplantid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Toyplantname = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Toyplants", x => x.Toyplantid);
                });

            migrationBuilder.CreateTable(
                name: "Toys",
                columns: table => new
                {
                    Toyid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Toyname = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Toyplantid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Toys", x => x.Toyid);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Orderid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Ordertableid = table.Column<int>(type: "int", nullable: false),
                    cusomerName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Toyid = table.Column<int>(type: "int", nullable: true),
                    offerid = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Orderid);
                    table.ForeignKey(
                        name: "FK_Orders_Toys_Toyid",
                        column: x => x.Toyid,
                        principalTable: "Toys",
                        principalColumn: "Toyid",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Orders_Toyid",
                table: "Orders",
                column: "Toyid");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Offers");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Toyplants");

            migrationBuilder.DropTable(
                name: "Toys");
        }
    }
}
