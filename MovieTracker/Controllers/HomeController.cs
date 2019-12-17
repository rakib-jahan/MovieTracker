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
            ViewBag.UserFullName = "Rakib Jahan Khan";
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
                Password = userRegistration.Password,
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

            if (login.UserName == "rakib.cse.sust@gmail.com" && login.Password == "1")
            {
                ModelState.Clear();                
                return RedirectToAction("Index");
            }

            return View();
        }

        [HttpGet]
        public ActionResult Logout()
        {
            Session["IsAuthenticated"] = false;
            return RedirectToAction("Login");
        }
    }
}