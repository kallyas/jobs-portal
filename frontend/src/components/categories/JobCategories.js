/* eslint-disable */
import React from "react";

const JobCategories = () => {
  return (
    <section className="job-categories">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>Popular Job Categories</h2>
          <div className="text">2020 jobs live - 293 added today.</div>
        </div>

        <div
          className="row wow fadeInUp animated"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <div className="category-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="content">
                <span className="icon flaticon-money-1"></span>
                <h4>
                  <a href="#">Accounting / Finance</a>
                </h4>
                <p>(2 open positions)</p>
              </div>
            </div>
          </div>
          <div className="category-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="content">
                <span className="icon flaticon-promotion"></span>
                <h4>
                  <a href="#">Marketing</a>
                </h4>
                <p>86 open positions)</p>
              </div>
            </div>
          </div>
          <div className="category-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="content">
                <span className="icon flaticon-vector"></span>
                <h4>
                  <a href="#">Design</a>
                </h4>
                <p>43 open positions)</p>
              </div>
            </div>
          </div>
          <div className="category-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="content">
                <span className="icon flaticon-web-programming"></span>
                <h4>
                  <a href="#">Development</a>
                </h4>
                <p>(12 open positions)</p>
              </div>
            </div>
          </div>
          <div className="category-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="content">
                <span className="icon flaticon-headhunting"></span>
                <h4>
                  <a href="#">Human Resource</a>
                </h4>
                <p>55 open positions)</p>
              </div>
            </div>
          </div>
          <div className="category-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="content">
                <span className="icon flaticon-rocket-ship"></span>
                <h4>
                  <a href="#">Project Management</a>
                </h4>
                <p>(2 open positions)</p>
              </div>
            </div>
          </div>

          <div className="category-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="content">
                <span className="icon flaticon-support-1"></span>
                <h4>
                  <a href="#">Customer Service</a>
                </h4>
                <p>(2 open positions)</p>
              </div>
            </div>
          </div>
          <div className="category-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="content">
                <span className="icon flaticon-first-aid-kit-1"></span>
                <h4>
                  <a href="#">Health and Care</a>
                </h4>
                <p>(25 open positions)</p>
              </div>
            </div>
          </div>
          <div className="category-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="content">
                <span className="icon flaticon-car"></span>
                <h4>
                  <a href="#">Automotive Jobs</a>
                </h4>
                <p>92 open positions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
