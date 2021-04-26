using Microsoft.EntityFrameworkCore.Migrations;

namespace Day14.Migrations
{
    public partial class spAddToy : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var sp = @"
                        CREATE PROCEDURE spToyAdd
						(
							@ToyName VARCHAR(50),
							@Price INT,
							@PlantName VARCHAR(50),
							@TypeName VARCHAR(50)
						)
						AS
						BEGIN 
							SET NOCOUNT ON;
								INSERT INTO Toys(ToyName , Price, PlantId, TypeId) Values
									(
										@ToyName,
										@Price,
										(SELECT PlantId FROM Plants WHERE PlantName = @PlantName),
										(SELECT TypeId FROM TypeOfToys WHERE TypeName = @TypeName)
									);
							SET NOCOUNT OFF;
						END
                    ";
			migrationBuilder.Sql(sp);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
			var sp = @"DROP PROCEDURE spToyAdd";
			migrationBuilder.Sql(sp);
		}
    }
}
