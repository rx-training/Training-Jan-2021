USE [SampleDB]
GO

/****** Object:  Table [dbo].[Allocation]    Script Date: 03-03-2021 23:11:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Allocation](
	[AllocationId] [int] NOT NULL,
	[EmpId] [int] NOT NULL,
	[ProdId] [int] NOT NULL,
 CONSTRAINT [PK_Allocation] PRIMARY KEY CLUSTERED 
(
	[AllocationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Allocation]  WITH CHECK ADD  CONSTRAINT [FK_Allocation_Employees] FOREIGN KEY([EmpId])
REFERENCES [dbo].[Employees] ([EmployeesId])
GO

ALTER TABLE [dbo].[Allocation] CHECK CONSTRAINT [FK_Allocation_Employees]
GO

ALTER TABLE [dbo].[Allocation]  WITH CHECK ADD  CONSTRAINT [FK_Allocation_Products] FOREIGN KEY([ProdId])
REFERENCES [dbo].[Products] ([ProductID])
ON DELETE CASCADE
GO

ALTER TABLE [dbo].[Allocation] CHECK CONSTRAINT [FK_Allocation_Products]
GO


