using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieTracker.DAL
{
    public class UserMovieDetailManager
    {
        MovieTrackerEntities movieTrackerEntities = null;

        public UserMovieDetailManager()
        {
            movieTrackerEntities = new MovieTrackerEntities();
        }

        public bool InsertUserMovieDetail(UserMovieDetail userMovieDetail)
        {
            movieTrackerEntities.UserMovieDetails.Add(userMovieDetail);
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public bool DeleteUserMovieDetail(UserMovieDetail userMovieDetail)
        {
            movieTrackerEntities.UserMovieDetails.Attach(userMovieDetail);
            movieTrackerEntities.Entry(userMovieDetail).State = System.Data.Entity.EntityState.Deleted;
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public bool UpdateUserMovieDetail(UserMovieDetail userMovieDetail)
        {
            movieTrackerEntities.UserMovieDetails.Attach(userMovieDetail);
            movieTrackerEntities.Entry(userMovieDetail).State = System.Data.Entity.EntityState.Modified;
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public List<UserMovieDetail> GetUserMovieDetailByUserId(int userId)
        {
            return movieTrackerEntities.UserMovieDetails.Where(x => x.UserId == userId).ToList();
        }

        public List<UserMovieDetail> GetUserMovieDetail()
        {
            return movieTrackerEntities.UserMovieDetails.ToList();
        }
    }
}
