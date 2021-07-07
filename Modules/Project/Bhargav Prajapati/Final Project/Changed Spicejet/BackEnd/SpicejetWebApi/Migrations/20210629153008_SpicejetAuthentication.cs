using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SpicejetWebApi.Migrations
{
    public partial class SpicejetAuthentication : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.CreateTable(
            //    name: "AirplaneDetail",
            //    columns: table => new
            //    {
            //        AirplaneId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        AirplaneName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        ManufactureDate = table.Column<DateTime>(type: "date", nullable: false),
            //        AirplaneModel = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        ManufactureCompony = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        SeatingCapacity = table.Column<int>(type: "int", nullable: false)
            //    },
                //constraints: table =>
                //{
                //    table.PrimaryKey("PK_AirplaneDetail", x => x.AirplaneId);
                //});

            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            //migrationBuilder.CreateTable(
            //    name: "CostDetails",
            //    columns: table => new
            //    {
            //        CostId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Amount = table.Column<int>(type: "int", nullable: false),
            //        Tax = table.Column<double>(type: "float", nullable: false),
            //        TotelCost = table.Column<double>(type: "float", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_CostDetails", x => x.CostId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "HotelCostDetails",
            //    columns: table => new
            //    {
            //        CostId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Amount = table.Column<int>(type: "int", nullable: false),
            //        Tax = table.Column<double>(type: "float", nullable: false),
            //        TotelAmount = table.Column<double>(type: "float", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_HotelCostDetails", x => x.CostId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "HotelDetails",
            //    columns: table => new
            //    {
            //        HotelId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        HotelName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        HotelCity = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        HotelState = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        HotelAddress = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        PinNumber = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        Rating = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        NumberOfRoomAvailable = table.Column<int>(type: "int", nullable: false),
            //        HotelContectNumber = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false),
            //        HotelEmailAddress = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        ImgPath1 = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        ImgPath2 = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        ImgPath3 = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        ImgPath4 = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_HotelDetails", x => x.HotelId);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "TripDetail",
            //    columns: table => new
            //    {
            //        TripId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        DepartureAirportName = table.Column<string>(type: "varchar(90)", unicode: false, maxLength: 90, nullable: false),
            //        ArrivedAirportName = table.Column<string>(type: "varchar(90)", unicode: false, maxLength: 90, nullable: false),
            //        DepatureCity = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        ArrivedCity = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        DepartDateTime = table.Column<DateTime>(type: "datetime", nullable: false),
            //        ArrivedDateTime = table.Column<DateTime>(type: "datetime", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_TripDetail", x => x.TripId);
            //    });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            //migrationBuilder.CreateTable(
            //    name: "ListofHotelDetails",
            //    columns: table => new
            //    {
            //        ListId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        CostId = table.Column<int>(type: "int", nullable: false),
            //        HotelId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_ListofHotelDetails", x => x.ListId);
            //        table.ForeignKey(
            //            name: "FK_ListofHotelDetails_HotelCostDetails",
            //            column: x => x.CostId,
            //            principalTable: "HotelCostDetails",
            //            principalColumn: "CostId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_ListofHotelDetails_HotelDetails",
            //            column: x => x.HotelId,
            //            principalTable: "HotelDetails",
            //            principalColumn: "HotelId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "UserHotelBookingDetails",
            //    columns: table => new
            //    {
            //        UserId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        UserFirstName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        UserMiddleName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
            //        UserLastName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        UserConformationNumber = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        UserContactNumber = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false),
            //        UserEmailAddress = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        NumberOfGuest = table.Column<int>(type: "int", nullable: false),
            //        BookingDateTime = table.Column<DateTime>(type: "datetime", nullable: false),
            //        CostId = table.Column<int>(type: "int", nullable: false),
            //        HotelId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_UserHotelBookingDetails", x => x.UserId);
            //        table.ForeignKey(
            //            name: "FK_UserHotelBookingDetails_HotelCostDetails",
            //            column: x => x.CostId,
            //            principalTable: "HotelCostDetails",
            //            principalColumn: "CostId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_UserHotelBookingDetails_HotelDetails",
            //            column: x => x.HotelId,
            //            principalTable: "HotelDetails",
            //            principalColumn: "HotelId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "RouteDetail",
            //    columns: table => new
            //    {
            //        RouteId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        TripId = table.Column<int>(type: "int", nullable: false),
            //        CostId = table.Column<int>(type: "int", nullable: false),
            //        AirplaneId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_RouteDetail", x => x.RouteId);
            //        table.ForeignKey(
            //            name: "FK_RouteDetail_AirplaneDetail",
            //            column: x => x.AirplaneId,
            //            principalTable: "AirplaneDetail",
            //            principalColumn: "AirplaneId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_RouteDetail_CostDetails",
            //            column: x => x.CostId,
            //            principalTable: "CostDetails",
            //            principalColumn: "CostId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_RouteDetail_TripDetail",
            //            column: x => x.TripId,
            //            principalTable: "TripDetail",
            //            principalColumn: "TripId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "UserFlightBookingDetails",
            //    columns: table => new
            //    {
            //        UserId = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        PnrNumber = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        UserFirstName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: false),
            //        UserMiddleName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
            //        UserLastName = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
            //        UserContactNumber = table.Column<string>(type: "varchar(10)", unicode: false, maxLength: 10, nullable: false),
            //        UserEmail = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
            //        BookingDateTime = table.Column<DateTime>(type: "datetime", nullable: false),
            //        AirplaneId = table.Column<int>(type: "int", nullable: false),
            //        CostId = table.Column<int>(type: "int", nullable: false),
            //        TripId = table.Column<int>(type: "int", nullable: false)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_UserFlightBookingDetails", x => x.UserId);
            //        table.ForeignKey(
            //            name: "FK_UserFlightBookingDetails_AirplaneDetail",
            //            column: x => x.AirplaneId,
            //            principalTable: "AirplaneDetail",
            //            principalColumn: "AirplaneId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_UserFlightBookingDetails_CostDetails",
            //            column: x => x.CostId,
            //            principalTable: "CostDetails",
            //            principalColumn: "CostId",
            //            onDelete: ReferentialAction.Restrict);
            //        table.ForeignKey(
            //            name: "FK_UserFlightBookingDetails_TripDetail",
            //            column: x => x.TripId,
            //            principalTable: "TripDetail",
            //            principalColumn: "TripId",
            //            onDelete: ReferentialAction.Restrict);
            //    });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            //migrationBuilder.CreateIndex(
            //    name: "IX_ListofHotelDetails_CostId",
            //    table: "ListofHotelDetails",
            //    column: "CostId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_ListofHotelDetails_HotelId",
            //    table: "ListofHotelDetails",
            //    column: "HotelId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_RouteDetail_AirplaneId",
            //    table: "RouteDetail",
            //    column: "AirplaneId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_RouteDetail_CostId",
            //    table: "RouteDetail",
            //    column: "CostId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_RouteDetail_TripId",
            //    table: "RouteDetail",
            //    column: "TripId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_UserFlightBookingDetails_AirplaneId",
            //    table: "UserFlightBookingDetails",
            //    column: "AirplaneId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_UserFlightBookingDetails_CostId",
            //    table: "UserFlightBookingDetails",
            //    column: "CostId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_UserFlightBookingDetails_TripId",
            //    table: "UserFlightBookingDetails",
            //    column: "TripId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_UserHotelBookingDetails_CostId",
            //    table: "UserHotelBookingDetails",
            //    column: "CostId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_UserHotelBookingDetails_HotelId",
            //    table: "UserHotelBookingDetails",
            //    column: "HotelId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            //migrationBuilder.DropTable(
            //    name: "ListofHotelDetails");

            //migrationBuilder.DropTable(
            //    name: "RouteDetail");

            //migrationBuilder.DropTable(
            //    name: "UserFlightBookingDetails");

            //migrationBuilder.DropTable(
            //    name: "UserHotelBookingDetails");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            //migrationBuilder.DropTable(
            //    name: "AirplaneDetail");

            //migrationBuilder.DropTable(
            //    name: "CostDetails");

            //migrationBuilder.DropTable(
            //    name: "TripDetail");

            //migrationBuilder.DropTable(
            //    name: "HotelCostDetails");

            //migrationBuilder.DropTable(
            //    name: "HotelDetails");
        }
    }
}
