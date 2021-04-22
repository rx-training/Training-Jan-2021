using Microsoft.EntityFrameworkCore.Migrations;

namespace ConsoleApp1.Migrations
{
    public partial class m2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    AddressID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    State = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Country = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.AddressID);
                });

            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustomerID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustomerID);
                });

            migrationBuilder.CreateTable(
                name: "Plants",
                columns: table => new
                {
                    PlantId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PlantName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Plants", x => x.PlantId);
                });

            migrationBuilder.CreateTable(
                name: "CustomerWithAddresses",
                columns: table => new
                {
                    CAId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomersCustomerID = table.Column<int>(type: "int", nullable: true),
                    AddressesAddressID = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CustomerWithAddresses", x => x.CAId);
                    table.ForeignKey(
                        name: "FK_CustomerWithAddresses_Addresses_AddressesAddressID",
                        column: x => x.AddressesAddressID,
                        principalTable: "Addresses",
                        principalColumn: "AddressID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_CustomerWithAddresses_Customers_CustomersCustomerID",
                        column: x => x.CustomersCustomerID,
                        principalTable: "Customers",
                        principalColumn: "CustomerID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "TypeOfToys",
                columns: table => new
                {
                    TypeId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ToyType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PlantsPlantId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TypeOfToys", x => x.TypeId);
                    table.ForeignKey(
                        name: "FK_TypeOfToys_Plants_PlantsPlantId",
                        column: x => x.PlantsPlantId,
                        principalTable: "Plants",
                        principalColumn: "PlantId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Toys",
                columns: table => new
                {
                    ToyId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ToyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TypeOfToyTypeId = table.Column<int>(type: "int", nullable: true),
                    ToyPrice = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Toys", x => x.ToyId);
                    table.ForeignKey(
                        name: "FK_Toys_TypeOfToys_TypeOfToyTypeId",
                        column: x => x.TypeOfToyTypeId,
                        principalTable: "TypeOfToys",
                        principalColumn: "TypeId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    OrderId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustomerWithAddressCAId = table.Column<int>(type: "int", nullable: true),
                    ToysToyId = table.Column<int>(type: "int", nullable: true),
                    Quantaty = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.OrderId);
                    table.ForeignKey(
                        name: "FK_Orders_CustomerWithAddresses_CustomerWithAddressCAId",
                        column: x => x.CustomerWithAddressCAId,
                        principalTable: "CustomerWithAddresses",
                        principalColumn: "CAId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Orders_Toys_ToysToyId",
                        column: x => x.ToysToyId,
                        principalTable: "Toys",
                        principalColumn: "ToyId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_CustomerWithAddresses_AddressesAddressID",
                table: "CustomerWithAddresses",
                column: "AddressesAddressID");

            migrationBuilder.CreateIndex(
                name: "IX_CustomerWithAddresses_CustomersCustomerID",
                table: "CustomerWithAddresses",
                column: "CustomersCustomerID");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_CustomerWithAddressCAId",
                table: "Orders",
                column: "CustomerWithAddressCAId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ToysToyId",
                table: "Orders",
                column: "ToysToyId");

            migrationBuilder.CreateIndex(
                name: "IX_Toys_TypeOfToyTypeId",
                table: "Toys",
                column: "TypeOfToyTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_TypeOfToys_PlantsPlantId",
                table: "TypeOfToys",
                column: "PlantsPlantId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "CustomerWithAddresses");

            migrationBuilder.DropTable(
                name: "Toys");

            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "TypeOfToys");

            migrationBuilder.DropTable(
                name: "Plants");
        }
    }
}
