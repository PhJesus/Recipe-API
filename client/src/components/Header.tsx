import logo from '../assets/react.svg'
import { BiSearchAlt2 } from 'react-icons/bi';
import './Header.css'

function Header() {
  return ( 
    <header className="site-header">
      <div className="container">
        <div className="site-header_inner">
          <img className="header-logo" src={logo} alt="" />
          <form>
            <input name='searchInput' className='searchBar' type="text" />
            <label htmlFor='searchInput' className='searchBarLabel'><BiSearchAlt2 size={15}/></label>
          </form>
        </div>
      </div>
    </header>
   );
}

export default Header;