using MovieTracker.DAL;
using MovieTracker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MovieTracker.Controllers
{
    public class MovieTrackerController : ApiController
    {
        [HttpGet]
        [Route("Controllers/GetMovieList")]
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

        //// GET api/<controller>/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        [HttpPost]
        [Route("Controllers/AddRemoveMovieToUser")]
        public int Post(UserMovieDetailView data)
        {
            UserMovieDetailManager userMovieDetailManager = new UserMovieDetailManager();
            UserMovieDetail userMovieDetail = new UserMovieDetail { Id = data.Id, UserId = data.UserId, MovieId = data.MovieId, StatusId = 1 };

            if (data.Id > 0)
                userMovieDetailManager.DeleteUserMovieDetail(userMovieDetail);
            else
                userMovieDetailManager.InsertUserMovieDetail(userMovieDetail);

            return userMovieDetail.Id;
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}