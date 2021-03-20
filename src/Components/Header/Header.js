
import '../../Main.css'
import Logo from '../Logo'

export default function Header() {
   const handeleBtnLogin = () => {
      window.location.href = "/login"
   }

   const handeleBtnSignup = () => {
      window.location.href = "/signup"
   }
    return (
       <header>
          <div className="start">
             <Logo className="logo"/>
             <div className="search-bar">
             <input className="crayons-search crayons-textfield" type="search" placeholder="search..." />
             </div>
          </div>
          <div className="logins">
            <button className="login" type="button" onClick={handeleBtnLogin}>Login</button>
             <button className="signup" type="button" onClick={handeleBtnSignup}>Creat Account</button>
          </div>
      </header>
    )
}
