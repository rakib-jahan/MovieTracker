using MovieTracker.DAL;
using MovieTracker.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MovieTracker.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            Session["IsAuthenticated"] = true;
            var user = Session["User"] as User;
            ViewBag.UserId = user.Id;
            ViewBag.UserName = user.UserName;
            ViewBag.UserFullName = user.UserFullName;
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public ActionResult Registration()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpPost]
        public ActionResult Registration(UserRegistration userRegistration)
        {
            UserManager userManager = new UserManager();

            userManager.InsertUser(new DAL.User { 
                Id = userRegistration.Id, 
                Password = Base64Encode(userRegistration.Password),
                UserFullName = userRegistration.UserFullName,
                UserName = userRegistration.UserName
            });

            ModelState.Clear();
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public ActionResult Login()
        {
            ViewBag.Message = "Your contact page.";           

            return View();
        }

        [HttpPost]
        public ActionResult Login(Login login)
        {
            ViewBag.Message = "Your contact page.";

            UserManager userManager = new UserManager();
            var user = userManager.GetUsersById(login.UserName);

            if (user != null && login.UserName == user.UserName && login.Password == Base64Decode(user.Password))
            {
                Session["User"] = user;

                ModelState.Clear();
                return RedirectToAction("Index");
            }
            else
            {
                ViewBag.ErrorMessage = user != null ? "User name | Password mismatched" : "Not found";
                return View();
            }
        }

        [HttpGet]
        public ActionResult Logout()
        {
            Session["IsAuthenticated"] = false;
            Session["User"] = null;
            return RedirectToAction("Login");
        }

        private static string Base64Encode(string pass)
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(pass);
            return System.Convert.ToBase64String(plainTextBytes);
        }

        private static string Base64Decode(string encodedPass)
        {
            var base64EncodedBytes = System.Convert.FromBase64String(encodedPass);
            return System.Text.Encoding.UTF8.GetString(base64EncodedBytes);
        }
    }
}