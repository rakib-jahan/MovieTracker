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
                    "imdbRating": "8.2",
                    "IsAddedToWatchKist": false
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
                    "imdbRating": "7.3",
                    "IsAddedToWatchKist": true
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
                    "imdbRating": "7.4",
                    "IsAddedToWatchKist": false
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
                    "imdbRating": "8.1",
                    "IsAddedToWatchKist": false
                },
                {
                    "Title": "Birdman or (The Unexpected Virtue of Ignorance)",
                    "Year": "2014",
                    "Runtime": "119 min",
                    "Genre": "Drama",
                    "Director": "Alejandro G. Iñárritu",
                    "Actors": " Michael Keaton, Zach Galifianakis, Edward Norton, Andrea Riseborough",
                    "Plot": "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production.",
                    "Poster": "https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
                    "Metascore": "87",
                    "imdbRating": "7.7",
                    "IsAddedToWatchKist": false
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
                    "imdbRating": "96",
                    "IsAddedToWatchKist": false
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
                    "imdbRating": "7.7",
                    "IsAddedToWatchKist": false
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
                    "imdbRating": "7.9",
                    "IsAddedToWatchKist": false
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
                    "imdbRating": "8.0",
                    "IsAddedToWatchKist": false
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
                    "imdbRating": "8.0",
                    "IsAddedToWatchKist": false
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
                    "imdbRating": "7.6",
                    "IsAddedToWatchKist": false
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
                    "imdbRating": "8.1",
                    "IsAddedToWatchKist": false
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
                    "imdbRating": "8.5",
                    "IsAddedToWatchKist": false
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
                    "imdbRating": "8.1",
                    "IsAddedToWatchKist": false
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
                    "imdbRating": "7.8",
                    "IsAddedToWatchKist": false
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