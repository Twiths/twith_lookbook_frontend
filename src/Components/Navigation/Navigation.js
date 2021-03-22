import React, { useState } from "react";
import Logo from '../Logo'
import { BiMessageRoundedCheck } from "react-icons/bi";
import { RiNotificationLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

const Navigation = (props) => {
  const [showMenu, setshowMenu] = useState(false);

  const toggle = () => {
    setshowMenu(!showMenu);
    
    };
    
    const LogOut = () => {
        localStorage.clear();
        window.location.href = "/"
    }

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

          <span onClick={toggle}>
            <img src="https://picsum.photos/200" alt="Profile Pictrure" />
          </span>
        </div>
      </div>

      <div className={showMenu ? "dropdown-menu" : "dropdown-menu-close"}>
        <ul>
          <li onClick={toggle}>
            <a href="/profile">
              <div className="u-name">Twiths</div>
              <small className="u-name-id">@Twiths</small>
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
          <li onClick={LogOut}>
            <a href="/">Signout</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navigation;