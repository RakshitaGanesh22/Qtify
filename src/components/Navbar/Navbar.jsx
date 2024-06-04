import SearchButton from "../Button/Button.jsx";
import Logo from "../Logo/Logo.jsx";
import Search from "../Search/Search.jsx";
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