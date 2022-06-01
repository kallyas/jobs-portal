/* eslint-disable */
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../features/auth/authSlice";

const AuthLayout = ({ children }) => {
  const { user } = useSelector(authSelector)
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {
      navigate("/user/dashboard")
    }
  }, [user, navigate])

  return (
    <div className="page-wrapper mm-page mm-slideout" id="mm-0">
      <header className="main-header">
        <div className="container-fluid">
          <div className="main-box">
            <div className="nav-outer">
              <div className="logo-box">
                <div className="logo">
                  <a href="/">
                    <img src="images/logo-2.svg" alt="" title="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="outer-box">
              <div className="btn-box">
                <a href="/login" className="theme-btn btn-style-three call-modal">
                  Login / Register
                </a>
                <a href="/login?redirec=/jobs/add" className="theme-btn btn-style-one">
                  <span className="btn-title">Post a Job</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-header">
          <div className="logo">
            <a href="/">
              <img src="images/logo.svg" alt="" title="" />
            </a>
          </div>
        </div>
      </header>
      { children }
    </div>
  );
};

export default AuthLayout;
