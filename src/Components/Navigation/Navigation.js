import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import Logo from "../Logo";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

const Navigation = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const [showMenu, setshowMenu] = useState(false);
  const [decodedToken, setDecodedToken] = useState(null);

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/login");

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      setDecodedToken(decode(token));

      console.log(decode(token));

      if (decode(token).exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const toggle = () => {
    setshowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="headerContainer">
        <div
          className="headerContainer__hamburgerMenu"
          onClick={() => props.openMenu()}
        ></div>
        <a href="/" className="headerContainer__logo">
          <Logo size="3.125rem" />
        </a>

        <div className="headerContainer__searchBox">
          <form>
            <input type="text" placeholder="Search..." aria-label="search" />
          </form>
        </div>

        <div className="headerContainer__right">
          {user ? (
            <>
              <button>Write a post</button>
              <i className="hidden-search">
                <FiSearch />
              </i>
              <i>
                <BiMessageRoundedCheck />
              </i>
              <i>
                <RiNotificationLine />
              </i>
              <i onClick={toggle} onMouseOver={toggle}>
                <FaUserCircle />
              </i>
            </>
          ) : (
            <>
              <button onClick={() => (window.location.href = "/login")}>
                Login
              </button>
              <button component={Link} to={"/signin"}>
                Create Account
              </button>
            </>
          )}
        </div>
      </div>

      <div className={showMenu ? "dropdown-menu" : "dropdown-menu-close"}>
        <ul>
          <li onClick={toggle}>
            <a href="/profile">
              <div className="u-name">
                {decodedToken?.firstName || "Twiths"}
              </div>
              <small className="u-name-id">
                @{decodedToken?.username || "twiths"}
              </small>
            </a>
          </li>

          <li onClick={toggle}>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li onClick={toggle}>
            <a href="/post">Writing a Post</a>
          </li>
          <li onClick={toggle}>
            <a href="/list">Reading list</a>
          </li>
          <li onClick={toggle}>
            <a href="/settings">Settings</a>
          </li>
          <li onClick={logout}>
            <a href="/">Signout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;
