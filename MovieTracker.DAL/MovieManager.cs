using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieTracker.DAL
{
    public class MovieManager
    {
        MovieTrackerEntities movieTrackerEntities = null;

        public MovieManager()
        {
            movieTrackerEntities = new MovieTrackerEntities();
        }

        public bool InsertMovie(Movie movie)
        {
            movieTrackerEntities.Movies.Add(movie);
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public bool DeleteUser(Movie movie)
        {
            movieTrackerEntities.Movies.Attach(movie);
            movieTrackerEntities.Entry(movie).State = System.Data.Entity.EntityState.Deleted;
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public bool UpdateUser(Movie movie)
        {
            movieTrackerEntities.Movies.Attach(movie);
            movieTrackerEntities.Entry(movie).State = System.Data.Entity.EntityState.Modified;
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public List<Movie> GetMovies()
        {
            return movieTrackerEntities.Movies.ToList();
        }
    }
}
