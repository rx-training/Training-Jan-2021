IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602052415_UpdateMoviesTbl')
BEGIN
    ALTER TABLE [Movies] ADD [BackgroundImage] varchar(1000) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602052415_UpdateMoviesTbl')
BEGIN
    ALTER TABLE [Movies] ADD [Cast] varchar(2000) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602052415_UpdateMoviesTbl')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20210602052415_UpdateMoviesTbl', N'5.0.5');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602062400_UpdateMoviesAndEventsTbl')
BEGIN
    ALTER TABLE [Movies] ADD [CastImages] varchar(max) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602062400_UpdateMoviesAndEventsTbl')
BEGIN
    ALTER TABLE [Events] ADD [About] varchar(5000) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602062400_UpdateMoviesAndEventsTbl')
BEGIN
    ALTER TABLE [Events] ADD [ArtistImage] varchar(1000) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602062400_UpdateMoviesAndEventsTbl')
BEGIN
    ALTER TABLE [Events] ADD [ArtistName] varchar(500) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602062400_UpdateMoviesAndEventsTbl')
BEGIN
    ALTER TABLE [Events] ADD [BackgroundImage] varchar(1000) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602062400_UpdateMoviesAndEventsTbl')
BEGIN
    ALTER TABLE [Events] ADD [Disclaimer] varchar(max) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602062400_UpdateMoviesAndEventsTbl')
BEGIN
    ALTER TABLE [Events] ADD [FAQs] varchar(max) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602062400_UpdateMoviesAndEventsTbl')
BEGIN
    ALTER TABLE [Events] ADD [MinAge] int NOT NULL DEFAULT 3;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602062400_UpdateMoviesAndEventsTbl')
BEGIN
    ALTER TABLE [Events] ADD [Note] varchar(max) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602062400_UpdateMoviesAndEventsTbl')
BEGIN
    ALTER TABLE [Events] ADD [TermsAndConditions] varchar(max) NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210602062400_UpdateMoviesAndEventsTbl')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20210602062400_UpdateMoviesAndEventsTbl', N'5.0.5');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210603084034_UpdateTheatreMoviesTable')
BEGIN
    ALTER TABLE [TheatresMovies] ADD [EndDate] date NULL DEFAULT '2021-09-21';
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210603084034_UpdateTheatreMoviesTable')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20210603084034_UpdateTheatreMoviesTable', N'5.0.5');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210609151556_CreateDynamicNavbarTbl')
BEGIN
    CREATE TABLE [DynamicNavbars] (
        [NavbarId] int NOT NULL IDENTITY,
        [Name] varchar(50) NULL,
        CONSTRAINT [PK_DynamicNavbars] PRIMARY KEY ([NavbarId])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210609151556_CreateDynamicNavbarTbl')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20210609151556_CreateDynamicNavbarTbl', N'5.0.5');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210624123237_AddIsActiveInTbls')
BEGIN
    ALTER TABLE [Movies] ADD [IsActive] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210624123237_AddIsActiveInTbls')
BEGIN
    ALTER TABLE [EventVenues] ADD [IsActive] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210624123237_AddIsActiveInTbls')
BEGIN
    ALTER TABLE [Events] ADD [IsActive] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210624123237_AddIsActiveInTbls')
BEGIN
    ALTER TABLE [DynamicNavbars] ADD [IsActive] bit NOT NULL DEFAULT CAST(0 AS bit);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210624123237_AddIsActiveInTbls')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20210624123237_AddIsActiveInTbls', N'5.0.5');
END;
GO

COMMIT;
GO

