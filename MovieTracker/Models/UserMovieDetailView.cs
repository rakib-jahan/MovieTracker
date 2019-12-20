using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MovieTracker.Models
{
    public partial class UserMovieDetailView
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int MovieId { get; set; }
        public int StatusId { get; set; }
        public decimal? UserRating { get; set; }
        public string Comments { get; set; }
    }
}