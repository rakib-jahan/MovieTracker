﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using MovieTracker.DAL;

namespace MovieTracker.Controllers
{
    public class UserMovieDetailsController : Controller
    {
        private MovieTrackerEntities db = new MovieTrackerEntities();

        // GET: UserMovieDetails
        public ActionResult Index()
        {
            var userMovieDetails = db.UserMovieDetails.Include(u => u.Movie).Include(u => u.Status).Include(u => u.User);
            return View(userMovieDetails.ToList());
        }

        // GET: UserMovieDetails/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            UserMovieDetail userMovieDetail = db.UserMovieDetails.Find(id);
            if (userMovieDetail == null)
            {
                return HttpNotFound();
            }
            return View(userMovieDetail);
        }

        // GET: UserMovieDetails/Create
        public ActionResult Create()
        {
            ViewBag.MovieId = new SelectList(db.Movies, "Id", "Title");
            ViewBag.StatusId = new SelectList(db.Status, "Id", "Name");
            ViewBag.UserId = new SelectList(db.Users, "Id", "UserName");
            return View();
        }

        // POST: UserMovieDetails/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,UserId,MovieId,StatusId,UserRating,Comments")] UserMovieDetail userMovieDetail)
        {
            if (ModelState.IsValid)
            {
                db.UserMovieDetails.Add(userMovieDetail);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.MovieId = new SelectList(db.Movies, "Id", "Title", userMovieDetail.MovieId);
            ViewBag.StatusId = new SelectList(db.Status, "Id", "Name", userMovieDetail.StatusId);
            ViewBag.UserId = new SelectList(db.Users, "Id", "UserName", userMovieDetail.UserId);
            return View(userMovieDetail);
        }

        // GET: UserMovieDetails/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            UserMovieDetail userMovieDetail = db.UserMovieDetails.Find(id);
            if (userMovieDetail == null)
            {
                return HttpNotFound();
            }
            ViewBag.MovieId = new SelectList(db.Movies, "Id", "Title", userMovieDetail.MovieId);
            ViewBag.StatusId = new SelectList(db.Status, "Id", "Name", userMovieDetail.StatusId);
            ViewBag.UserId = new SelectList(db.Users, "Id", "UserName", userMovieDetail.UserId);
            return View(userMovieDetail);
        }

        // POST: UserMovieDetails/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,UserId,MovieId,StatusId,UserRating,Comments")] UserMovieDetail userMovieDetail)
        {
            if (ModelState.IsValid)
            {
                db.Entry(userMovieDetail).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.MovieId = new SelectList(db.Movies, "Id", "Title", userMovieDetail.MovieId);
            ViewBag.StatusId = new SelectList(db.Status, "Id", "Name", userMovieDetail.StatusId);
            ViewBag.UserId = new SelectList(db.Users, "Id", "UserName", userMovieDetail.UserId);
            return View(userMovieDetail);
        }

        // GET: UserMovieDetails/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            UserMovieDetail userMovieDetail = db.UserMovieDetails.Find(id);
            if (userMovieDetail == null)
            {
                return HttpNotFound();
            }
            return View(userMovieDetail);
        }

        // POST: UserMovieDetails/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            UserMovieDetail userMovieDetail = db.UserMovieDetails.Find(id);
            db.UserMovieDetails.Remove(userMovieDetail);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
