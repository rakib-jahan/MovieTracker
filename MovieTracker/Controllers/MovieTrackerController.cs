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
        public List<MovieDetail> Get(int userId)
        {
            MovieManager movieManager = new MovieManager();
            UserMovieMappingManager userMovieMappingManager = new UserMovieMappingManager();
            List<MovieDetail> movieList = new List<MovieDetail>();

            var userMovieMappingList = userMovieMappingManager.GetUserMovieMappingByUserId(userId);

            foreach (var item in movieManager.GetMovies())
            {
                movieList.Add(new MovieDetail
                {
                    Id = item.Id,
                    Actors = item.Actors,
                    Director = item.Director,
                    Genre = item.Genre.GenreName,
                    GenreId = item.Genre.Id,
                    ImdbRating = item.ImdbRating,
                    IsAddedToWatchList = false,
                    Metascore = item.Metascore,
                    Plot = item.Plot,
                    Poster = item.Poster,
                    Runtime = item.Runtime,
                    Title = item.Title,
                    Year = item.Year
                });
            }

            return movieList;
        }

        //// GET api/<controller>/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
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