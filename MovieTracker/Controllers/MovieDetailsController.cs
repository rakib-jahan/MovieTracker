using MovieTracker.DAL;
using MovieTracker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace MovieTracker.Controllers
{
    public class MovieDetailsController : ApiController
    {
        [HttpGet]
        [Route("Controllers/MovieDetails/GetMovieList")]
        public List<MovieDetailView> Get(int userId)
        {
            MovieManager movieManager = new MovieManager();
            UserMovieDetailManager userMovieDetailManager = new UserMovieDetailManager();
            List<MovieDetailView> movieList = new List<MovieDetailView>();

            var userMovieList = userMovieDetailManager.GetUserMovieDetailByUserId(userId);

            foreach (var item in movieManager.GetMovies())
            {
                var movie = userMovieList.Where(x => x.MovieId == item.Id).FirstOrDefault();

                movieList.Add(new MovieDetailView
                {
                    Id = item.Id,
                    Actors = item.Actors,
                    Director = item.Director,
                    Genre = item.Genre.GenreName,
                    GenreId = item.Genre.Id,
                    ImdbRating = item.ImdbRating,
                    IsAddedToWatchList = movie != null && movie.Id > 0 ? true : false,
                    Metascore = item.Metascore,
                    Plot = item.Plot,
                    Poster = item.Poster,
                    Runtime = item.Runtime,
                    Title = item.Title,
                    Year = item.Year,
                    UserMovieDetailId = movie != null ? movie.Id : 0
                });
            }

            return movieList;
        }

        [HttpPost]
        [Route("Controllers/MovieDetails/AddRemoveMovieToUser")]
        public int Post(UserMovieDetailView data)
        {
            UserActivityManage userActivityManager = new UserActivityManage();
            UserMovieDetailManager userMovieDetailManager = new UserMovieDetailManager();

            UserMovieDetail userMovieDetail = new UserMovieDetail
            {
                Id = data.Id,
                UserId = data.UserId,
                MovieId = data.MovieId,
                StatusId = 1
            };
            UserActivity userActivity = new UserActivity
            {
                Id = 0,
                UserId =
                    data.UserId,
                ActivityDetails = "",
                ActivityDateTime = DateTime.Now
            };

            if (data.Id > 0)
            {
                userMovieDetailManager.DeleteUserMovieDetail(userMovieDetail);
                userActivity.ActivityDetails = string.Format("Movie : {0} - removed from watched list", data.MovieName);
                userActivityManager.InsertUser(userActivity);
            }
            else
            {
                userMovieDetailManager.InsertUserMovieDetail(userMovieDetail);
                userActivity.ActivityDetails = string.Format("Movie : {0} - added to watched list", data.MovieName);
                userActivityManager.InsertUser(userActivity);
            }                

            return userMovieDetail.Id;
        }
    }
}