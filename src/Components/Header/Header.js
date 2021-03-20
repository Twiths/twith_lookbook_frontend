import '../../Main.css'
import Logo from '../Logo'

export default function Header() {
    return (
       <header>
          <div className="start">
             <Logo className="logo"/>
             <div className="search-bar">
             <input className="crayons-search crayons-textfield" type="search" placeholder="search..." />
             </div>
          </div>
          <div className="logins">
             <a href="/login">Login</a>
             <button className="signup">Creat Account</button>
          </div>
      </header>
    )
}
