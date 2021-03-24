import React, { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import Content from '../Content/Content'
import RightSidebar from '../RightSidebar/RightSidebar'
// import Login from '../Login/Login'
// import { Redirect } from 'react-router'

 
function Home() {
    const [mobileMenu, setmobileMenu] = useState(false);

  const toggle = () => {
    setmobileMenu(!mobileMenu);

};
  
    return (
        <>
      <Navigation openMenu={toggle} />

      <main className="main-container">
        <LeftSidebar burgerMenu={mobileMenu} closeMenu={toggle} />
        <Content />
        <RightSidebar />
      </main>
    </>
    )
}

export default Home
