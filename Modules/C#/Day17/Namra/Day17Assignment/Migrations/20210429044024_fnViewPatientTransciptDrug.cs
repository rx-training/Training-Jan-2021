using Microsoft.EntityFrameworkCore.Migrations;

namespace Day17Assignment.Migrations
{
    public partial class fnViewPatientTransciptDrug : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var fn = @"
                        CREATE Function vPatientDrugs
                        (
	                        @TranscriptID INT
                        )
                        RETURNS TABLE
                        AS
                        RETURN(
	                        SELECT *,(Price * (SELECT Quantity FROM OPENJSON((SELECT Drugs
		                        FROM Transcript WHERE TranscriptID = @TranscriptId)) 
		                        WITH(DrugId INT '$.DrugId',Quantity INT '$.Quantity')WHERE d.DrugId = DrugId))'Total_Drug_Price'
	                        FROM Drugs d
	                        WHERE d.DrugId IN 
 		                        (SELECT DrugId FROM OPENJSON((SELECT Drugs
		                        FROM Transcript WHERE TranscriptID = 1)) 
		                        WITH(DrugId INT '$.DrugId',Quantity INT '$.Quantity'))
                        );
                     ";
            migrationBuilder.Sql(fn);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            var fn = @"DROP FUNCTION vPatientDrugs";
            migrationBuilder.Sql(fn);
        }
    }
}
