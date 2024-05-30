import SearchButton from "./components/Button/Button.js";
import Logo from "./components/Logo/Logo.js";
import Search from "./components/Search/Search.js";
import Styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <div className={Styles.Navbar}>
         <Logo />
         <Search />
         <SearchButton name={"Give Feedback"}/>
      </div>
      
      
    </div>
  );
}

export default App;
