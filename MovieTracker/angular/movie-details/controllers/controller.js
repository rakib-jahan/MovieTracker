(function () {
    'use strict';

    angular
        .module('app')
        .controller('controller', controller);

    controller.$inject = ['$scope'];

    function controller($scope) {

        var vm = this;
        vm.title = 'controller';

        init();

        function init() {

            vm.movieList = [
                {
                    "Title": "Green Book",
                    "Year": "2018",
                    "Runtime": "130 min",
                    "Genre": "Drama",
                    "Director": "Peter Farrelly",
                    "Actors": "Viggo Mortensen, Mahershala Ali, Linda Cardellini, Sebastian Maniscalco",
                    "Plot": "A working-class Italian-American bouncer becomes the driver of an African-American classical pianist on a tour of venues through the 1960s American South.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BYzIzYmJlYTYtNGNiYy00N2EwLTk4ZjItMGYyZTJiOTVkM2RlXkEyXkFqcGdeQXVyODY1NDk1NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "69",
                    "ImdbRating": "8.2",
                    "IsAddedToWatchList": true
                },
                {
                    "Title": "The Shape of Water ",
                    "Year": "2017",
                    "Runtime": "123 min",
                    "Genre": "Fantasy",
                    "Director": "Guillermo del Toro",
                    "Actors": "Sally Hawkins, Octavia Spencer, Michael Shannon, Doug Jones",
                    "Plot": "At a top secret research facility in the 1960s, a lonely janitor forms a unique relationship with an amphibious creature that is being held in captivity.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNGNiNWQ5M2MtNGI0OC00MDA2LWI5NzEtMmZiYjVjMDEyOWYzXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "87",
                    "ImdbRating": "7.3",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Moonlight (I)",
                    "Year": "2016",
                    "Runtime": "111 min",
                    "Genre": "Drama",
                    "Director": "Barry Jenkins",
                    "Actors": "Mahershala Ali, Naomie Harris, Trevante Rhodes, Alex R. Hibbert",
                    "Plot": "A young African-American man grapples with his identity and sexuality while experiencing the everyday struggles of childhood, adolescence, and burgeoning adulthood.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQxNTIyODAxMV5BMl5BanBnXkFtZTgwNzQyMDA3OTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "99",
                    "ImdbRating": "7.4",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Spotlight (I) ",
                    "Year": "2015",
                    "Runtime": "129 min",
                    "Genre": "Drama",
                    "Director": "Tom McCarthy ",
                    "Actors": "Mark Ruffalo, Michael Keaton, Rachel McAdams, Liev Schreiber",
                    "Plot": "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjIyOTM5OTIzNV5BMl5BanBnXkFtZTgwMDkzODE2NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "93",
                    "ImdbRating": "8.1",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Birdman or (The Unexpected Virtue of Ignorance) ",
                    "Year": "2014",
                    "Runtime": "119 min",
                    "Genre": "Drama",
                    "Director": "Alejandro G. Iñárritu",
                    "Actors": " Michael Keaton, Zach Galifianakis, Edward Norton, Andrea Riseborough",
                    "Plot": "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "87",
                    "ImdbRating": "7.7",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "12 Years a Slave",
                    "Year": "2013",
                    "Runtime": "134 min",
                    "Genre": "History",
                    "Director": "Steve McQueen",
                    "Actors": "Chiwetel Ejiofor, Michael Kenneth Williams, Michael Fassbender, Brad Pitt",
                    "Plot": "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjExMTEzODkyN15BMl5BanBnXkFtZTcwNTU4NTc4OQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "8.1",
                    "ImdbRating": "96",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Argo",
                    "Year": "2012",
                    "Runtime": "120 min",
                    "Genre": "Thriller",
                    "Director": "Ben Affleck ",
                    "Actors": "Ben Affleck, Bryan Cranston, John Goodman, Alan Arkin",
                    "Plot": "Acting under the cover of a Hollywood producer scouting a location for a science fiction film, a CIA agent launches a dangerous operation to rescue six Americans in Tehran during the U.S. hostage crisis in Iran in 1979.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNzljNjY3MDYtYzc0Ni00YjU0LWIyNDUtNTE0ZDRiMGExMjZlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "86",
                    "ImdbRating": "7.7",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The Artist (I)",
                    "Year": "2011",
                    "Runtime": "100 min",
                    "Genre": "Romance",
                    "Director": "Michel Hazanavicius",
                    "Actors": "Jean Dujardin, Bérénice Bejo, John Goodman, James Cromwell",
                    "Plot": "An egomaniacal film star develops a relationship with a young dancer against the backdrop of Hollywood's silent e",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMDUyZWU5N2UtOWFlMy00MTI0LTk0ZDYtMzFhNjljODBhZDA5XkEyXkFqcGdeQXVyNzA4ODc3ODU@._V1_UY268_CR3,0,182,268_AL_.jpg",
                    "Metascore": "89",
                    "ImdbRating": "7.9",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The King's Speech",
                    "Year": "2010",
                    "Runtime": "118 min",
                    "Genre": "History",
                    "Director": "Tom Hooper",
                    "Actors": "Colin Firth, Geoffrey Rush, Helena Bonham Carter, Derek Jacobi",
                    "Plot": "The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMzU5MjEwMTg2Nl5BMl5BanBnXkFtZTcwNzM3MTYxNA@@._V1_UY268_CR0,0,182,268_AL_.jpg",
                    "Metascore": "88",
                    "ImdbRating": "8.0",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Slumdog Millionaire",
                    "Year": "2008",
                    "Runtime": "120 min",
                    "Genre": "Romance",
                    "Director": "Danny Boyle, Loveleen Tandan",
                    "Actors": "Dev Patel, Freida Pinto, Saurabh Shukla, Anil Kapoor",
                    "Plot": "A Mumbai teenager reflects on his life after being accused of cheating on the Indian version of 'Who Wants to be a Millionaire?'",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZmNjZWI3NzktYWI1Mi00OTAyLWJkNTYtMzUwYTFlZDA0Y2UwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "86",
                    "ImdbRating": "8.0",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The Hurt Locker ",
                    "Year": "2008",
                    "Runtime": "131 min",
                    "Genre": "War",
                    "Director": "Kathryn Bigelow",
                    "Actors": "Jeremy Renner, Anthony Mackie, Brian Geraghty, Guy Pearce",
                    "Plot": "During the Iraq War, a Sergeant recently assigned to an army bomb squad is put at odds with his squad mates due to his maverick way of handling his work.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BYWYxZjU2MmQtMmMzYi00ZWUwLTg2ZWQtMDExZTVlYjM3ZWM1XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "95",
                    "ImdbRating": "7.6",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "No Country for Old Men",
                    "Year": "2007",
                    "Runtime": "122 min",
                    "Genre": "Thriller",
                    "Director": "Ethan Coen, Joel Coen",
                    "Actors": "Tommy Lee Jones, Javier Bardem, Josh Brolin, Woody Harrelson",
                    "Plot": "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_UY268_CR0,0,182,268_AL_.jpg",
                    "Metascore": "91",
                    "ImdbRating": "8.1",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The Departed",
                    "Year": "2006",
                    "Runtime": "151 min",
                    "Genre": "Thriller",
                    "Director": "Martin Scorsese",
                    "Actors": "Leonardo DiCaprio, Matt Damon, Jack Nicholson, Mark Wahlberg",
                    "Plot": "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "85",
                    "ImdbRating": "8.5",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Million Dollar Baby",
                    "Year": "2004",
                    "Runtime": "132 min",
                    "Genre": "Sport",
                    "Director": "Clint Eastwood",
                    "Actors": "Hilary Swank, Clint Eastwood, Morgan Freeman, Jay Baruchel",
                    "Plot": "A determined woman works with a hardened boxing trainer to become a professional.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTkxNzA1NDQxOV5BMl5BanBnXkFtZTcwNTkyMTIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "86",
                    "ImdbRating": "8.1",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Crash (I)",
                    "Year": "2004",
                    "Runtime": "112 min",
                    "Genre": "Thriller",
                    "Director": "Paul Haggis",
                    "Actors": "Don Cheadle, Sandra Bullock, Thandie Newton, Karina Arroyave",
                    "Plot": "Los Angeles citizens with vastly separate lives collide in interweaving stories of race, loss and redemption.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BOTk1OTA1MjIyNV5BMl5BanBnXkFtZTcwODQxMTkyMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "69",
                    "ImdbRating": "7.8",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The Lord of the Rings: The Return of the King",
                    "Year": "2003",
                    "Runtime": "201 min",
                    "Genre": "Fantasy",
                    "Director": "Peter Jackson",
                    "Actors": "Elijah Wood, Viggo Mortensen, Ian McKellen, Orlando Bloom",
                    "Plot": "",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "94",
                    "ImdbRating": "8.9",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Chicago",
                    "Year": "2002",
                    "Runtime": "113 min",
                    "Genre": "Musical",
                    "Director": "Rob Marshall",
                    "Actors": "Renée Zellweger, Catherine Zeta-Jones, Richard Gere, Taye Diggs",
                    "Plot": "Two death-row murderesses develop a fierce rivalry while competing for publicity, celebrity, and a sleazy lawyer's attention.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BN2E3NDU1ZTktNzZjNy00MWU3LWI4YmMtMjdjNTIzMDU0MDdiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "82",
                    "ImdbRating": "7.1",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "A Beautiful Mind",
                    "Year": "2001",
                    "Runtime": "135 min",
                    "Genre": "Drama",
                    "Director": "Ron Howard",
                    "Actors": "Russell Crowe, Ed Harris, Jennifer Connelly, Christopher Plummer",
                    "Plot": "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "72",
                    "ImdbRating": "8.2",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Gladiator",
                    "Year": "2000",
                    "Runtime": "155 min",
                    "Genre": "Drama",
                    "Director": "Ridley Scott",
                    "Actors": "Russell Crowe, Joaquin Phoenix, Connie Nielsen, Oliver Reed",
                    "Plot": "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "67",
                    "ImdbRating": "8.5",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "American Beauty",
                    "Year": "1999",
                    "Runtime": "122 min",
                    "Genre": "Drama",
                    "Director": "Sam Mendes",
                    "Actors": "Kevin Spacey, Annette Bening, Thora Birch, Wes Bentley",
                    "Plot": "A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter's best friend.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNTBmZWJkNjctNDhiNC00MGE2LWEwOTctZTk5OGVhMWMyNmVhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "84",
                    "ImdbRating": "8.3",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Shakespeare in Love",
                    "Year": "1998",
                    "Runtime": "123 min",
                    "Genre": "History",
                    "Director": "John Madden",
                    "Actors": "Gwyneth Paltrow, Joseph Fiennes, Geoffrey Rush, Tom Wilkinson",
                    "Plot": "",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BM2ZkNjM5MjEtNTBlMC00OTI5LTgyYmEtZDljMzNmNzhiNzY0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY268_CR3,0,182,268_AL_.jpg",
                    "Metascore": "87",
                    "ImdbRating": "7.1",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Titanic",
                    "Year": "1997",
                    "Runtime": "194 min",
                    "Genre": "Romance",
                    "Director": "James Cameron",
                    "Actors": "Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
                    "Plot": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "75",
                    "ImdbRating": "7.8",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The English Patient",
                    "Year": "1996",
                    "Runtime": "162 min",
                    "Genre": "War",
                    "Director": "Anthony Minghella",
                    "Actors": "Ralph Fiennes, Juliette Binoche, Willem Dafoe, Kristin Scott Thomas",
                    "Plot": "At the close of WWII, a young nurse tends to a badly-burned plane crash victim. His past is shown in flashbacks, revealing an involvement in a fateful love affair.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BOTkxZTdkNTQtM2QwOS00NzRlLWEyMGItYTcxOTE4NTgyNGVhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "87",
                    "ImdbRating": "7.4",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Braveheart",
                    "Year": "1995",
                    "Runtime": "178 min",
                    "Genre": "History",
                    "Director": "Mel Gibson",
                    "Actors": "Mel Gibson, Sophie Marceau, Patrick McGoohan, Angus Macfadyen",
                    "Plot": "When his secret bride is executed for assaulting an English soldier who tried to rape her, William Wallace begins a revolt against King Edward I of England.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "68",
                    "ImdbRating": "8.3",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Forrest Gump",
                    "Year": "1994",
                    "Runtime": "142 min",
                    "Genre": "Romance",
                    "Director": "Robert Zemeckis",
                    "Actors": "Tom Hanks, Robin Wright, Gary Sinise, Sally Field",
                    "Plot": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg",
                    "Metascore": "82",
                    "ImdbRating": "8.8",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Schindler's List",
                    "Year": "1993",
                    "Runtime": "195 min",
                    "Genre": "History",
                    "Director": "Steven Spielberg",
                    "Actors": "Liam Neeson, Ralph Fiennes, Ben Kingsley, Caroline Goodall",
                    "Plot": "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "94",
                    "ImdbRating": "8.9",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Unforgiven",
                    "Year": "1992",
                    "Runtime": "130 min",
                    "Genre": "Western",
                    "Director": "Clint Eastwood",
                    "Actors": "Clint Eastwood, Gene Hackman, Morgan Freeman, Richard Harris",
                    "Plot": "Retired Old West gunslinger William Munny (Clint Eastwood) reluctantly takes on one last job, with the help of his old partner Ned Logan (Morgan Freeman) and a young man, The 'Schofield Kid' (Jaimz Woolvett).",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BODM3YWY4NmQtN2Y3Ni00OTg0LWFhZGQtZWE3ZWY4MTJlOWU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "85",
                    "ImdbRating": "8.2",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The Silence of the Lambs",
                    "Year": "1991",
                    "Runtime": "118 min",
                    "Genre": "Thriller",
                    "Director": "Jonathan Demme",
                    "Actors": "Jodie Foster, Anthony Hopkins, Lawrence A. Bonney, Kasi Lemmons",
                    "Plot": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "85",
                    "ImdbRating": "8.6",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Dances with Wolves",
                    "Year": "1990",
                    "Runtime": "181 min",
                    "Genre": "Western",
                    "Director": "Kevin Costner",
                    "Actors": "Kevin Costner, Mary McDonnell, Graham Greene, Rodney A. Grant",
                    "Plot": "Lieutenant John Dunbar, assigned to a remote western Civil War outpost, befriends wolves and Indians, making him an intolerable aberration in the military.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY3OTI5NDczN15BMl5BanBnXkFtZTcwNDA0NDY3Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "72",
                    "ImdbRating": "8.0",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Driving Miss Daisy",
                    "Year": "1989",
                    "Runtime": "99 min",
                    "Genre": "Drama",
                    "Director": "Bruce Beresford",
                    "Actors": "Morgan Freeman, Jessica Tandy, Dan Aykroyd, Patti LuPone",
                    "Plot": "An old Jewish woman and her African-American chauffeur in the American South have a relationship that grows and improves over the years.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMDE2ZTY3YmUtZTFhYy00ZmU2LWI2NjktY2NmZGZlYjg5OGMwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "81",
                    "ImdbRating": "7.4",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Rain Man",
                    "Year": "1988",
                    "Runtime": "133 min",
                    "Genre": "Drama",
                    "Director": "Barry Levinson",
                    "Actors": "Dustin Hoffman, Tom Cruise, Valeria Golino, Gerald R. Molen",
                    "Plot": "Selfish yuppie Charlie Babbitt's father left a fortune to his savant brother Raymond and a pittance to Charlie; they travel cross-country.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMzVjNzI4NzYtMjE4NS00M2IzLWFkOWMtOTYwMWUzN2ZlNGVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "65",
                    "ImdbRating": "8.0",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The Last Emperor",
                    "Year": "1987",
                    "Runtime": "163 min",
                    "Genre": "History",
                    "Director": "Bernardo Bertolucci",
                    "Actors": "John Lone, Joan Chen, Peter O'Toole, Ruocheng Ying",
                    "Plot": "The story of the final Emperor of China.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZTk0NDU4YmItOTk0ZS00ODc2LTkwNGItNWI5MDJkNTJiYWMxXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "76",
                    "ImdbRating": "7.7",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Platoon",
                    "Year": "1986",
                    "Runtime": "120 min",
                    "Genre": "War",
                    "Director": "Oliver Stone",
                    "Actors": "Charlie Sheen, Tom Berenger, Willem Dafoe, Keith David",
                    "Plot": "A young soldier in Vietnam faces a moral crisis when confronted with the horrors of war and the duality of man.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BM2Y1NTQyNWYtNDViNy00ZWRhLTk3MTMtOTI3ZGQ5MDFiNWM4XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "92",
                    "ImdbRating": "8.1",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Out of Africa",
                    "Year": "1985",
                    "Runtime": "161 min",
                    "Genre": "Romance",
                    "Director": "Sydney Pollack",
                    "Actors": "Meryl Streep, Robert Redford, Klaus Maria Brandauer, Michael Kitchen",
                    "Plot": "In 20th-century colonial Kenya, a Danish baroness/plantation owner has a passionate love affair with a free-spirited big-game hunter.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5Y2NiZWQtZGY4YS00NDI4LThhM2ItMDdhYzFlNzY1NmM0XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "69",
                    "ImdbRating": "7.2",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Amadeus",
                    "Year": "1984",
                    "Runtime": "160 min",
                    "Genre": "History",
                    "Director": "Milos Forman",
                    "Actors": "F. Murray Abraham, Tom Hulce, Elizabeth Berridge, Roy Dotrice",
                    "Plot": "The life, success and troubles of Wolfgang Amadeus Mozart, as told by Antonio Salieri, the contemporaneous composer who was insanely jealous of Mozart's talent and claimed to have murdered him.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNWJlNzUzNGMtYTAwMS00ZjI2LWFmNWQtODcxNWUxODA5YmU1XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "88",
                    "ImdbRating": "8.3",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Terms of Endearment",
                    "Year": "1983",
                    "Runtime": "132 min",
                    "Genre": "Drama",
                    "Director": "James L. Brooks",
                    "Actors": "Shirley MacLaine, Debra Winger, Jack Nicholson, Danny DeVito",
                    "Plot": "Follows hard-to-please Aurora looking for love, and her daughter's family problems.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk0ODM4NDk0MF5BMl5BanBnXkFtZTgwMTEzMDUxMDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "79",
                    "ImdbRating": "7.4",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Gandhi",
                    "Year": "1982",
                    "Runtime": "191 min",
                    "Genre": "History",
                    "Director": "Richard Attenborough",
                    "Actors": "Ben Kingsley, John Gielgud, Rohini Hattangadi, Roshan Seth",
                    "Plot": "Mohandas K. Gandhi's character is fully explained as a man of nonviolence. Through his patience, he is able to drive the British out of the subcontinent. And the stubborn nature of Jinnah and his commitment towards Pakistan is portrayed.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMzJiZDRmOWUtYjE2MS00Mjc1LTg1ZDYtNTQxYWJkZTg1OTM4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "79",
                    "ImdbRating": "8.0",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Chariots of Fire",
                    "Year": "1981",
                    "Runtime": "125 min",
                    "Genre": "Sport",
                    "Director": "Hugh Hudson",
                    "Actors": "Ben Cross, Ian Charleson, Nicholas Farrell, Nigel Havers",
                    "Plot": "Two British track athletes, one a determined Jew, and the other a devout Christian, compete in the 1924 Olympics.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZjNlNDFmM2ItMDE0Zi00MWNiLTljOWQtZGQ1YTQ2ZWUzZDU2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "78",
                    "ImdbRating": "7.2",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Ordinary People",
                    "Year": "1980",
                    "Runtime": "124 min",
                    "Genre": "Drama",
                    "Director": "Robert Redford",
                    "Actors": "Donald Sutherland, Mary Tyler Moore, Judd Hirsch, Timothy Hutton",
                    "Plot": "The accidental death of the older son of an affluent family deeply strains the relationships among the bitter mother, the good-natured father, and the guilt-ridden younger son.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNWU3MDFkYWQtMWQ5YS00YTcwLThmNDItODY4OWE2ZTdhZmIwXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "87",
                    "ImdbRating": "7.7",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Kramer vs. Kramer",
                    "Year": "1979",
                    "Runtime": "105 min",
                    "Genre": "Drama",
                    "Director": "Robert Benton",
                    "Actors": "Dustin Hoffman, Meryl Streep, Jane Alexander, Justin Henry",
                    "Plot": "Ted Kramer's wife leaves him, allowing for a lost bond to be rediscovered between Ted and his son, Billy. But a heated custody battle ensues over the divorced couple's son, deepening the wounds left by the separation.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNDM3YjNlYmMtOGY3NS00MmRjLWIyY2UtNDA0MWM3OTNlZTY2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "77",
                    "ImdbRating": "7.8",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The Deer Hunter",
                    "Year": "1978",
                    "Runtime": "183 min",
                    "Genre": "War",
                    "Director": "Michael Cimino",
                    "Actors": "Robert De Niro, Christopher Walken, John Cazale, John Savage",
                    "Plot": "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNDhmNTA0ZDMtYjhkNS00NzEzLWIzYTItOGNkMTVmYjE2YmI3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "86",
                    "ImdbRating": "8.1",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Annie Hall",
                    "Year": "1977",
                    "Runtime": "93 min",
                    "Genre": "Romance",
                    "Director": "Woody Allen",
                    "Actors": "Woody Allen, Diane Keaton, Tony Roberts, Carol Kane",
                    "Plot": "Neurotic New York comedian Alvy Singer falls in love with the ditzy Annie Hall.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZDg1OGQ4YzgtM2Y2NS00NjA3LWFjYTctMDRlMDI3NWE1OTUyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "92",
                    "ImdbRating": "8.0",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Rocky",
                    "Year": "1976",
                    "Runtime": "120 min",
                    "Genre": "Sport",
                    "Director": "John G. Avildsen",
                    "Actors": "Sylvester Stallone, Talia Shire, Burt Young, Carl Weathers",
                    "Plot": "A small-time boxer gets a supremely rare chance to fight a heavy-weight champion in a bout in which he strives to go the distance for his self-respect.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMTY5MDMzODUyOF5BMl5BanBnXkFtZTcwMTQ3NTMyNA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "70",
                    "ImdbRating": "8.1",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "One Flew Over the Cuckoo's Nest",
                    "Year": "1975",
                    "Runtime": "133 min",
                    "Genre": "Drama",
                    "Director": "Milos Forman",
                    "Actors": "Jack Nicholson, Louise Fletcher, Will Sampson, Michael Berryman",
                    "Plot": "A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "83",
                    "ImdbRating": "8.7",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The Godfather: Part II",
                    "Year": "1974",
                    "Runtime": "202 min",
                    "Genre": "Drama",
                    "Director": "Francis Ford Coppola",
                    "Actors": "Al Pacino, Robert De Niro, Robert Duvall, Diane Keaton",
                    "Plot": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
                    "Metascore": "90",
                    "ImdbRating": "9.0",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The Sting",
                    "Year": "1973",
                    "Runtime": "129 min",
                    "Genre": "Drama",
                    "Director": "George Roy Hill",
                    "Actors": "Paul Newman, Robert Redford, Robert Shaw, Charles Durning",
                    "Plot": "Two grifters team up to pull off the ultimate con.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNGU3NjQ4YTMtZGJjOS00YTQ3LThmNmItMTI5MDE2ODI3NzY3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "83",
                    "ImdbRating": "8.3",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The Godfather",
                    "Year": "1972",
                    "Runtime": "175 min ",
                    "Genre": "Drama",
                    "Director": "Francis Ford Coppola",
                    "Actors": "Marlon Brando, Al Pacino, James Caan, Diane Keaton",
                    "Plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
                    "Metascore": "100",
                    "ImdbRating": "9.2",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "The French Connection",
                    "Year": "1971",
                    "Runtime": "104 min",
                    "Genre": "Drama",
                    "Director": "William Friedkin",
                    "Actors": "Gene Hackman, Roy Scheider, Fernando Rey, Tony Lo Bianco",
                    "Plot": "A pair of NYC cops in the Narcotics Bureau stumble onto a drug smuggling job with a French connection.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BOTZhY2E3NmItMGIwNi00OTA2LThkYmEtODFiZTM0NGI0ZWU5XkEyXkFqcGdeQXVyNTc1NTQxODI@._V1_UY268_CR4,0,182,268_AL_.jpg",
                    "Metascore": "94",
                    "ImdbRating": "7.7",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Patton",
                    "Year": "1970",
                    "Runtime": "172 min",
                    "Genre": "War",
                    "Director": "Franklin J. Schaffner",
                    "Actors": "George C. Scott, Karl Malden, Stephen Young, Michael Strong",
                    "Plot": "The World War II phase of the career of the controversial American general, George S. Patton.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BMmNhZmJhMmYtNjlkMC00MjhjLTk1NzMtMTNlMzYzNjZlMjNiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "91",
                    "ImdbRating": "7.9",
                    "IsAddedToWatchList": false
                },
                {
                    "Title": "Midnight Cowboy",
                    "Year": "1969",
                    "Runtime": "113 min",
                    "Genre": "Western",
                    "Director": "John Schlesinger",
                    "Actors": "Dustin Hoffman, Jon Voight, Sylvia Miles, John McGiver",
                    "Plot": "A naive hustler travels from Texas to New York City to seek personal fortune, finding a new friend in the process.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BNTgwZmIzMmYtZjE3Yy00NzgzLTgxNmUtNjlmZDlkMzlhOTJkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "79",
                    "ImdbRating": "7.8",
                    "IsAddedToWatchList": false
                }
            ];

            $scope.totalItems = vm.movieList.length;
            $scope.currentPage = 1;
            $scope.itemsPerPage = 6;
            $scope.maxSize = 5;
        }

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };   

        $scope.updateStatus = function (obj) {
            
        };
    }
})();