DROP TABLE Players;
DROP TABLE Blinds;
DROP TABLE Room;

CREATE TABLE [dbo].[Room] (
    [Room_Code]        INT           NOT NULL,
    [Room_Name]        NVARCHAR (50) NOT NULL,
    [Room_Create_Date] DATETIME      NULL,
    [Round_Nr]         INT           DEFAULT ((1)) NOT NULL,
    [Tbl_Min_Size]     INT           NOT NULL,
    [Started]          CHAR (1)      DEFAULT ((0)) NOT NULL,
    [Chip_1_Worth]     INT           NOT NULL,
    [Chip_2_Worth]     INT           NOT NULL,
    [Chip_3_Worth]     INT           NOT NULL,
    [Chip_4_Worth]     INT           NOT NULL,
    [Chip_5_Worth]     INT           NOT NULL,
    [Round_Time]       TIME (7)      NOT NULL,
    [Pause_Time]       TIME (7)      NULL,
    [Blind_Time]       TIME (7)      NULL,
    [Started_Time]     DATETIME      NULL,
    [Allow_Rebuy]      INT           NOT NULL,
    [Start_Value]      INT           NOT NULL,
    [Tbl_Amount]       INT           NOT NULL,
    [Tbl_Max_Size]     INT           NOT NULL,
    [Blind_Round]      INT           DEFAULT ((0)) NOT NULL,
    PRIMARY KEY CLUSTERED ([Room_Code] ASC)
);

CREATE TABLE Players
(
    [Name]      NVARCHAR (50) NOT NULL,
    [Room_Code] INT           NOT NULL,
    [Tbl_nr]    INT           NULL,
    [Rebuy]     INT           NULL,
	[Active]	INT			  NULL,
    PRIMARY KEY CLUSTERED ([Name] ASC, [Room_Code] ASC),
    CONSTRAINT [FK_Player_Room_Code] FOREIGN KEY ([Room_Code])
		REFERENCES [dbo].[Room] ([Room_Code])
		ON DELETE CASCADE
		ON UPDATE CASCADE
)

CREATE TABLE [dbo].[Blinds] (
    [Room_Code] INT NOT NULL,
    [ID]        INT NOT NULL,
    [ValueSB]   INT NOT NULL,
    [ValueBB]   INT NOT NULL,
    PRIMARY KEY CLUSTERED ([Room_Code] ASC, [ID] ASC),
    CONSTRAINT [FK_Blind_Room_Code] FOREIGN KEY ([Room_Code])
		REFERENCES [dbo].[Room] ([Room_Code])
		ON DELETE CASCADE
		ON UPDATE CASCADE
);