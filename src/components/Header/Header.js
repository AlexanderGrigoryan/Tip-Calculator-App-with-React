import Styles from "./Header.module.css";
import Logo from "../../img/logo.svg";

function Header() {
  return <img className={Styles.header__logo} src={Logo} alt="logo" />;
}

export default Header;
