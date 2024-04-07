import './Header.scss';

import HeaderLogo from './header-logo.png';

function Header() {
  return (
    <header className="header-logo">
      <img src={HeaderLogo} alt="aviasales-logo" />
    </header>
  );
}

export default Header;
