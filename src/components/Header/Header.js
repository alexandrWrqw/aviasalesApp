import classes from './Header.module.scss';
import HeaderLogo from './header-logo.png';

function Header() {
  return (
    <header className={classes['header-logo']}>
      <img src={HeaderLogo} alt="aviasales-logo" />
    </header>
  );
}

export default Header;
