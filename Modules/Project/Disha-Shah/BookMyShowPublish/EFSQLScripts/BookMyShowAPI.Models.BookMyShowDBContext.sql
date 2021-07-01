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

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625052704_ModifiedUserTbl')
BEGIN
    DECLARE @var0 sysname;
    SELECT @var0 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Users]') AND [c].[name] = N'Password');
    IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [Users] DROP CONSTRAINT [' + @var0 + '];');
    ALTER TABLE [Users] ALTER COLUMN [Password] nvarchar(max) NOT NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625052704_ModifiedUserTbl')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20210625052704_ModifiedUserTbl', N'5.0.5');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625085824_AddOtpColumn')
BEGIN
    ALTER TABLE [Users] ADD [Otp] int NOT NULL DEFAULT 0;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625085824_AddOtpColumn')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20210625085824_AddOtpColumn', N'5.0.5');
END;
GO

COMMIT;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    DECLARE @var1 sysname;
    SELECT @var1 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[MovieBookings]') AND [c].[name] = N'City');
    IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [MovieBookings] DROP CONSTRAINT [' + @var1 + '];');
    ALTER TABLE [MovieBookings] DROP COLUMN [City];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    DECLARE @var2 sysname;
    SELECT @var2 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[MovieBookings]') AND [c].[name] = N'FilmCategory');
    IF @var2 IS NOT NULL EXEC(N'ALTER TABLE [MovieBookings] DROP CONSTRAINT [' + @var2 + '];');
    ALTER TABLE [MovieBookings] DROP COLUMN [FilmCategory];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    DECLARE @var3 sysname;
    SELECT @var3 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[MovieBookings]') AND [c].[name] = N'Language');
    IF @var3 IS NOT NULL EXEC(N'ALTER TABLE [MovieBookings] DROP CONSTRAINT [' + @var3 + '];');
    ALTER TABLE [MovieBookings] DROP COLUMN [Language];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    DECLARE @var4 sysname;
    SELECT @var4 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[MovieBookings]') AND [c].[name] = N'Movie');
    IF @var4 IS NOT NULL EXEC(N'ALTER TABLE [MovieBookings] DROP CONSTRAINT [' + @var4 + '];');
    ALTER TABLE [MovieBookings] DROP COLUMN [Movie];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    DECLARE @var5 sysname;
    SELECT @var5 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[MovieBookings]') AND [c].[name] = N'Screen');
    IF @var5 IS NOT NULL EXEC(N'ALTER TABLE [MovieBookings] DROP CONSTRAINT [' + @var5 + '];');
    ALTER TABLE [MovieBookings] DROP COLUMN [Screen];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    DECLARE @var6 sysname;
    SELECT @var6 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[MovieBookings]') AND [c].[name] = N'ShowTiming');
    IF @var6 IS NOT NULL EXEC(N'ALTER TABLE [MovieBookings] DROP CONSTRAINT [' + @var6 + '];');
    ALTER TABLE [MovieBookings] DROP COLUMN [ShowTiming];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    DECLARE @var7 sysname;
    SELECT @var7 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[MovieBookings]') AND [c].[name] = N'Theatre');
    IF @var7 IS NOT NULL EXEC(N'ALTER TABLE [MovieBookings] DROP CONSTRAINT [' + @var7 + '];');
    ALTER TABLE [MovieBookings] DROP COLUMN [Theatre];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    DECLARE @var8 sysname;
    SELECT @var8 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[MovieBookings]') AND [c].[name] = N'UserContact');
    IF @var8 IS NOT NULL EXEC(N'ALTER TABLE [MovieBookings] DROP CONSTRAINT [' + @var8 + '];');
    ALTER TABLE [MovieBookings] DROP COLUMN [UserContact];
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD [CityId] int NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD [FilmCategoryId] int NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD [LanguageId] int NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD [MovieId] int NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD [ScreenId] int NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD [ShowTimingId] int NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD [TheatreId] int NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD [UserId] int NULL;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    CREATE INDEX [IX_MovieBookings_CityId] ON [MovieBookings] ([CityId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    CREATE INDEX [IX_MovieBookings_FilmCategoryId] ON [MovieBookings] ([FilmCategoryId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    CREATE INDEX [IX_MovieBookings_LanguageId] ON [MovieBookings] ([LanguageId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    CREATE INDEX [IX_MovieBookings_MovieId] ON [MovieBookings] ([MovieId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    CREATE INDEX [IX_MovieBookings_ScreenId] ON [MovieBookings] ([ScreenId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    CREATE INDEX [IX_MovieBookings_ShowTimingId] ON [MovieBookings] ([ShowTimingId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    CREATE INDEX [IX_MovieBookings_TheatreId] ON [MovieBookings] ([TheatreId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    CREATE INDEX [IX_MovieBookings_UserId] ON [MovieBookings] ([UserId]);
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD CONSTRAINT [MovieBookings_Cities_CityId_FK] FOREIGN KEY ([CityId]) REFERENCES [Cities] ([CityId]) ON DELETE NO ACTION;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD CONSTRAINT [MovieBookings_FilmCategories_FilmCategoryId_FK] FOREIGN KEY ([FilmCategoryId]) REFERENCES [FilmCategories] ([FilmCategoryId]) ON DELETE NO ACTION;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD CONSTRAINT [MovieBookings_Languages_LanguageId_FK] FOREIGN KEY ([LanguageId]) REFERENCES [Languages] ([LanguageId]) ON DELETE NO ACTION;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD CONSTRAINT [MovieBookings_Movies_MovieId_FK] FOREIGN KEY ([MovieId]) REFERENCES [Movies] ([MovieId]) ON DELETE NO ACTION;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD CONSTRAINT [MovieBookings_Screens_ScreenId_FK] FOREIGN KEY ([ScreenId]) REFERENCES [Screens] ([ScreenId]) ON DELETE NO ACTION;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD CONSTRAINT [MovieBookings_ShowTimings_ShowTimingId_FK] FOREIGN KEY ([ShowTimingId]) REFERENCES [ShowTimings] ([ShowTimingId]) ON DELETE NO ACTION;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD CONSTRAINT [MovieBookings_Theatres_TheatreId_FK] FOREIGN KEY ([TheatreId]) REFERENCES [Theatres] ([TheatreId]) ON DELETE NO ACTION;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    ALTER TABLE [MovieBookings] ADD CONSTRAINT [MovieBookings_Users_UserId_FK] FOREIGN KEY ([UserId]) REFERENCES [Users] ([UserId]) ON DELETE NO ACTION;
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210625125152_ModifiedMovieBookingsTbl')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20210625125152_ModifiedMovieBookingsTbl', N'5.0.5');
END;
GO

COMMIT;
GO

