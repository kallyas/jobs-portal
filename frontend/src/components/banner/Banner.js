/* eslint-disable */

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-lg-7 col-md-12 col-sm-12">
            <div
              className="inner-column wow fadeInUp animated"
              data-wow-delay="1000ms"
              style={{ visibility: "visible", animationDelay: 1000, animationName: "fadeInUp" }}
            >
              <div className="title-box">
                <h3>
                  There Are <span className="colored">93,178</span> Postings Here
                  <br /> For you!
                </h3>
                <div className="text">Find Jobs, Employment &amp; Career Opportunities</div>
              </div>
              <div className="job-search-form">
                <form method="post" action="job-list-v10.html">
                  <div className="row">
                    <div className="form-group col-lg-5 col-md-12 col-sm-12">
                      <span className="icon flaticon-search-1"></span>
                      <input
                        type="text"
                        name="field_name"
                        placeholder="Job title, keywords, or company"
                      />
                    </div>
                    <div className="form-group col-lg-4 col-md-12 col-sm-12 location">
                      <span className="icon flaticon-map-locator"></span>
                      <input type="text" name="field_name" placeholder="City or postcode" />
                    </div>
                    <div className="form-group col-lg-3 col-md-12 col-sm-12 btn-box">
                      <button type="submit" className="theme-btn btn-style-one">
                        <span className="btn-title">Find Jobs</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="popular-searches">
                <span className="title">Popular Searches : </span>
                <a href="#">Designer</a>,<a href="#">Developer</a>,<a href="#">Web</a>,
                <a href="#">IOS</a>,<a href="#">PHP</a>,<a href="#">Senior</a>,
                <a href="#">Engineer</a>,
              </div>
            </div>
          </div>

          <div className="image-column col-lg-5 col-md-12">
            <div className="image-box">
              <figure
                className="main-image wow fadeIn animated"
                data-wow-delay="500ms"
                style={{ visibility: "visible", animationDelay: 500, animationName: "fadeIn" }}
              >
                <img src="images/resource/banner-img-1.png" alt="" />
              </figure>
              <div
                className="info_block anm wow fadeIn animated"
                data-wow-delay="1000ms"
                data-speed-x="2"
                data-speed-y="2"
                style={{
                  transform: "translate3d(-11.76px, 1.36px, 0px) scale(1) rotate(0deg)",
                  opacity: 1,
                  visibility: "visible",
                  animationDelay: 1000,
                  animationName: "fadeIn",
                }}
              >
                <span className="icon flaticon-email-3"></span>
                <p>
                  Work Inquiry From <br />
                  Ali Tufan
                </p>
              </div>
              <div
                className="info_block_two anm wow fadeIn animated"
                data-wow-delay="2000ms"
                data-speed-x="1"
                data-speed-y="1"
                style={{
                  transform: "translate3d(-5.88px, 0.68px, 0px) scale(1) rotate(0deg)",
                  opacity: 1,
                  visibility: "visible",
                  animationDelay: 2000,
                  animationName: "fadeIn",
                }}
              >
                <p>10k+ Candidates</p>
                <div className="image">
                  <img src="images/resource/multi-peoples.png" alt="" />
                </div>
              </div>
              <div
                className="info_block_three anm wow fadeIn animated"
                data-wow-delay="1500ms"
                data-speed-x="4"
                data-speed-y="4"
                style={{
                  transform: "translate3d(-23.52px, 2.72px, 0px) scale(1) rotate(0deg)",
                  opacity: 1,
                  visibility: "visible",
                  animationDelay: 1500,
                  animationName: "fadeIn",
                }}
              >
                <span className="icon flaticon-briefcase"></span>
                <p>Creative Agency</p>
                <span className="sub-text">Startup</span>
                <span className="right_icon fa fa-check"></span>
              </div>
              <div
                className="info_block_four anm wow fadeIn animated"
                data-wow-delay="2500ms"
                data-speed-x="3"
                data-speed-y="3"
                style={{
                  transform: "translate3d(-17.64px, 2.04px, 0px) scale(1) rotate(0deg)",
                  opacity: 1,
                  visibility: "visible",
                  animationDelay: 2500,
                  animationName: "fadeIn",
                }}
              >
                <span className="icon flaticon-file"></span>
                <div className="inner">
                  <p>Upload Your CV</p>
                  <span className="sub-text">It only takes a few seconds</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
