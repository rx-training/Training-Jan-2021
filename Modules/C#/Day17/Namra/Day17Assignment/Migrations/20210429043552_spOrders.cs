using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Day17Assignment.Migrations
{
    public partial class spOrders : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            var spOrder = @"
						CREATE PROCEDURE spOrders
							(
								@PatientId INT
							)
						AS
						BEGIN
							BEGIN TRY
								IF(@PatientId IN (SELECT PatientId FROM Patients))
									BEGIN 
										DECLARE @Bill INT;
										SET @Bill = (SELECT SUM(Quantity * Price) FROM TranscriptDrugs t
															INNER JOIN Drugs d on d.DrugId = t.DrugId);
										INSERT INTO Transcript(PatientId,Doctors,Assistants,Drugs,Bill) VALUES
											(	
												@PatientId,
												(SELECT * FROM TranscriptDoctors FOR JSON PATH),
												(SELECT * FROM TranscriptAssistants FOR JSON PATH),
												(SELECT * FROM TranscriptDrugs FOR JSON PATH),
												@Bill
											);
									END
								ELSE
									RAISERROR('Patient is not found..',16,1);
							END TRY
							BEGIN CATCH
								PRINT ERROR_MESSAGE();
							END CATCH
						END";
			migrationBuilder.Sql(spOrder);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
			var spOrder = @"Drop PRocedure spOrders";
			migrationBuilder.Sql(spOrder);
            
        }
    }
}
