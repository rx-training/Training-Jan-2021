USE [Day16]
GO

/****** Object:  Table [dbo].[AdDetails]    Script Date: 01-04-2021 12:49:25 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[AdDetails](
	[AdID] [int] IDENTITY(1,1) NOT NULL,
	[Category] [nvarchar](50) NULL,
	[Title] [nvarchar](50) NULL,
	[Description] [nvarchar](250) NULL,
	[Price] [money] NULL,
	[Condition] [nvarchar](50) NULL,
	[City] [nvarchar](50) NULL,
	[ContactNumber] [nvarchar](10) NULL,
 CONSTRAINT [PK_AdDetails] PRIMARY KEY CLUSTERED 
(
	[AdID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[AdDetails]  WITH CHECK ADD  CONSTRAINT [FK_AdDetails_City] FOREIGN KEY([City])
REFERENCES [dbo].[Locations] ([City])
GO

ALTER TABLE [dbo].[AdDetails] CHECK CONSTRAINT [FK_AdDetails_City]
GO

ALTER TABLE [dbo].[AdDetails]  WITH CHECK ADD  CONSTRAINT [FK_AdDetails_ContactNumber] FOREIGN KEY([ContactNumber])
REFERENCES [dbo].[Users] ([ContactNumber])
GO

ALTER TABLE [dbo].[AdDetails] CHECK CONSTRAINT [FK_AdDetails_ContactNumber]
GO


/****** Object:  Table [dbo].[Admin]    Script Date: 01-04-2021 12:50:31 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Admin](
	[AdminID] [int] NOT NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
 CONSTRAINT [PK_Admin] PRIMARY KEY CLUSTERED 
(
	[AdminID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


/****** Object:  Table [dbo].[Contacts]    Script Date: 01-04-2021 12:50:37 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Contacts](
	[AdID] [int] NOT NULL,
	[ContactNumber] [nvarchar](10) NULL,
	[AlternateContactNumber] [nvarchar](10) NULL,
 CONSTRAINT [PK_Contacts] PRIMARY KEY CLUSTERED 
(
	[AdID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Contacts]  WITH CHECK ADD  CONSTRAINT [FK_Contacts_AdDetails] FOREIGN KEY([AdID])
REFERENCES [dbo].[AdDetails] ([AdID])
GO

ALTER TABLE [dbo].[Contacts] CHECK CONSTRAINT [FK_Contacts_AdDetails]
GO


/****** Object:  Table [dbo].[Images]    Script Date: 01-04-2021 12:50:45 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Images](
	[ImgID] [int] IDENTITY(1,1) NOT NULL,
	[AdID] [int] NULL,
	[Image] [varbinary](max) NULL,
 CONSTRAINT [PK_Images] PRIMARY KEY CLUSTERED 
(
	[ImgID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Images]  WITH CHECK ADD  CONSTRAINT [FK_Images_AdDetails] FOREIGN KEY([AdID])
REFERENCES [dbo].[AdDetails] ([AdID])
GO

ALTER TABLE [dbo].[Images] CHECK CONSTRAINT [FK_Images_AdDetails]
GO


/****** Object:  Table [dbo].[ItemTransactions]    Script Date: 01-04-2021 12:50:51 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ItemTransactions](
	[ServiceID] [int] NOT NULL,
	[Quantity] [int] NULL,
	[CartTotal] [int] NULL,
 CONSTRAINT [PK_ItemTransactions] PRIMARY KEY CLUSTERED 
(
	[ServiceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[ItemTransactions]  WITH CHECK ADD  CONSTRAINT [FK_ItemTransactions_Services] FOREIGN KEY([ServiceID])
REFERENCES [dbo].[Services] ([ServiceID])
GO

ALTER TABLE [dbo].[ItemTransactions] CHECK CONSTRAINT [FK_ItemTransactions_Services]
GO


/****** Object:  Table [dbo].[Locations]    Script Date: 01-04-2021 12:50:57 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Locations](
	[City] [nvarchar](50) NOT NULL,
	[State] [nvarchar](50) NULL,
 CONSTRAINT [PK_Locations] PRIMARY KEY CLUSTERED 
(
	[City] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Locations]  WITH CHECK ADD  CONSTRAINT [FK_Locations_Locations] FOREIGN KEY([City])
REFERENCES [dbo].[Locations] ([City])
GO

ALTER TABLE [dbo].[Locations] CHECK CONSTRAINT [FK_Locations_Locations]
GO


/****** Object:  Table [dbo].[Posts]    Script Date: 01-04-2021 12:51:01 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Posts](
	[AdID] [int] NOT NULL,
	[ServiceID] [int] NULL,
 CONSTRAINT [PK_Posts] PRIMARY KEY CLUSTERED 
(
	[AdID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Posts]  WITH CHECK ADD  CONSTRAINT [FK_Posts_AdDetails] FOREIGN KEY([AdID])
REFERENCES [dbo].[AdDetails] ([AdID])
GO

ALTER TABLE [dbo].[Posts] CHECK CONSTRAINT [FK_Posts_AdDetails]
GO


/****** Object:  Table [dbo].[Services]    Script Date: 01-04-2021 12:51:06 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Services](
	[ServiceID] [int] NOT NULL,
	[ServiceTitle] [nvarchar](max) NULL,
	[Price] [int] NULL,
 CONSTRAINT [PK_Services] PRIMARY KEY CLUSTERED 
(
	[ServiceID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Services]  WITH CHECK ADD  CONSTRAINT [FK_Services_ServicesAvailable] FOREIGN KEY([ServiceID])
REFERENCES [dbo].[ServicesAvailable] ([ServiceID])
GO

ALTER TABLE [dbo].[Services] CHECK CONSTRAINT [FK_Services_ServicesAvailable]
GO


/****** Object:  Table [dbo].[Users]    Script Date: 01-04-2021 12:51:12 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Users](
	[ContactNumber] [nvarchar](10) NOT NULL,
	[EmailID] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
	[FirstName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[Bio] [nvarchar](250) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[ContactNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


