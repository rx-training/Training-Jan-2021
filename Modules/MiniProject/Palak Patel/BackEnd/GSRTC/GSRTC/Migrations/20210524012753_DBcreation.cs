using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GSRTC.Migrations
{
    public partial class DBcreation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Agents",
                columns: table => new
                {
                    AgentID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNo = table.Column<int>(type: "int", nullable: false),
                    MobileNo = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Profession = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AgencyAdd = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DepotName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Aadhaar = table.Column<int>(type: "int", nullable: false),
                    PAN = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BankName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IFSC = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AccountNo = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agents", x => x.AgentID);
                });

            migrationBuilder.CreateTable(
                name: "Buses",
                columns: table => new
                {
                    BusID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    BusName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Origin = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Destination = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RoutType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Buses", x => x.BusID);
                });

            migrationBuilder.CreateTable(
                name: "CommuterPasses",
                columns: table => new
                {
                    ApplicationNo = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EntryDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    PassType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PassangerType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CommuterName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Category = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MobileNo = table.Column<int>(type: "int", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DOB = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Occupation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Education = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrgName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OrgAdd = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FromDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ToDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    FromPlace = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ToPlace = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RouteCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ViaPlace = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BusPassIssueLocation = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClassOfService = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NoOfDays = table.Column<int>(type: "int", nullable: false),
                    TotalFee = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CommuterPasses", x => x.ApplicationNo);
                });

            migrationBuilder.CreateTable(
                name: "Enquiries",
                columns: table => new
                {
                    EnquiryID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DivisionName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Enquiries", x => x.EnquiryID);
                });

            migrationBuilder.CreateTable(
                name: "Wallets",
                columns: table => new
                {
                    WalletID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MobileNo = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    DOB = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Wallets", x => x.WalletID);
                });

            migrationBuilder.CreateTable(
                name: "Routes",
                columns: table => new
                {
                    RouteID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Destination = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Source = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RouteName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<int>(type: "int", nullable: false),
                    ArrivalTime = table.Column<TimeSpan>(type: "time", nullable: false),
                    DepartureTime = table.Column<TimeSpan>(type: "time", nullable: false),
                    BusfkID = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Routes", x => x.RouteID);
                    table.ForeignKey(
                        name: "FK_Routes_Buses_BusfkID",
                        column: x => x.BusfkID,
                        principalTable: "Buses",
                        principalColumn: "BusID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Divisions",
                columns: table => new
                {
                    DivisionID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BusStand = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EnquiryNo = table.Column<int>(type: "int", nullable: false),
                    EnquiryfkID = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Divisions", x => x.DivisionID);
                    table.ForeignKey(
                        name: "FK_Divisions_Enquiries_EnquiryfkID",
                        column: x => x.EnquiryfkID,
                        principalTable: "Enquiries",
                        principalColumn: "EnquiryID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Bookings",
                columns: table => new
                {
                    TicketID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Source = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Destination = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Onward = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Return = table.Column<DateTime>(type: "datetime2", nullable: true),
                    Seat = table.Column<int>(type: "int", nullable: false),
                    SingleLady = table.Column<bool>(type: "bit", nullable: false),
                    SeatNo = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MobileNo = table.Column<int>(type: "int", nullable: false),
                    Age = table.Column<int>(type: "int", nullable: false),
                    Gender = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ways = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TRoutefkID = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    TBusfkID = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Bookings", x => x.TicketID);
                    table.ForeignKey(
                        name: "FK_Bookings_Buses_TBusfkID",
                        column: x => x.TBusfkID,
                        principalTable: "Buses",
                        principalColumn: "BusID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Bookings_Routes_TRoutefkID",
                        column: x => x.TRoutefkID,
                        principalTable: "Routes",
                        principalColumn: "RouteID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_TBusfkID",
                table: "Bookings",
                column: "TBusfkID");

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_TRoutefkID",
                table: "Bookings",
                column: "TRoutefkID");

            migrationBuilder.CreateIndex(
                name: "IX_Divisions_EnquiryfkID",
                table: "Divisions",
                column: "EnquiryfkID");

            migrationBuilder.CreateIndex(
                name: "IX_Routes_BusfkID",
                table: "Routes",
                column: "BusfkID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Agents");

            migrationBuilder.DropTable(
                name: "Bookings");

            migrationBuilder.DropTable(
                name: "CommuterPasses");

            migrationBuilder.DropTable(
                name: "Divisions");

            migrationBuilder.DropTable(
                name: "Wallets");

            migrationBuilder.DropTable(
                name: "Routes");

            migrationBuilder.DropTable(
                name: "Enquiries");

            migrationBuilder.DropTable(
                name: "Buses");
        }
    }
}
