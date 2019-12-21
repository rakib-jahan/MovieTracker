using System.Collections.Generic;
using System.Linq;

namespace MovieTracker.DAL
{
    public class UserActivityManage
    {
        MovieTrackerEntities movieTrackerEntities = null;

        public UserActivityManage()
        {
            movieTrackerEntities = new MovieTrackerEntities();
        }

        public bool InsertUser(UserActivity userActivity)
        {
            movieTrackerEntities.UserActivities.Add(userActivity);
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public List<UserActivity> GetUserActivityByUserId(int userId)
        {
            return movieTrackerEntities.UserActivities.Where(x => x.UserId == userId).ToList();
        }
    }
}