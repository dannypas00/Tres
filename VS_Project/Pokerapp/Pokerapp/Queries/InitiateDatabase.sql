DROP TABLE Players;
CREATE TABLE Players
(
	[Name] NVARCHAR(50) NOT NULL , 
    [Room_Code] INT NOT NULL, 
    [Tbl_nr] INT NOT NULL, 
    PRIMARY KEY ([Name],[Room_Code]), 
)


DROP TABLE Room;
CREATE TABLE Room
(
	[Room_Code] INT NOT NULL PRIMARY KEY,
	[Nr_Of_Players] INT NOT NULL,
	[Tbl_Min_Size] INT NOT NULL,
	[Started] CHAR(1) NOT NULL,
	[Chip_1_Worth] INT NOT NULL,
	[Chip_2_Worth] INT NOT NULL,
	[Chip_3_Worth] INT NOT NULL,
	[Chip_4_Worth] INT NOT NULL,
	[Chip_5_Worth] INT NOT NULL,
	[Round_Time] TIME NOT NULl,
	[Tbl_Max_Amount] INT NOT NULL, 
);

