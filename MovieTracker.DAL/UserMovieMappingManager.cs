using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieTracker.DAL
{
    public class UserMovieMappingManager
    {
        MovieTrackerEntities movieTrackerEntities = null;

        public UserMovieMappingManager()
        {
            movieTrackerEntities = new MovieTrackerEntities();
        }

        public bool InsertUserMovieMapping(UserMovieMapping userMovieMappings)
        {
            movieTrackerEntities.UserMovieMappings.Add(userMovieMappings);
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public bool DeleteUserMovieMapping(UserMovieMapping userMovieMappings)
        {
            movieTrackerEntities.UserMovieMappings.Attach(userMovieMappings);
            movieTrackerEntities.Entry(userMovieMappings).State = System.Data.Entity.EntityState.Deleted;
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public bool UpdateUserMovieMapping(UserMovieMapping userMovieMappings)
        {
            movieTrackerEntities.UserMovieMappings.Attach(userMovieMappings);
            movieTrackerEntities.Entry(userMovieMappings).State = System.Data.Entity.EntityState.Modified;
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public List<UserMovieMapping> GetUserMovieMappingByUserId(int userId)
        {
            return movieTrackerEntities.UserMovieMappings.Where(x => x.UserId == userId).ToList();
        }

        public List<UserMovieMapping> GetUserMovieMapping()
        {
            return movieTrackerEntities.UserMovieMappings.ToList();
        }
    }
}
