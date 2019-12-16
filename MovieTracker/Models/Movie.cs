using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MovieTracker.Models
{
    public class Movie
    {
        public string Title { get; set; }
        public string Year { get; set; }
        public string Runtime { get; set; }
        public string Genre { get; set; }
        public string Director { get; set; }
        public string Actors { get; set; }
        public string Plot { get; set; }
        public string Poster { get; set; }
        public string Metascore { get; set; }
        public string ImdbRating { get; set; }
        public bool IsAddedToWatchList { get; set; }
    }
}