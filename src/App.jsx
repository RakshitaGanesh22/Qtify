
import Styles from './App.module.css';
import Navbar1 from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero";
function App() {
  return (
    <div className={Styles.App}>
      <Navbar1 />
      <Hero />
    </div>
  );
}

export default App;
