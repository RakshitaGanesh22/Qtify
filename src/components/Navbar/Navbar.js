import SearchButton from "../Button/Button.js";
import Logo from "../Logo/Logo.js";
import Search from "../Search/Search.js";
import Styles from "./Navbar.module.css";
export default function Navbar1() {
    return (

        <nav className={Styles.Navbar}>
           <Logo />
           <Search />
           <SearchButton name={"Give Feedback"}/>
        </nav>
        
        

    );
  }