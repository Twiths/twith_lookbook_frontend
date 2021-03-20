import React from 'react'

const logout = () => {
    localStorage.clear()
    window.location.href = "/"
}
function Home() {
    return (
        <div className="wrapper">
      <h1>Twiths LookBook</h1>
      <button onClick={logout}>Logout</button>
      </div>
    )
}

export default Home
