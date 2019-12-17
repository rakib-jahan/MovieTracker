USE [MovieTracker]
GO
/****** Object:  Table [dbo].[Genre]    Script Date: 18-Dec-19 1:08:32 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Genre](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[GenreName] [nvarchar](20) NULL,
 CONSTRAINT [PK_Genre] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Movie]    Script Date: 18-Dec-19 1:08:32 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Movie](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[Year] [int] NULL,
	[Runtime] [nvarchar](50) NULL,
	[Director] [nvarchar](200) NULL,
	[Actors] [nvarchar](500) NULL,
	[Plot] [nvarchar](max) NULL,
	[Poster] [nvarchar](300) NULL,
	[Metascore] [nvarchar](10) NULL,
	[ImdbRating] [nvarchar](10) NULL,
	[GenreId] [int] NULL,
 CONSTRAINT [PK_Movie] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Status]    Script Date: 18-Dec-19 1:08:32 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Status](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](15) NULL,
 CONSTRAINT [PK_Status] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 18-Dec-19 1:08:32 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NULL,
	[UserFullName] [nvarchar](50) NULL,
	[Password] [nvarchar](50) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserMovieDetails]    Script Date: 18-Dec-19 1:08:32 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserMovieDetails](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserMovieMappingId] [int] NOT NULL,
	[StatusId] [int] NOT NULL,
	[UserRating] [decimal](18, 0) NULL,
	[Comments] [nvarchar](max) NULL,
 CONSTRAINT [PK_UserMovieDetails] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserMovieMapping]    Script Date: 18-Dec-19 1:08:32 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserMovieMapping](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[MovieId] [int] NOT NULL,
 CONSTRAINT [PK_UserMovieMapping] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Genre] ON 

INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (1, N'Action')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (2, N'Adventure')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (3, N'Comedy')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (4, N'Drama')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (5, N'Fantasy')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (6, N'History')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (7, N'Thriller')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (8, N'Romance')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (9, N'War')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (10, N'Sport')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (11, N'Musical')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (12, N'Western')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (13, N'Horror')
INSERT [dbo].[Genre] ([Id], [GenreName]) VALUES (14, N'Science fiction')
SET IDENTITY_INSERT [dbo].[Genre] OFF
SET IDENTITY_INSERT [dbo].[Movie] ON 

INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (101, N'Green Book', 2018, N'130 min', N'Peter Farrelly', N'Viggo Mortensen, Mahershala Ali, Linda Cardellini, Sebastian Maniscalco', N'A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.', N'https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg', N'69', N'8.2', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (102, N'The Shape of Water ', 2017, N'123 min', N'Guillermo del Toro', N'Sally Hawkins, Octavia Spencer, Michael Shannon, Doug Jones', N'At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.', N'https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg', N'87', N'7.3', 5)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (103, N'Moonlight (I)', 2016, N'111 min', N'Barry Jenkins', N'Mahershala Ali, Naomie Harris, Trevante Rhodes, Alex R. Hibbert', N'A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.', N'https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg', N'99', N'7.4', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (104, N'Spotlight (I) ', 2015, N'129 min', N'Tom McCarthy ', N'Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber', N'The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.', N'https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_UX182_CR0,0,182,268_AL_.jpg', N'93', N'8.1', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (105, N'Birdman or (The Unexpected Virtue of Ignorance) ', 2014, N'119 min', N'Alejandro G. Iñárritu', N' Michael Keaton, Zach Galifianakis, Edward Norton, Andrea Riseborough', N'A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.', N'https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg', N'87', N'7.7', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (106, N'12 Years a Slave', 2013, N'134 min', N'Steve McQueen', N'Chiwetel Ejiofor, Michael Kenneth Williams, Michael Fassbender, Brad Pitt', N'In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.', N'https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg', N'8.1', N'96', 6)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (107, N'Argo', 2012, N'120 min', N'Ben Affleck ', N'Ben Affleck, Bryan Cranston, John Goodman, Alan Arkin', N'Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.', N'https://m.media-amazon.com/images/M/MV5BNzljNjY3MDYtYzc0Ni00YjU0LWIyNDUtNTE0ZDRiMGExMjZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg', N'86', N'7.7', 7)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (108, N'The Artist (I)', 2011, N'100 min', N'Michel Hazanavicius', N'Jean Dujardin, Bérénice Bejo, John Goodman, James Cromwell', N'An egomaniacal film star develops a relationship with a young dancer against the backdrop of Hollywoods silent e', N'https://m.media-amazon.com/images/M/MV5BMDUyZWU5N2UtOWFlMy00MTI0LTk0ZDYtMzFhNjljODBhZDA5XkEyXkFqcGdeQXVyNzA4ODc3ODU@._V1_UY268_CR3,0,182,268_AL_.jpg', N'89', N'7.9', 8)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (109, N'The Kings Speech', 2010, N'118 min', N'Tom Hooper', N'Colin Firth, Geoffrey Rush, Helena Bonham Carter, Derek Jacobi', N'The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.', N'https://m.media-amazon.com/images/M/MV5BMzU5MjEwMTg2Nl5BMl5BanBnXkFtZTcwNzM3MTYxNA@@._V1_UY268_CR0,0,182,268_AL_.jpg', N'88', N'8.0', 6)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (110, N'Slumdog Millionaire', 2008, N'120 min', N'Danny Boyle, Loveleen Tandan', N'Dev Patel, Freida Pinto, Saurabh Shukla, Anil Kapoor', N'A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of Who Wants to be a Millionaire?', N'https://m.media-amazon.com/images/M/MV5BZmNjZWI3NzktYWI1Mi00OTAyLWJkNTYtMzUwYTFlZDA0Y2UwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg', N'86', N'8.0', 8)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (111, N'The Hurt Locker ', 2008, N'131 min', N'Kathryn Bigelow', N'Jeremy Renner, Anthony Mackie, Brian Geraghty, Guy Pearce', N'During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work.', N'https://m.media-amazon.com/images/M/MV5BYWYxZjU2MmQtMmMzYi00ZWUwLTg2ZWQtMDExZTVlYjM3ZWM1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg', N'95', N'7.6', 9)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (112, N'No Country for Old Men', 2007, N'122 min', N'Ethan Coen, Joel Coen', N'Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson', N'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.', N'https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_UY268_CR0,0,182,268_AL_.jpg', N'91', N'8.1', 7)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (113, N'The Departed', 2006, N'151 min', N'Martin Scorsese', N'Leonardo DiCaprio, Matt Damon, Jack Nicholson, Mark Wahlberg', N'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.', N'https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX182_CR0,0,182,268_AL_.jpg', N'85', N'8.5', 7)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (114, N'Million Dollar Baby', 2004, N'132 min', N'Clint Eastwood', N'Hilary Swank, Clint Eastwood, Morgan Freeman, Jay Baruchel', N'A determined woman works with a hardened boxing trainer to become a professional.', N'https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg', N'86', N'8.1', 10)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (115, N'Crash (I)', 2004, N'112 min', N'Paul Haggis', N'Don Cheadle, Sandra Bullock, Thandie Newton, Karina Arroyave', N'Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.', N'https://m.media-amazon.com/images/M/MV5BOTk1OTA1MjIyNV5BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg', N'69', N'7.8', 7)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (116, N'The Lord of the Rings: The Return of the King', 2003, N'201 min', N'Peter Jackson', N'Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom', N'', N'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg', N'94', N'8.9', 5)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (117, N'Chicago', 2002, N'113 min', N'Rob Marshall', N'Renée Zellweger, Catherine Zeta-Jones, Richard Gere, Taye Diggs', N'Two death-row murderesses develop a fierce rivalry while competing for publicity, celebrity, and a sleazy lawyers attention.', N'https://m.media-amazon.com/images/M/MV5BN2E3NDU1ZTktNzZjNy00MWU3LWI4YmMtMjdjNTIzMDU0MDdiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg', N'82', N'7.1', 11)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (118, N'A Beautiful Mind', 2001, N'135 min', N'Ron Howard', N'Russell Crowe, Ed Harris, Jennifer Connelly, Christopher Plummer', N'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.', N'https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg', N'72', N'8.2', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (119, N'Gladiator', 2000, N'155 min', N'Ridley Scott', N'Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed', N'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', N'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg', N'67', N'8.5', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (120, N'American Beauty', 1999, N'122 min', N'Sam Mendes', N'Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley', N'A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughters best friend.', N'https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg', N'84', N'8.3', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (121, N'Shakespeare in Love', 1998, N'123 min', N'John Madden', N'Gwyneth Paltrow, Joseph Fiennes, Geoffrey Rush, Tom Wilkinson', N'', N'https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY268_CR3,0,182,268_AL_.jpg', N'87', N'7.1', 6)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (122, N'Titanic', 1997, N'194 min', N'James Cameron', N'Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates', N'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', N'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg', N'75', N'7.8', 8)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (123, N'The English Patient', 1996, N'162 min', N'Anthony Minghella', N'Ralph Fiennes, Juliette Binoche, Willem Dafoe, Kristin Scott Thomas', N'At the close of WWII, a young nurse tends to a badly-burned plane crash victim. His past is shown in flashbacks, revealing an involvement in a fateful love affair.', N'https://m.media-amazon.com/images/M/MV5BOTkxZTdkNTQtM2QwOS00NzRlLWEyMGItYTcxOTE4NTgyNGVhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg', N'87', N'7.4', 9)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (124, N'Braveheart', 1995, N'178 min', N'Mel Gibson', N'Mel Gibson, Sophie Marceau, Patrick McGoohan, Angus Macfadyen', N'When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.', N'https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg', N'68', N'8.3', 6)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (125, N'Forrest Gump', 1994, N'142 min', N'Robert Zemeckis', N'Tom Hanks, Robin Wright, Gary Sinise, Sally Field', N'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other 6 unfold through the perspective of an Alabama man with an IQ of 75.', N'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg', N'82', N'8.8', 8)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (126, N'Schindlers List', 1993, N'195 min', N'Steven Spielberg', N'Liam Neeson, Ralph Fiennes, Ben Kingsley, Caroline Goodall', N'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.', N'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg', N'94', N'8.9', 6)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (127, N'Unforgiven', 1992, N'130 min', N'Clint Eastwood', N'Clint Eastwood, Gene Hackman, Morgan Freeman, Richard Harris', N'Retired Old West gunslinger William Munny (Clint Eastwood) reluctantly takes on one last job, with the help of his old partner Ned Logan (Morgan Freeman) and a young man, The Schofield Kid (Jaimz Woolvett).', N'https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg', N'85', N'8.2', 12)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (128, N'The Silence of the Lambs', 1991, N'118 min', N'Jonathan Demme', N'Jodie Foster, Anthony Hopkins, Lawrence A. Bonney, Kasi Lemmons', N'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.', N'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg', N'85', N'8.6', 7)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (129, N'Dances with Wolves', 1990, N'181 min', N'Kevin Costner', N'Kevin Costner, Mary McDonnell, Graham Greene, Rodney A. Grant', N'Lieutenant John Dunbar, assigned to a remote 12 Civil War outpost, befriends wolves and Indians, making him an intolerable aberration in the military.', N'https://m.media-amazon.com/images/M/MV5BMTY3OTI5NDczN15BMl5BanBnXkFtZTcwNDA0NDY3Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg', N'72', N'8.0', 12)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (130, N'Driving Miss Daisy', 1989, N'99 min', N'Bruce Beresford', N'Morgan Freeman, Jessica Tandy, Dan Aykroyd, Patti LuPone', N'An old Jewish woman and her African-American chauffeur in the American South have a relationship that grows and improves over the years.', N'https://m.media-amazon.com/images/M/MV5BMDE2ZTY3YmUtZTFhYy00ZmU2LWI2NjktY2NmZGZlYjg5OGMwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg', N'81', N'7.4', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (131, N'Rain Man', 1988, N'133 min', N'Barry Levinson', N'Dustin Hoffman, Tom Cruise, Valeria Golino, Gerald R. Molen', N'Selfish yuppie Charlie Babbitts father left a fortune to his savant brother Raymond and a pittance to Charlie; they travel cross-country.', N'https://m.media-amazon.com/images/M/MV5BMzVjNzI4NzYtMjE4NS00M2IzLWFkOWMtOTYwMWUzN2ZlNGVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg', N'65', N'8.0', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (132, N'The Last Emperor', 1987, N'163 min', N'Bernardo Bertolucci', N'John Lone, Joan Chen, Peter OToole, Ruocheng Ying', N'The story of the final Emperor of China.', N'https://m.media-amazon.com/images/M/MV5BZTk0NDU4YmItOTk0ZS00ODc2LTkwNGItNWI5MDJkNTJiYWMxXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg', N'76', N'7.7', 6)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (133, N'Platoon', 1986, N'120 min', N'Oliver Stone', N'Charlie Sheen, Tom Berenger, Willem Dafoe, Keith David', N'A young soldier in Vietnam faces a moral crisis when confronted with the horrors of war and the duality of man.', N'https://m.media-amazon.com/images/M/MV5BM2Y1NTQyNWYtNDViNy00ZWRhLTk3MTMtOTI3ZGQ5MDFiNWM4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg', N'92', N'8.1', 9)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (134, N'Out of Africa', 1985, N'161 min', N'Sydney Pollack', N'Meryl Streep, Robert Redford, Klaus Maria Brandauer, Michael Kitchen', N'In 20th-century colonial Kenya, a Danish baroness/plantation owner has a passionate love affair with a free-spirited big-game hunter.', N'https://m.media-amazon.com/images/M/MV5BMTc5Y2NiZWQtZGY4YS00NDI4LThhM2ItMDdhYzFlNzY1NmM0XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg', N'69', N'7.2', 8)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (135, N'Amadeus', 1984, N'160 min', N'Milos Forman', N'F. Murray Abraham, Tom Hulce, Elizabeth Berridge, Roy Dotrice', N'The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozarts talent and claimed to have murdered him.', N'https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg', N'88', N'8.3', 6)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (136, N'Terms of Endearment', 1983, N'132 min', N'James L. Brooks', N'Shirley MacLaine, Debra Winger, Jack Nicholson, Danny DeVito', N'Follows hard-to-please Aurora looking for love, and her daughters family problems.', N'https://m.media-amazon.com/images/M/MV5BMTk0ODM4NDk0MF5BMl5BanBnXkFtZTgwMTEzMDUxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg', N'79', N'7.4', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (137, N'Gandhi', 1982, N'191 min', N'Richard Attenborough', N'Ben Kingsley, John Gielgud, Rohini Hattangadi, Roshan Seth', N'Mohandas K. Gandhis character is fully explained as a man of nonviolence. Through his patience, he is able to drive the British out of the subcontinent. And the stubborn nature of Jinnah and his commitment towards Pakistan is portrayed.', N'https://m.media-amazon.com/images/M/MV5BMzJiZDRmOWUtYjE2MS00Mjc1LTg1ZDYtNTQxYWJkZTg1OTM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg', N'79', N'8.0', 6)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (138, N'Chariots of Fire', 1981, N'125 min', N'Hugh Hudson', N'Ben Cross, Ian Charleson, Nicholas Farrell, Nigel Havers', N'Two British track athletes, one a determined Jew, and the other a devout Christian, compete in the 1924 Olympics.', N'https://m.media-amazon.com/images/M/MV5BZjNlNDFmM2ItMDE0Zi00MWNiLTljOWQtZGQ1YTQ2ZWUzZDU2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg', N'78', N'7.2', 10)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (139, N'Ordinary People', 1980, N'124 min', N'Robert Redford', N'Donald Sutherland, Mary Tyler Moore, Judd Hirsch, Timothy Hutton', N'The accidental death of the older son of an affluent family deeply strains the relationships among the bitter mother, the good-natured father, and the guilt-ridden younger son.', N'https://m.media-amazon.com/images/M/MV5BNWU3MDFkYWQtMWQ5YS00YTcwLThmNDItODY4OWE2ZTdhZmIwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg', N'87', N'7.7', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (140, N'Kramer vs. Kramer', 1979, N'105 min', N'Robert Benton', N'Dustin Hoffman, Meryl Streep, Jane Alexander, Justin Henry', N'Ted Kramers wife leaves him, allowing for a lost bond to be rediscovered between Ted and his son, Billy. But a heated custody battle ensues over the divorced couples son, deepening the wounds left by the separation.', N'https://m.media-amazon.com/images/M/MV5BNDM3YjNlYmMtOGY3NS00MmRjLWIyY2UtNDA0MWM3OTNlZTY2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg', N'77', N'7.8', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (141, N'The Deer Hunter', 1978, N'183 min', N'Michael Cimino', N'Robert De Niro, Christopher Walken, John Cazale, John Savage', N'An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.', N'https://m.media-amazon.com/images/M/MV5BNDhmNTA0ZDMtYjhkNS00NzEzLWIzYTItOGNkMTVmYjE2YmI3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg', N'86', N'8.1', 9)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (142, N'Annie Hall', 1977, N'93 min', N'Woody Allen', N'Woody Allen, Diane Keaton, Tony Roberts, Carol Kane', N'Neurotic New York comedian Alvy Singer falls in love with the ditzy Annie Hall.', N'https://m.media-amazon.com/images/M/MV5BZDg1OGQ4YzgtM2Y2NS00NjA3LWFjYTctMDRlMDI3NWE1OTUyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg', N'92', N'8.0', 8)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (143, N'Rocky', 1976, N'120 min', N'John G. Avildsen', N'Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers', N'A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.', N'https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_UX182_CR0,0,182,268_AL_.jpg', N'70', N'8.1', 10)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (144, N'One Flew Over the Cuckoos Nest', 1975, N'133 min', N'Milos Forman', N'Jack Nicholson, Louise Fletcher, Will Sampson, Michael Berryman', N'A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.', N'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg', N'83', N'8.7', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (145, N'The Godfather: Part II', 1974, N'202 min', N'Francis Ford Coppola', N'Al Pacino, Robert De Niro, Robert Duvall, Diane Keaton', N'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.', N'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg', N'90', N'9.0', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (146, N'The Sting', 1973, N'129 min', N'George Roy Hill', N'Paul Newman, Robert Redford, Robert Shaw, Charles Durning', N'Two grifters team up to pull off the ultimate con.', N'https://m.media-amazon.com/images/M/MV5BNGU3NjQ4YTMtZGJjOS00YTQ3LThmNmItMTI5MDE2ODI3NzY3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg', N'83', N'8.3', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (147, N'The Godfather', 1972, N'175 min ', N'Francis Ford Coppola', N'Marlon Brando, Al Pacino, James Caan, Diane Keaton', N'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', N'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg', N'100', N'9.2', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (148, N'The French Connection', 1971, N'104 min', N'William Friedkin', N'Gene Hackman, Roy Scheider, Fernando Rey, Tony Lo Bianco', N'A pair of NYC cops in the Narcotics Bureau stumble onto a drug smuggling job with a French connection.', N'https://m.media-amazon.com/images/M/MV5BOTZhY2E3NmItMGIwNi00OTA2LThkYmEtODFiZTM0NGI0ZWU5XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UY268_CR4,0,182,268_AL_.jpg', N'94', N'7.7', 4)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (149, N'Patton', 1970, N'172 min', N'Franklin J. Schaffner', N'George C. Scott, Karl Malden, Stephen Young, Michael Strong', N'The World War II phase of the career of the controversial American general, George S. Patton.', N'https://m.media-amazon.com/images/M/MV5BMmNhZmJhMmYtNjlkMC00MjhjLTk1NzMtMTNlMzYzNjZlMjNiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg', N'91', N'7.9', 9)
INSERT [dbo].[Movie] ([Id], [Title], [Year], [Runtime], [Director], [Actors], [Plot], [Poster], [Metascore], [ImdbRating], [GenreId]) VALUES (150, N'Midnight Cowboy', 1969, N'113 min', N'John Schlesinger', N'Dustin Hoffman, Jon Voight, Sylvia Miles, John McGiver', N'A naive hustler travels from Texas to New York City to seek personal fortune, finding a new friend in the process.', N'https://m.media-amazon.com/images/M/MV5BNTgwZmIzMmYtZjE3Yy00NzgzLTgxNmUtNjlmZDlkMzlhOTJkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg', N'79', N'7.8', 12)
SET IDENTITY_INSERT [dbo].[Movie] OFF
SET IDENTITY_INSERT [dbo].[Status] ON 

INSERT [dbo].[Status] ([Id], [Name]) VALUES (1, N'Interested')
INSERT [dbo].[Status] ([Id], [Name]) VALUES (2, N'Watched')
SET IDENTITY_INSERT [dbo].[Status] OFF
ALTER TABLE [dbo].[Movie]  WITH CHECK ADD  CONSTRAINT [FK_Movie_Genre] FOREIGN KEY([GenreId])
REFERENCES [dbo].[Genre] ([Id])
GO
ALTER TABLE [dbo].[Movie] CHECK CONSTRAINT [FK_Movie_Genre]
GO
ALTER TABLE [dbo].[UserMovieDetails]  WITH CHECK ADD  CONSTRAINT [FK_UserMovieDetails_Status] FOREIGN KEY([StatusId])
REFERENCES [dbo].[Status] ([Id])
GO
ALTER TABLE [dbo].[UserMovieDetails] CHECK CONSTRAINT [FK_UserMovieDetails_Status]
GO
ALTER TABLE [dbo].[UserMovieDetails]  WITH CHECK ADD  CONSTRAINT [FK_UserMovieDetails_UserMovieDetails] FOREIGN KEY([UserMovieMappingId])
REFERENCES [dbo].[UserMovieMapping] ([Id])
GO
ALTER TABLE [dbo].[UserMovieDetails] CHECK CONSTRAINT [FK_UserMovieDetails_UserMovieDetails]
GO
ALTER TABLE [dbo].[UserMovieMapping]  WITH CHECK ADD  CONSTRAINT [FK_UserMovieMapping_Movie] FOREIGN KEY([MovieId])
REFERENCES [dbo].[Movie] ([Id])
GO
ALTER TABLE [dbo].[UserMovieMapping] CHECK CONSTRAINT [FK_UserMovieMapping_Movie]
GO
ALTER TABLE [dbo].[UserMovieMapping]  WITH CHECK ADD  CONSTRAINT [FK_UserMovieMapping_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([Id])
GO
ALTER TABLE [dbo].[UserMovieMapping] CHECK CONSTRAINT [FK_UserMovieMapping_User]
GO
