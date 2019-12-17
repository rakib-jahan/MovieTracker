using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MovieTracker.DAL
{
    public class UserManager
    {
        MovieTrackerEntities movieTrackerEntities = null;

        public UserManager()
        {
            movieTrackerEntities = new MovieTrackerEntities();
        }

        public bool InsertUser(User user)
        {
            movieTrackerEntities.Users.Add(user);
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public bool DeleteUser(User user)
        {
            movieTrackerEntities.Users.Attach(user);
            movieTrackerEntities.Entry(user).State = System.Data.Entity.EntityState.Deleted;
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public bool UpdateUser(User user)
        {
            movieTrackerEntities.Users.Attach(user);
            movieTrackerEntities.Entry(user).State = System.Data.Entity.EntityState.Modified;
            return movieTrackerEntities.SaveChanges() > 0;
        }

        public List<User> GetUsers()
        {
            return movieTrackerEntities.Users.ToList();
        }
    }
}
