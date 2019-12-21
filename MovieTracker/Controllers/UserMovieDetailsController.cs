using MovieTracker.DAL;
using MovieTracker.Models;
using System;
using System.Linq;
using System.Web.Http;

namespace MovieTracker.Controllers
{
    public class UserMovieDetailsController : ApiController
    {
        [HttpGet]
        [Route("Controllers/UserMovieDetails/GetMovieList")]
        public dynamic Get(int userId)
        {
            using (MovieTrackerEntities context = new MovieTrackerEntities())
            {
                var result = (
                    from um in context.UserMovieDetails
                    join m in context.Movies on um.MovieId equals m.Id
                    where um.UserId == userId
                    select new
                    {
                        Id = m.Id,
                        Actors = m.Actors,
                        Director = m.Director,
                        Genre = m.Genre.GenreName,
                        GenreId = m.Genre.Id,
                        ImdbRating = m.ImdbRating,
                        Metascore = m.Metascore,
                        Plot = m.Plot,
                        Poster = m.Poster,
                        Runtime = m.Runtime,
                        Title = m.Title,
                        Year = m.Year,
                        UserMovieDetailId = um.Id,
                        UserMovieDetailStatusId = um.StatusId,
                        UserMovieDetailUserRating = um.UserRating,
                        UserMovieDetailComments = um.Comments
                    }
                    ).ToList();

                return result;
            }
        }

        [HttpPost]
        [Route("Controllers/UserMovieDetails/UpdateUserMovieDetails")]
        public void Post(UserMovieDetailView data)
        {
            UserActivityManage userActivityManager = new UserActivityManage();
            UserMovieDetailManager userMovieDetailManager = new UserMovieDetailManager();

            UserMovieDetail userMovieDetail = new UserMovieDetail { Id = data.Id, UserId = data.UserId, MovieId = data.MovieId, StatusId = data.StatusId };

            UserActivity userActivity = new UserActivity
            {
                Id = 0,
                UserId =
                    data.UserId,
                ActivityDetails = "",
                ActivityDateTime = DateTime.Now
            };

            if(data.StatusId == 2)
                userActivity.ActivityDetails = string.Format("Movie : {0} - status watched", data.MovieName);
            else
                userActivity.ActivityDetails = string.Format("Movie : {0} - status watched to interested", data.MovieName);

            userMovieDetailManager.UpdateUserMovieDetail(userMovieDetail);
            userActivityManager.InsertUser(userActivity);
        }
    }
}