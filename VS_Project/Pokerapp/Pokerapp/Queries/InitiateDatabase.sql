DROP TABLE Players;
CREATE TABLE Players
(
    [Name] NVARCHAR(50) NOT NULL , 
    [Room_Code] INT NOT NULL, 
    [Tbl_nr] INT NULL, 
    [Rebuy] INT NULL,
    PRIMARY KEY ([Name],[Room_Code]), 
)


DROP TABLE Room;
CREATE TABLE Room 
(
    [Room_Code]     INT      NOT NULL,
    [Tbl_Min_Size]  INT      NOT NULL,
    [Started]       CHAR (1) NOT NULL,
    [Chip_1_Worth]  INT      NOT NULL,
    [Chip_2_Worth]  INT      NOT NULL,
    [Chip_3_Worth]  INT      NOT NULL,
    [Chip_4_Worth]  INT      NOT NULL,
    [Chip_5_Worth]  INT      NOT NULL,
    [Round_Time]    TIME (7) NOT NULL,
    [Pause_Time]    TIME (7) NULL,
    [Blind_Time]    TIME (7) NULL,
    [Allow_Rebuy]   INT      NOT NULL,
    [Start_Value]   INT      NOT NULL,
    [Tbl_Amount]    INT      NOT NULL,
    [Tbl_Max_Size]  INT      NOT NULL,
	[Blind_Round]	INT		 NOT NULL,
    [Small_Blind]   INT      NOT NULL,
    [Big_Blind]     INT      NOT NULL,
    PRIMARY KEY CLUSTERED ([Room_Code] ASC)
);

DROP TABLE Blinds;
CREATE TABLE Blinds
(
[Room_Code] INT NOT NULL,
[ID] INT NOT NULL,
[S_B] CHAR(1) NOT NULL,
[Value] INT NOT NULL,
PRIMARY KEY ([Room_Code],[ID], [S_B]), 
);
